import { Button } from 'antd'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function DetailsComponent({ product }) {
    return (
        <section id='details' className='bg-[#232E30] flex justify-center flex-col items-center space-y-4 pb-10'>
            <p className='font-[OtomanopeeOne] text-4xl pt-4 text-white'>Details</p>
            <div className='flex flex-col space-y-4 px-4'>
                {product?.description?.map(description => (
                    <div className=' bg-white px-4 py-2 rounded-md flex flex-col justify-center w-full items-center'>
                        <p className='text-[#DBBD87] text-2xl font-semibold'>{description?.title}</p>
                        <div className=''>
                            <p>
                                {description?.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <motion.div
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                className="border lg:px-16 px-8 font-extrabold border-[#DBBD87] border-bold text-[#DBBD87] lg:py-4 py-2 text-lg">
                <Link href={'cart'} >
                    Acheter
                </Link>
            </motion.div>
        </section>
    )
}
