import Image from 'next/image'
import React from 'react'
import Service1 from '../../public/images/services/1.png'
import Service2 from '../../public/images/services/2.png'
import Service3 from '../../public/images/services/3.png'
import bg from '../../public/images/services/bg.png'

export default function Services() {

    return (
        <section id='services' className='w-full bg-[#FEBF05] text-white lg:px-20 px-6 py-10 bg-no-repeat' style={{ backgroundImage: `url(${bg.src})`}}>
            <div className='mb-8'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-[carattere] text-2xl text-[#255EA8]'>Services</p>
                    <p className='text-center font-[lemon] text-4xl lg:w-2/4'>
                        Our Services
                    </p>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-10'>
                <div className='w-full flex flex-col justify-center items-center '>
                    <div className='h-60 bg-no-repeat rounded-xl  font-[lemon] bg-center flex items-end justify-center w-full bg-cover' style={{ backgroundImage: `url(${Service1.src})` }}>
                    </div>
                    <div className='bg-[#FEBF05] rounded-full -mt-8 flex justify-center shadow-xl py-2 h-1/5 w-4/5'>
                        <p className='font-[lemon]'>Indoor Party</p>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center '>
                    <div className='h-60 bg-no-repeat rounded-xl  font-[lemon] bg-center flex items-end justify-center w-full bg-cover' style={{ backgroundImage: `url(${Service2.src})` }}>
                    </div>
                    <div className='bg-[#FEBF05] rounded-full -mt-8 flex justify-center shadow-xl py-2 h-1/5 w-4/5'>
                        <p className='font-[lemon]'>Indoor Party</p>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center '>
                    <div className='h-60 bg-no-repeat rounded-xl  font-[lemon] bg-center flex items-end justify-center w-full bg-cover' style={{ backgroundImage: `url(${Service3.src})` }}>
                    </div>
                    <div className='bg-[#FEBF05] rounded-full -mt-8 flex justify-center shadow-xl py-2 h-1/5 w-4/5'>
                        <p className='font-[lemon]'>Indoor Party</p>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center '>
                    <div className='h-60 bg-no-repeat rounded-xl  font-[lemon] bg-center flex items-end justify-center w-full bg-cover' style={{ backgroundImage: `url(${Service1.src})` }}>
                    </div>
                    <div className='bg-[#FEBF05] rounded-full -mt-8 flex justify-center shadow-xl py-2 h-1/5 w-4/5'>
                        <p className='font-[lemon]'>Indoor Party</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
