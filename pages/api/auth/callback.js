import { db } from "@vercel/postgres";
import QRCode from "qrcode";
import { google } from "googleapis";

const generateRandomString = (length = 8) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  const client = await db.connect();

  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Authorization code missing" });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.NEXT_GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  async function createFolderWithPermissions(folderName) {
    const drive = google.drive({ version: "v3", auth: oauth2Client });

    try {
      // Step 1: Create the folder
      const folderMetadata = {
        name: folderName,
        mimeType: "application/vnd.google-apps.folder",
        parents: ["1uwzcGKdvYNI54ePsyA4vc-BN9jgkLyk9"], // parent folder ID
      };

      const folder = await drive.files.create({
        resource: folderMetadata,
        fields: "id", // We need the ID of the folder to set permissions
      });

      const folderId = folder.data.id;
      console.log(`Folder created with ID: ${folderId}`);

      // Step 2: Set the permissions for the folder
      await drive.permissions.create({
        fileId: folderId,
        requestBody: {
          type: "anyone", // Allows anyone with the link to access
          role: "reader", // View only (no edit or delete permissions)
        },
      });

      console.log(`Permissions set: View-only access for ${folderName}`);

      // Step 3: Get the shared link (for viewing)
      const link = await drive.files.get({
        fileId: folderId,
        fields: "webViewLink",
      });

      return link.data.webViewLink; // This is the link to view the folder
    } catch (err) {
      console.error("Error creating folder and setting permissions:", err);
      throw err;
    }
  }

  const insertFolder = async (uniqueCode, shareLink, qrCodeDataUrl) => {
    try {
      const result =
        await client.sql`INSERT INTO folders (unique_code, share_link, qr_code) VALUES (${uniqueCode}, ${shareLink}, ${qrCodeDataUrl}) RETURNING *;`;
      console.log("Inserted folder:", result.rows[0]);
      return result.rows[0];
    } catch (err) {
      console.error("Error inserting folder:", err);
      throw new Error("Database insertion failed");
    }
  };

  const createFoldersAndInsertData = async (numberOfFolders) => {
    const results = [];

    for (let i = 1; i <= numberOfFolders; i++) {
      const uniqueCode = generateRandomString();
      try {
        const sharedLink = await createFolderWithPermissions(uniqueCode);

        const qrCodeDataUrl = await QRCode.toDataURL(
          `https://www.maarikakauksi.com/${uniqueCode}`
        );

        const insertedFolder = await insertFolder(
          uniqueCode,
          sharedLink,
          qrCodeDataUrl
        );

        results.push(insertedFolder);
      } catch (error) {
        console.error(
          `Error during folder creation or sharing: ${error.message}`
        );
      }

      await sleep(1000);
    }

    return results;
  };

  try {
    const foldersCreated = await createFoldersAndInsertData(10); // Change numberOfFolders as needed
    res.status(200).json({
      message: "Folders created and shared successfully",
      folders: foldersCreated,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
}
