import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MailingList() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  async function submit() {
    if (!email) return;

    try {
      const res = fetch("/api/emailList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const success = await res;
      if (success.ok) {
        if (success.status === 201)
          toast(
            "Suured tänud liitumise eest! Tundub, et oled juba meie liitumisnimekirjas. Meil on hea meel, et oled osa meie kogukonnast."
          );
        if (success.status === 200)
          toast(
            "Suured tänud liitumise eest! Oleme rõõmsad, et oled osa meie kogukonnast!"
          );
        setEmail("");
        setIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-end pt-6 px-6 flex items-center">
      <button
        onClick={openModal}
        className="bg-[#ffd8df] hover:bg-[#efc2ca] text-gray-800 font-medium py-1 px-3 rounded-lg  transition"
      >
        Jälgi postitusi
      </button>
      <ToastContainer />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Kallis külastaja!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Kas soovite olla kursis meie tegemistega? Liituge meie
                      uudiskirjaga, et saada värskeid teateid uutest blogi
                      postitustest ja eripakkumistest!
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col ">
                    <label htmlFor="email" className="sr-only">
                      E-posti aadress
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Sinu e-post"
                      required
                      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 w-full sm:w-64"
                    />
                    <button
                      type="button"
                      className="flex max-w-[100px] mt-4 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={submit}
                    >
                      Liitu
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
