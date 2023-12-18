import React from 'react'
import logo from "../assets/ph_framer-logo.svg";
function Footer() {
  return (
    <div>
        <footer class="w-full mb-4 mx-4 px-4 text-black  pt-4 flex flex-col md:flex-row  flex-wrap justify-between  md:px-12">
            
    
            <div class="mt-4 md:mt-0 ml-8 md:ml-1 lg:ml-4">
                <h2 class="font-extrabold text-2xl">Work</h2>
                <div>
                    <p className='text-lg'>Family Fund</p>
                    <p className='text-lg'>Unseal</p>
                    <p className='text-lg'>Phobia</p>
                    <p className='text-lg'>See all</p>
                </div>
            </div> 
    
            <div class="mt-4 md:mt-0 ml-8 md:ml-1 lg:ml-4">
                <h2 class="font-extrabold text-2xl">Company</h2>
                <div>
                    <p className='text-lg'>About</p>
                    <p className='text-lg'>process</p>
                    <p className='text-lg'>Blog</p>
                    <p className='text-lg'>Contact Us</p>
    
                </div>
            </div> 
    
             <div class="mt-4 md:mt-0 ml-8 md:ml-1 lg:ml-4">
                <h2 class="font-extrabold text-2xl">Connect</h2>
                <div>
                    <p className='text-lg'>Facebook</p>
                    <p className='text-lg'>Instagram</p>
                    <p className='text-lg'>Twitter</p>
                    <p className='text-lg'>Github</p>
                    <p className='text-lg'>Dribble</p>
                </div>
            </div>

            <div className="ml-4 md:ml-1 lg:ml-4 flex flex-col">
          <p className="my-4 mt-8 font-extrabold text-xl">Sign up for our newsletter</p>
          <p className="my-4 text-md"><span>Subscribe to get the latest design news,</span> <span>articles, resources, and inspiration.</span></p>
          <div className="flex">
            <div className="relative w-52 md:w-72">
              <input type="email" placeholder="Enter your Email" className="w-full rounded-xl border-2 pl-4 pr-12" />
              <button className="absolute top-0 right-0 w-12 h-full rounded-r-xl bg-black flex items-center justify-center text-white">
                {/* Arrow Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              </div>
          </div>
        </div>

    </footer>

    <hr className="text-black w-[200px] md:w-[620px] lg:w-[880px] xl:w-[1290px] mt-8 ml-4 pb-4"  />
    <div className="container px-5 py-6 mx-auto flex justify-between items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className="w-[1.3rem]" src={logo} alt="Ecommerce Logo" />
              <span
                className="ml-3 text-xl font-[600]"
              >
                Ecommerce App
              </span>
            </a>
            <p
              className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
            >
              © Ecommerce Agency Inc. 2023
            </p>
          </div>
  </div>

  )
}

export default Footer