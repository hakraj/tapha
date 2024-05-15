import React from 'react';
import { useState } from 'react';
import phone from './images/phone.png';
import laptop from './images/laptop.png';
import intro from './images/marketing-consulting-concept-illustration_114360-9027.avif';
import discord from './images/discord.png';
import telegram from './images/Telegram_logo.svg.webp';
import whatsapp from './images/whatsapp.webp';
import coming from './images/coming-soon.png';



const year = new Date().getFullYear();

const Dropdown = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className=" fixed top-0 right-0 z-50 h-screen w-screen bg-black/50" >
      <div className=" absolute top-0 right-0 w-2/3 h-full bg-white ">
        <div className=" flex justify-end py-4 px-[5vw]">
          <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className='py-4 px-[5vw] w-full'>
          <div>
            <a href='/'>
              <div className="flex items-center gap-8 my-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p className='font-light'>home</p>
              </div>
            </a>
            <a href='#product'>
              <div className="flex items-center gap-8 my-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                <p className='font-light'>product</p>
              </div>
            </a>
            <a href='/blog'>
              <div className="flex items-center gap-8 my-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
                <p className='font-light'>blog</p>
              </div>
            </a>
            <a href='/about'>
              <div className="flex items-center gap-8 my-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <p className='font-light'>about</p>
              </div>
            </a>
            <a href='#contact'>
              <div className="flex items-center gap-8 my-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <p className='font-light'>contact</p>
              </div>
            </a>

          </div>
        </div>
        <div className=' absolute bottom-[5vh] w-full'>
          <div className='flex flex-col justify-center items-center gap-4' >
            <button className=' bg-transparent border border-transparent hover:border-sky-400 rounded-lg py-1 px-2 text-sm text-gray-700 h-fit' > Login </button>
            <button className=' bg-gradient-to-tr from-sky-400 to-violet-500 hover:from-sky-300 hover:to-violet-400 rounded-lg py-1 px-2 text-sm text-white h-fit' > Sign up </button>
          </div>
          <p className='text-xs text-center text-black font-mono mt-4'>&copy; tapha.inc {year}</p>
        </div>
      </div>
    </div>
  )
}

const NavBar = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleDropdown = () => {
    setIsDropdown(prev => !prev);
  }

  return (
    <nav className='flex justify-between items-baseline py-4 px-[5vw]'>
      <div>
        <p className='logo text-2xl font-bold font-mono' > tapha </p>
      </div>
      <div className='md:hidden' >
        {isDropdown && <Dropdown onClose={handleDropdown} />}
        <svg onClick={handleDropdown} className="cursor-pointer w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      < div className='hidden md:flex items-center gap-4 font-light' >
        <a href='#product'>product </a>
        <a href='/blog'> blog </a>
        <a href='/about'> about </a>
        <a href='#contact'> contact </a>
      </div>
      <div className='hidden md:flex items-center gap-4' >
        <button className=' bg-transparent border border-transparent hover:border-sky-400 rounded-lg py-1 px-2 text-sm text-gray-700 h-fit' > Login </button>
        <button className=' bg-gradient-to-tr from-sky-400 to-violet-500 hover:from-sky-300 hover:to-violet-400 rounded-lg py-1 px-2 text-sm text-white h-fit' > Sign up </button>
      </div>
    </nav>
  )
}

const Intro = () => {
  return (
    <div className=' bg-gradient-to-br via-sky-200 via-10% from-violet-300 to-15% to-neutral-50 '>
      <NavBar />
      <div className='text-center pt-[15vw] pb-[75vw] md:pt-[12.5vw] md:pb-[33vw] px-[5vw]'>
        <h1 className=' font-ubuntu text-5xl md:text-6xl font-bold'>Build your Community</h1>
        <p className=' md:text-xl font-normal my-4'>Easily manage paid groups across all social platforms </p>
        <button className='my-4 bg-gradient-to-tr from-sky-400 to-violet-500 hover:from-sky-300 hover:to-violet-400 rounded-lg py-2 px-4 text-white' > Get started </button>
        <p className='font-mono text-sm'>Already have an account? <span className='text-sky-400 hover:underline'>Login</span></p>
        <div className=' absolute left-[10%] md:hidden w-4/5 mt-[10vw] rounded-[2.5rem] shadow-xl shadow-sky-400/50'>
          <img className='w-full h-auto' src={phone} alt='tapha user dashboard on mobile view' />
        </div>
        <div className=' absolute left-[10%] hidden md:block w-4/5 mt-[10vw] p-1 bg-slate-300 rounded-2xl shadow-xl shadow-sky-400/50'>
          <img className='w-full h-auto rounded-2xl' src={laptop} alt='tapha user dashboard on desktop view' />
        </div>
        <div className='f-icons'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-300 absolute top-16 lg:top-32 left-1/2">
            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-violet-400 absolute top-20 lg:top-40 right-4 lg:right-32">
            <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-300 absolute top-24 left-16 lg:left-40">
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-violet-400 absolute top-1/2 md:top-[360px] left-16 lg:left-32">
            <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-300 absolute top-[45%] right-8">
            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden md:inline-block w-6 h-6 text-violet-400 absolute top-[320px] lg:top-[66%] right-60">
            <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden md:inline-block w-6 h-6 text-sky-300 absolute top-1/2 lg:top-3/4 left-10">
            <path fillRule="evenodd" d="M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}

const Product = () => {
  return (
    <>
      <div id='product' className=' relative z-10 py-[25vw] md:py-[15vw] px-[5vw] bg-white flex flex-col lg:flex-row justify-between items-center'>
        <div className=' max-lg:text-center lg:w-3/5'>
          <h1 className=' font-ubuntu text-3xl md:text-4xl font-bold'>Streamlining Paid Community <br />Management</h1>
          <p className='my-4 md:my-6 md:w-3/4 max-lg:mx-auto lg:w-4/5 '>
            Our platform offers seamless integration of payment collection,
            ensuring effortless tracking and management of member subscriptions.
            Admins can easily oversee paid memberships, automate the removal of
            non-compliant members, and focus on growing their communities.
          </p>
        </div>
        <img className=' w-4/5 md:w-3/4 lg:w-1/3' src={intro} alt='tapha intro' />
      </div>
      <div>
        <p className='font-mono max-md:text-sm text-center mb-4'>Our services cover</p>
        <div className=' relative flex items-center justify-between w-1/4 md:w-1/6 mx-auto'>
          <img className='w-1/4 grayscale' src={discord} alt='media' />
          <img className='w-1/4' src={telegram} alt='media' />
          <img className='w-1/4 grayscale' src={whatsapp} alt='media' />
          <img className='w-[12.5%] absolute top-0 left-[18%]' src={coming} alt='media' />
          <img className='w-[12.5%] absolute top-[-2.5%] right-[-5%]' src={coming} alt='media' />
        </div>
      </div>
    </>
  )
}


const Home = () => {
  return (
    <main>
      <Intro />
      <Product />
    </main>
  )
}

export default Home;