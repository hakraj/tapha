import React from "react";
import { NavBar, Footer } from "./Home.tsx";
import first from '../images/first.jpg'

const Intro = () => {
  return (
    <div className=' bg-gradient-to-br via-sky-200 via-10% from-violet-300 to-15% to-neutral-50' >
      <NavBar />
      <div className=" py-[10vh]">
        <div className=' mx-auto md:flex items-center justify-between w-3/4 md:w-[85%] lg:w-2/3 bg-gradient-to-tl via-sky-200 via-10% from-violet-300 to-15% to-neutral-50 rounded-2xl p-4 lg:p-8 drop-shadow-lg'>
          <div className=" md:pr-6 lg:pr-8">
            <p className=" text-sm font-medium text-violet-500">First</p>
            <h1 className="font-ubuntu text-xl md:text-2xl font-bold">Lorem ipsum dolor sit amet</h1>
            <div className="flex items-center gap-4 my-4">
              <div className=" rounded-full h-8 w-8 bg-gradient-to-tr from-slate-200 to-slate-500"></div>
              <div>
                <p className=" text-xs font-medium">John Doe</p>
                <p className=" text-xs">Executive</p>
              </div>
            </div>
            <p className=" text-gray-700 max-md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus non felis nec quam euismod rutrum vel at urna.
              Fusce et enim vel felis efficitur interdum.
              Cras vulputate metus imperdiet felis mollis,
              sit amet mollis dolor eleifend.
              {/* Ut ante magna, suscipit vitae porttitor fringilla, 
              porttitor quis lectus. 
              Praesent lacinia, 
              tellus congue vehicula faucibus, enim enim placerat elit, 
              id aliquam dolor lectus nec purus. Aliquam et dignissim orci. 
              Pellentesque finibus ligula et gravida venenatis. 
              Pellentesque sed lectus tempus nibh condimentum aliquet. 
              Aliquam volutpat facilisis augue, eu tempus nibh consequat ut. */}
            </p>
            <button className=' font-ubuntu my-4 bg-gradient-to-tr from-sky-400 to-violet-500 hover:from-sky-300 hover:to-violet-400 rounded-lg py-2 px-4 max-md:text-sm text-white' >
              <span className='mr-1'>Read more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block relative bottom-[1px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          <img className=" max-md:mt-4 md:w-2/5 rounded-xl" src={first} alt="first post" />
        </div>
      </div>
    </div>
  )
}

const Category = () => {
  return (
    <div className="px-[5vw] py-[10vh]">
      <div className="flex items-center justify-center gap-4 md:gap-8 ">
        <span className="font-ubuntu max-md:text-sm text-violet-500 active">All</span>
        <span className="font-ubuntu max-md:text-sm">First</span>
        <span className="font-ubuntu max-md:text-sm">Second</span>
      </div>

      <div className="px-[5vw]">
        {[1, 2, 3,].map((_, i) => {
          return (
            <div key={i} className="flex max-md:flex-col gap-x-[20%] my-[10vh] md:my-[5vh]">
              <div className="md:w-3/5">
                <p className=" border-l-2 border-violet-500 pl-2 text-sm font-medium text-violet-500">First</p>
                <h1 className="font-ubuntu text-2xl md:text-3xl font-bold my-4">Lorem ipsum dolor sit amet</h1>
                <p className=" text-gray-700 max-md:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non felis nec quam euismod rutrum vel at urna.
                  Fusce et enim vel felis efficitur interdum.
                  Cras vulputate metus imperdiet felis mollis,
                  sit amet mollis dolor eleifend.
                </p>
                <button className=' font-ubuntu my-4 text-violet-500  hover:text-violet-400 py-2 px-2 max-md:text-sm ' >
                  <span className='mr-1'>Read more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block relative bottom-[1px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <div className="justify-self-end text-right">
                <p className="border-r-2 md:border-r-0 md:border-l-2 border-sky-500 px-2 text-sm font-medium text-gray-500">December 1, 1960</p>
                <div className="flex justify-end md:justify-start items-center gap-4 mt-8">
                  <div className=" rounded-full h-10 w-10 bg-gradient-to-tr from-slate-200 to-slate-500"></div>
                  <div>
                    <p className=" text-sm font-medium">John Doe</p>
                    <p className=" text-sm">Executive</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

const Blog = () => {
  return (
    <>
      <main className='max-w-screen-2xl mx-auto'>
        <Intro />
        <Category />
      </main>
      <Footer />
    </>
  )
}

export default Blog;