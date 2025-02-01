export default function handler(req, res) {
  const clientId = process.env.NEXT_GOOGLE_CLIENT_ID; // Your Client ID
  const redirectUri = process.env.GOOGLE_REDIRECT_URI; // Your Redirect URI
  const scope = "https://www.googleapis.com/auth/drive.file"; // The scope (you can modify this as needed)

  const authUrl =
    `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${clientId}&` +
    `redirect_uri=${encodeURIComponent(redirectUri)}&` +
    `response_type=code&` +
    `scope=${encodeURIComponent(scope)}&` +
    `access_type=offline`;

  // Redirect the user to Google OAuth URL
  res.redirect(authUrl);
}
