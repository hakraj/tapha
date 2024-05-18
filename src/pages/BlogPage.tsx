import React from 'react';
import { NavBar, Footer } from "./Home.tsx";


const BlogPost = () => {
  return (
    <div className=' bg-gradient-to-br via-sky-200 via-10% from-violet-300 to-15% to-neutral-50' >
      <NavBar />
      <div className="px-[10vw] py-[10vh]">
        <div className="md:flex justify-between">
          <div className="hidden md:flex justify-center gap-4 mt-[25vh]">
            <div className=" rounded-full h-10 w-10 bg-gradient-to-tr from-slate-200 to-slate-500"></div>
            <div>
              <p className=" text-sm font-medium">John Doe</p>
              <p className=" text-sm">Executive</p>
            </div>
          </div>
          <div className="md:w-3/4 lg:w-4/5">
            <p className=" border-l-2 border-violet-500 pl-2 text-sm font-medium text-violet-500">First</p>
            <h1 className="font-ubuntu text-3xl md:text-4xl font-bold my-8">Lorem ipsum dolor sit amet</h1>
            <p className="border-l-2 border-sky-500 px-2 text-sm font-medium text-gray-500">December 1, 1960</p>
            <div className="md:hidden flex gap-4 my-8">
              <div className=" rounded-full h-10 w-10 bg-gradient-to-tr from-slate-200 to-slate-500"></div>
              <div>
                <p className=" text-sm font-medium">John Doe</p>
                <p className=" text-sm">Executive</p>
              </div>
            </div>

            {[1, 2].map((_, i) => {
              return (
                <p key={i} className=" text-gray-700 md:text-lg my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus non felis nec quam euismod rutrum vel at urna.
                  Fusce et enim vel felis efficitur interdum.
                  Cras vulputate metus imperdiet felis mollis,
                  sit amet mollis dolor eleifend.
                  Ut ante magna, suscipit vitae porttitor fringilla,
                  porttitor quis lectus.
                  Praesent lacinia,
                  tellus congue vehicula faucibus, enim enim placerat elit,
                  id aliquam dolor lectus nec purus. Aliquam et dignissim orci.
                  Pellentesque finibus ligula et gravida venenatis.
                  Pellentesque sed lectus tempus nibh condimentum aliquet.
                  Aliquam volutpat facilisis augue, eu tempus nibh consequat ut.
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogPage = () => {
  return (
    <>
      <main className='max-w-screen-2xl mx-auto'>
        <BlogPost />
      </main>
      <Footer />
    </>
  )
}

export default BlogPage;