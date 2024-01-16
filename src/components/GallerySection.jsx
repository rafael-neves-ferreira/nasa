import React from 'react'
import Gallery1 from '../../public/images/gallery/1.png'
import Gallery2 from '../../public/images/gallery/2.png'
import Gallery3 from '../../public/images/gallery/3.png'
import Gallery4 from '../../public/images/gallery/4.png'
import Gallery5 from '../../public/images/gallery/5.png'
import bg from '../../public/images/gallery/bg.png'
import Link from 'next/link'

export default function GallerySection() {
    return (
        <section id='gallery' className=' w-full bg-[#ABCE4E] text-white lg:px-32 px-8 py-8 bg-no-repeat' style={{ backgroundImage: `url(${bg.src})` }}>
            <div className='mb-8'>
                <div className=' flex flex-col justify-center items-center'>
                    <p className='font-[carattere] text-2xl text-[#FE5F97]'>Gallery</p>
                    <p className=' text-center font-[lemon] lg:text-4xl text-2xl lg:w-2/4'>
                        Making Moments In To Memories
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-1">
                <div class="grid gap-1">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery5?.src} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery1.src} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery2.src} alt="" />
                    </div>
                </div>
                <div class="grid gap-1">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery3.src} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery4.src} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery5.src} alt="" />
                    </div>
                </div>
                <div class="grid gap-1">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery1.src} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery2.src} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery3.src} alt="" />
                    </div>
                </div>
                <div class="grid gap-1">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery4.src} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery5.src} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={Gallery1.src} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center mt-10'>
                <Link href={'cart'}
                    className=" px-10 shadow-2xl shadow-black  bg-[#FE5F97] rounded-full text-white font-[lemon] py-2">
                    Gallery
                </Link>
            </div>
        </section>
    )
}
