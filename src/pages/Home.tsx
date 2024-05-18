import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import phone from '../images/phone.png';
import laptop from '../images/laptop.png';
import intro from '../images/marketing-consulting-concept-illustration_114360-9027.avif';
import comingSoon from '../images/Coming-Soon-Transparent.png';
import blog from '../images/blog.webp';
// features images
import f1 from '../images/features/Seamless Payment Integration.jpg';
import f2 from '../images/features/Automated Member Management.jpg';
import f3 from '../images/features/Effortless Subscription Tracking.jpg';
import f4 from '../images/features/Compliance Automation.jpg';
// socials images; attribute to freepik from flaticon
import discord from '../images/socials/discord.png';
import telegram from '../images/socials/telegram.png';
import whatsapp from '../images/socials/whatsapp.png';
import linkedin from '../images/socials/linkedin.png'
import facebook from '../images/socials/facebook.png'
import x from '../images/socials/twitter.png'


const year = new Date().getFullYear();

const Dropdown = ({ onClose }: { onClose: () => void }) => {
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e) => {
      if (!ref.current?.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", clickOutside);
  }, [ref, onClose])
  return (
    <div className=" fixed flex justify-end top-0 right-0 z-50 h-screen w-screen bg-black/50" >
      <div ref={ref} className="relative w-2/3 h-full bg-white ">
        <div className=" flex justify-end py-4 px-[5vw]">
          <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className='py-4 max-[320px]:py-0 px-[5vw] w-full'>
          <Link onClick={() => onClose()} to='/'>
            <div className="flex items-center gap-8 my-8 max-[320px]:my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 max-[320px]:w-5 max-[320px]:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <p className='font-light max-[320px]:text-sm'>home</p>
            </div>
          </Link>
          <a onClick={() => {
            onClose()
          }
          } href='/#product'>
            <div className="flex items-center gap-8 my-8 max-[320px]:my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 max-[320px]:w-5 max-[320px]:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              <p className='font-light max-[320px]:text-sm'>product</p>
            </div>
          </a>
          <a onClick={() => onClose()} href='/#features'>
            <div className="flex items-center gap-8 my-8 max-[320px]:my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 max-[320px]:w-5 max-[320px]:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <p className='font-light max-[320px]:text-sm'>features</p>
            </div>
          </a>
          <Link onClick={() => onClose()} to='/blog'>
            <div className="flex items-center gap-8 my-8 max-[320px]:my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 max-[320px]:w-5 max-[320px]:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
              <p className='font-light max-[320px]:text-sm'>blog</p>
            </div>
          </Link>
          <a onClick={() => onClose()} href='#contact'>
            <div className="flex items-center gap-8 my-8 max-[320px]:my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 max-[320px]:w-5 max-[320px]:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <p className='font-light max-[320px]:text-sm'>contact</p>
            </div>
          </a>
        </div>
        <div className=' absolute bottom-[5vh] w-full'>
          <div className='flex flex-col justify-center items-center gap-4' >
            <button className=' font-ubuntu bg-transparent border border-transparent hover:border-violet-400 rounded-lg py-2 px-4 max-[320px]:py-1 max-[320px]:px-2 text-sm text-violet-400 h-fit' > Login </button>
            <button className=' font-ubuntu bg-gradient-to-tr from-sky-400 to-violet-500 hover:from-sky-300 hover:to-violet-400 rounded-lg py-2 px-4 max-[320px]:py-1 max-[320px]:px-2 text-sm text-white h-fit' > Sign up </button>
          </div>
          <p className='text-xs text-center text-black font-ubuntu font-light mt-4'>&copy; tapha.inc {year}</p>
        </div>
      </div>
    </div>
  )
}

export const NavBar = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <nav className='flex justify-between items-baseline py-4 px-[5vw]'>
      <Link to="/">
        <p className='logo text-2xl font-bold font-mono' > tapha </p>
      </Link>
      <div className='md:hidden' >
        {isDropdown && <Dropdown onClose={() => setIsDropdown(false)} />}
        <svg onClick={() => setIsDropdown(true)} className="cursor-pointer w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      < div className='hidden md:flex items-center gap-4 font-light' >
        <a href='/#product'>product </a>
        <a href='/#features'> features </a>
        <Link to='/blog'> blog </Link>
        <a href='#contact'> contact </a>
      </div>
      <div className='hidden md:flex items-center gap-4' >
        <button className=' font-ubuntu bg-transparent border border-transparent hover:border-violet-400 rounded-lg py-2 px-4 text-sm text-violet-400 h-fit' > Login </button>
        <button className=' font-ubuntu bg-gradient-to-tr from-sky-400 to-violet-500 hover:from-sky-300 hover:to-violet-400 rounded-lg py-2 px-4 text-sm text-white h-fit' > Sign up </button>
      </div>
    </nav>
  )
}

const Intro = () => {
  return (
    <div className='relative bg-gradient-to-br via-sky-200 via-10% from-violet-300 to-15% to-neutral-50 '>
      <NavBar />
      <div className=' text-center pt-[10vh] pb-[75vw] md:pt-[12.5vw] md:pb-[33vw] px-[5vw]'>
        <h1 className=' font-ubuntu text-5xl md:text-6xl font-bold'>Build your Community</h1>
        <p className=' md:text-xl font-normal my-4 text-slate-700'>Easily manage paid groups across all social platforms </p>
        <button className=' font-ubuntu my-4 bg-gradient-to-tr from-sky-400 to-violet-500 hover:from-sky-300 hover:to-violet-400 rounded-lg py-2 px-4 text-white' > Get started </button>
        <p className='font-ubuntu text-sm font-light'>Already have an account? <span className='text-sky-400 hover:underline cursor-pointer'>Login</span></p>
        <div className=' absolute left-[10%] lg:left-[12.5%] w-4/5 lg:w-3/4 mt-[10vw] p-2 md:p-1 bg-slate-300 rounded-[2.5rem] md:rounded-2xl shadow-xl shadow-sky-400/50'>
          <img fetchPriority='high' className='w-full h-auto rounded-[2.5rem] md:hidden' src={phone} alt='tapha user dashboard on mobile view' />
          <img fetchPriority='high' className='w-full h-auto rounded-2xl hidden md:block' src={laptop} alt='tapha user dashboard on desktop view' />
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-violet-400 absolute top-1/2 md:top-[360px] left-16 lg:left-60">
            <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-300 absolute top-[45%] right-8">
            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden md:inline-block w-6 h-6 text-violet-400 absolute top-[320px] lg:top-[66%] right-60">
            <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden md:inline-block w-6 h-6 text-sky-300 absolute top-1/2 lg:top-3/4 left-24">
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
      <div id='product' className='relative z-10 py-[15vh] px-[5vw] bg-white flex flex-col lg:flex-row justify-between items-center'>
        <div className=' max-lg:text-center lg:w-3/5'>
          <h1 className=' font-ubuntu text-3xl md:text-4xl font-bold'>Streamlining Paid Community <br />Management</h1>
          <p className='my-4 md:my-6 md:w-3/4 max-lg:mx-auto lg:w-4/5 text-slate-700 '>
            Our platform offers seamless integration of payment collection,
            ensuring effortless tracking and management of member subscriptions.
            Admins can easily oversee paid memberships, automate the removal of
            non-compliant members, and focus on growing their communities.
          </p>
        </div>
        <img loading='lazy' className='w-3/4 md:w-3/5 lg:w-1/3' src={intro} alt='tapha intro' />
      </div>
      <div className='relative z-10 bg-white'>
        <p className='font-ubuntu font-light text-center mb-4'>Our services cover</p>
        <div className=' relative flex items-center justify-between w-3/4 md:w-2/3 lg:w-1/3 mx-auto'>
          <img className='w-1/4' src={discord} alt='media' />
          <img className='w-1/4' src={telegram} alt='media' />
          <img className='w-1/4' src={whatsapp} alt='media' />
          <img className='w-[25%] absolute top-[-3%] left-[5%]' src={comingSoon} alt='media' />
          <img className='w-[25%] absolute top-[-5%] right-[-3%]' src={comingSoon} alt='media' />
        </div>
      </div>
    </>
  )
}

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      img: f1,
      title: 'Seamless Payment Integration',
      body: 'Tapha effortlessly integrates with payment gateways, streamlining subscription collection for hassle-free management.'
    },
    {
      img: f2,
      title: 'Automated Member Management',
      body: 'Let Tapha handle member oversight for you. Automated removal of non-compliant members saves time for community growth.',
    },
    {
      img: f3,
      title: 'Effortless Subscription Tracking',
      body: "Track subscriptions effortlessly with Tapha's intuitive dashboard, ensuring smooth membership management and informed decision-making.",
    },
    {
      img: f4,
      title: 'Compliance Automation',
      body: "Ensure community compliance effortlessly. Tapha's automation feature enforces rules, fostering a safe environment without manual intervention.",
    },
  ]
  return (
    <div id='features' className='relative z-10 bg-white px-[10vw] xl:px-[5vw] pt-[15vh] pb-[5vh] grid gap-y-[3%] md:gap-y-[5%] gap-x-[10%] xl:gap-x-[5%] md:grid-cols-2 xl:grid-cols-4'>
      {features.map(({ img, title, body }, i) => {
        return (
          <div key={i} className=' bg-gradient-to-br via-sky-200 via-10% from-violet-300 to-15% to-neutral-50 rounded-2xl p-4 lg:p-6 lg:pr-0 pr-0 drop-shadow-lg'>
            <img loading='lazy' className=' max-w-full h-auto rounded-l-2xl ' src={img} alt='feature 1' />
            <h3 className=' font-ubuntu text-xl my-4 mr-4'>{title}</h3>
            <p className=' text-sm text-slate-700 pr-4'>{body}</p>
            <button onClick={() => navigate('/blog/first')} className=' font-ubuntu my-4 bg-gradient-to-tr from-sky-400 to-violet-500 hover:from-sky-300 hover:to-violet-400 rounded-lg py-2 px-4 text-white' >
              <span className='mr-1'>Read more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )
      })}
    </div>
  )
}

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className=' px-[5vw] py-[15vh] max-md:pt-[35vh] max-[320px]:pt-[50vh] flex flex-col lg:flex-row justify-between items-center'>
      <img loading='lazy' className='w-2/3 md:w-1/2 lg:w-1/4' src={blog} alt='tapha intro' />
      <div className=' max-lg:text-center text-right lg:w-3/5'>
        <h1 className=' font-ubuntu text-3xl md:text-4xl font-bold'>Stay Informed with Tapha's Insights</h1>
        <p className='my-4 md:my-6 md:w-3/4 max-lg:mx-auto ml-auto  text-slate-700 '>
          Dig into Community Management Strategies! Discover expert insights,
          industry tips, and the latest service updates on our blog.
        </p>
        <button onClick={() => navigate('/blog')} className=' font-ubuntu my-4 border border-violet-500 text-violet-400 rounded-lg bg-gradient-to-tr hover:from-sky-300 hover:to-violet-400 hover:border-transparent hover:text-white py-2 px-4' >
          Check our blog
        </button>
      </div>
    </div>

  )
}

const CTA = () => {
  return (
    <div className=' text-center px-[10vw] pt-[10vh] pb-[25vh]'>
      <h1 className=' font-ubuntu text-4xl md:text-5xl font-bold'>Start Your Journey Today</h1>
      <p className=' md:text-xl font-normal my-4 text-slate-700'>subscribe to get started and revolutionize your community management.</p>
      <div className='flex items-center gap-4 justify-center' >
        <button className=' font-ubuntu bg-transparent border border-transparent hover:border-violet-400 rounded-lg py-2 px-4 text-violet-400 h-fit' > Login </button>
        <button className=' font-ubuntu bg-gradient-to-tr from-sky-400 to-violet-500 hover:from-sky-300 hover:to-violet-400 rounded-lg py-2 px-4 text-white h-fit' > Sign up </button>
      </div>
    </div>
  )
}

export const Footer = () => {
  return (
    <footer id='contact' className='px-[10vw] py-[5vh] bg-gradient-to-tl from-violet-700 via-sky-800 via-10% to-15% to-neutral-900 text-neutral-50 text-center'>
      <div>
        <p className='logo text-2xl font-bold font-mono'> tapha </p>
        < div className='flex max-md:flex-col items-center justify-center gap-4 my-6 md:my-8 mx-auto font-light' >
          <a href='/#product'>product </a>
          <a href='/#features'> features </a>
          <Link to='/blog'> blog </Link>
          <a href='#contact'> contact </a>
        </div>
        <div className=' flex items-center justify-between w-1/3 md:w-40 my-6 md:my-8 mx-auto'>
          <img className='w-1/4 ' src={linkedin} alt='linkedin-icon' />
          <img className='w-1/4' src={facebook} alt='facebook-icon' />
          <img className='w-1/4 ' src={x} alt='x-icon' />
        </div>

        <p className='text-xs font-ubuntu font-light mt-4'>copyright &copy;{year}. All right reserved. Tapha inc.</p>
      </div>
    </footer>
  )
}

const Home = () => {
  return (
    <>
      <main className=' max-w-screen-2xl mx-auto'>
        <Intro />
        <Product />
        <Features />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default Home;