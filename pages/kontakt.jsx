import Header from '../components/header'
import { useState } from 'react'
import Head from "next/head";
import Footer from '../components/footer'


export default function Kontakt() {

  const [sendMessage, toggleSendMessage] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendMail = (e) => {
    e.preventDefault();
    console.log('Sending')

    let data = {
      name,
      email,
      phone,
      subject,
      message
    }
    
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')    
        setName('')
        setEmail('')
        setPhone('')
        setSubject('')
        setMessage('')
        toggleSendMessage(true)
        setTimeout(() => {
          toggleSendMessage(false) 
        }, 6000);
      }
    })
  }

    return (
      <div >
        <Head>
          <title>Kontakt</title>
          <meta name="description" content="Võtke minuga ühendust!" />
        </Head>
        <Header color="black" />
        <div className='min-h-screen flex flex-col'>
          <div className='lg:ml-[80px] p-5 lg:p-6 flex sm:flex-row flex-col items-end justify-end bg-gradient-to-l from-[#ffd9d98f] space-x-2 space-y-1'>
            <a href='mailto:maarikaphoto@gmail.com' className='flex font-light font-europa tracking-widest items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 lg:w-6 h-4 lg:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div className='text-xs lg:text-base'>maarikaphoto@gmail.com</div>
            </a>
            <a href='tel:+37255502780' className='flex font-light font-europa tracking-widest items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 lg:w-6 h-4 lg:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <div className='text-xs lg:text-base'>+372 55502780</div>
            </a>
          </div>
        <div className='w-full max-w-[600px] max-h-[600px] my-auto bg-contactBackground bg-cover bg-center bg-no-repeat  mx-auto flex items-center h-full' >
          <form onSubmit={sendMail} id="myForm" className="flex flex-col p-4 w-full h-full items-center justify-center ">
            <div className="max-w-[400px] w-full ">
            <h1 className='mb-10 text-xl text-medium text-gray-700 text-center'> Võtke minuga ühendust! </h1>
              <div className="mt-1 w-full mb-2 flex justify-center">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="shadow-sm focus:ring-indigo-500 px-2 focus:border-indigo-500 block w-full text-xs border-gray-400 outline-gray-500 border rounded-md  h-[43px]"
                  placeholder="Nimi"
                  value={name} onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="mt-1 w-full mb-2 flex justify-center">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  className="shadow-sm focus:ring-indigo-500 px-2 focus:border-indigo-500 block w-full text-xs border-gray-400 outline-gray-500 border rounded-md  h-[43px] "
                  placeholder="Telefon"
                  value={phone} onChange={(e)=>setPhone(e.target.value)}
                />
              </div>
              <div className="mt-1 w-full mb-2 flex justify-center">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="shadow-sm focus:ring-indigo-500 px-2 focus:border-indigo-500 block w-full text-xs  border-gray-400 outline-gray-500 border rounded-md  h-[43px]"
                  placeholder="Teema"
                  value={subject} onChange={(e)=>setSubject(e.target.value)}
                  
                />
              </div>
              <div className="mt-1 w-full mb-2 lg:mb-4 flex justify-center">
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  className="shadow-sm focus:ring-indigo-500 px-2 focus:border-indigo-500 block w-full text-xs border-gray-400 outline-gray-500 border rounded-md  h-[43px] "
                  placeholder="Email"
                  value={email} onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mt-1 w-full  mb-2 lg:mb-4">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block p-2 w-full min-h-[109px] text-xs  border-gray-400 outline-gray-500 border rounded-md max-h-[250px] "
                  required
                  placeholder="Sõnum"
                  value={message} onChange={(e)=>setMessage(e.target.value)}
                />
              </div>
              <div className="flex w-full justify-end ">
                <input value="Saada sõnum" type="submit"  className="text-white bg-blue-400 min-w-[82px] cursor-pointer z-30 mt-2 text-[9.6px] lg:text-base inline-flex items-center px-5  py-2 text-center justify-center font-bold rounded-full  shadow-sm  focus:outline-none focus:ring-2" /> 
              </div>
              {sendMessage && <div className="text-green text-[9.5px] lg:text-base font-medium mt-3"> Aitäh!! Sõnum edukalt edasi toimetatud </div>}
              </div>
            </form>
          </div>
      </div>
      <div className="fixed bottom-4 z-20 px-6 w-full">
        <Footer className="text-black justify-between" color="fill-black" />
      </div>
      </div>
    );
}