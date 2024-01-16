import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import bg from '../../public/images/products/bg.png'
import { products } from '@/data/products'
import { useRouter } from 'next/router'

export default function ProductsSection() {
    const carousel = useRef()
    const [width, setwidth] = useState(0)
    const router = useRouter()

    useEffect(() => {
        setwidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <section id='products'>
            <div className=' flex flex-col bg-[#F8D311] text-white py-10 bg-no-repeat' style={{ backgroundImage: `url(${bg.src})` }}>
                <div className=' flex flex-col items-center justify-center '>
                    <div className=' flex flex-col justify-center items-center'>
                        <p className='font-[carattere] text-2xl text-[#255EA8]'>Products</p>
                        <p className=' font-[lemon] text-4xl'>
                            What we offer
                        </p>
                    </div>
                    <div className='pt-8 flex flex-col justify-start items-center'>
                        <motion.div className='w-full '>
                            <motion.div className='grid grid-cols-1 pb-20 pl-10 w-full  overflow-hidden' ref={carousel} whileTap={{ cursor: 'grabbing' }} >
                                <motion.div className='flex space-x-9 ' drag="x" dragConstraints={{ right: 0, left: -width }}>
                                    {
                                        products?.filter(prod => prod?.id < 7).map((product) =>
                                            <motion.div key={product?.id} onClick={() => router.push('/products/' + product?.slug)} className=' flex hover:cursor-pointer flex-col lg:min-w-[200px] min-w-[200px] space-y-4 justify-center items-center  ' >
                                                <div className='h-60 bg-no-repeat font-[lemon] bg-center w-full bg-cover' style={{ backgroundImage: `url(/images/products/product-${product?.id}.jpg)` }}>
                                                </div>
                                                <p className='font-[lemon]'>{product?.name}</p>
                                            </motion.div>)
                                    }
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <Link href={'cart'}
                            className=" px-10 shadow-2xl shadow-black  bg-[#32CFBC] rounded-full text-white font-[lemon] py-2">
                            see all
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
