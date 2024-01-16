import React from 'react'
import banner from '../../public/images/banner.png'

export default function MainSection() {
    return (
        <section className=" bg-no-repeat font-[lemon] h-screen flex space-y-2 flex-col bg-center items-center justify-center bg-cover" style={{
            backgroundImage: `url(${banner.src})`
        }} >
            <p className='font-[lemon] lg:text-9xl text-[#FE5F97] text-6xl'>Welcome</p>
            <p className='text-[#113769] lg:text-3xl text-xl'>MAGIC SPACE FOR CHILDREN</p>
            <div>
                <button className=' bg-[#32CFBC] text-white px-4 text-sm py-2 rounded-full'>Discover Now</button>
            </div>
        </section >
    )
}
