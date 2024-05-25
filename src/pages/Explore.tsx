import React from 'react';
import { NavBar, Footer } from "./Home.tsx";
import telegram from '../images/socials/telegram.png';


const Groups = () => {
  return (
    <>
      <div className=' bg-gradient-to-br via-sky-200 via-20% md:via-15% from-violet-300 to-30% md:to-20% to-neutral-50' >
        <NavBar />
        <div className=' px-[5vw] pt-[10vh]'>
          <div className=' flex items-center justify-between p-4 md:p-8'>
            <p className=' font-ubuntu text-xl md:text-2xl font-bold'>Groups</p>
            <span className="font-ubuntu max-md:text-sm text-violet-500 active">All</span>
          </div>
        </div>
      </div>
      <div className='px-[5vw] pb-[10vh] grid md:grid-cols-3 lg:grid-cols-4 gap-x-[5%] gap-y-8'>
        {Array.from(Array(12), (v, k) => k).map((_, i) => {
          return (
            <div key={i} className='bg-gradient-to-br via-sky-200 via-10% from-violet-300 to-15% to-neutral-50 rounded-2xl p-4 lg:p-8 drop-shadow-lg'>
              <div className="flex items-center gap-4 my-4">
                <div className=" rounded-full size-8 bg-gradient-to-tr from-slate-200 to-slate-500"></div>
                <div>
                  <p className=" font-ubuntu text-xl font-medium">Group {i + 1}</p>
                  <p className=" text-xs">{Math.ceil(Math.random() * 100)} Members</p>
                </div>
              </div>
              <p className=" text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus non felis nec quam euismod rutrum vel at urna.
              </p>
              <div className=' flex justify-between items-end'>
                <button className=' font-ubuntu mt-4 text-violet-500  hover:text-violet-400 py-2 px-2 max-md:text-sm ' >
                  <span className='mr-1'>Join now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block relative bottom-[1px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
                <img className='size-6' src={telegram} alt='media' />
              </div>
            </div>
          )
        })}
      </div>
      <div className='mx-auto text-center pb-[20vh]'>
        <button className=' font-ubuntu my-4 bg-gradient-to-tr from-sky-400 to-violet-500 hover:from-sky-300 hover:to-violet-400 rounded-lg py-2 px-4 text-white' > Show more </button>
      </div>
    </>
  )
}


const Explore = () => {
  return (
    <>
      <main className='max-w-screen-2xl mx-auto'>
        <Groups />
      </main>
      <Footer />
    </>
  )
}

export default Explore;