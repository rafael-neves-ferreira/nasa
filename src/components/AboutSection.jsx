import React from 'react'
import AboutImage from '../../public/images/about.png'
import bg from '../../public/images/about/bg.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function AboutSection() {
    const size = useWindowSize();


    return (
        <section id='about'>
            <div className=' flex flex-col lg:flex-row px-4 py-20 bg-[#32CFBC] bg-cover lg:px-20 bg-no-repeat' style={{ backgroundImage: `url(${size.width > 1024 ? bg.src : ' '})` }}>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className=' w-full'>
                    <Image className='hidden lg:flex' src={AboutImage.src} width={450} height={0} />
                </motion.div>
                <div className=' flex flex-col space-y-16 items-center justify-center lg:justify-start '>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 4 }}
                        className=' font-[lemon] text-white text-4xl pt-20'>
                        About Us
                    </motion.p>
                    <div className=' flex text-white items-center flex-col font-[montserra] space-y-12 text-xl lg:px-20'>
                        <p className='lg:px-4'>
                            Birthday parties are a special time to celebrate the life of our most valued possessions: our kids! And what better way to celebrate their exuberant life than at a dynamite party venue? We have curated an eclectic list of top kids’ birthday party venues,
                            from robots to wizards we have chosen the best and rounded them all up here for you.
                        </p>
                        <p className='lg:px-4'>
                            Birthday parties are a special time to celebrate the life of our most valued possessions: our kids! And what better way to celebrate their exuberant life than at a dynamite party venue? We have curated an eclectic list of top kids’ birthday party venues,
                            from robots to wizards we have chosen the best and rounded them all up here for you.
                        </p>
                        <div className='w-full lg:pr-6 flex justify-center'>
                            <Link href={'cart'} className="lg:px-12 px-8 rounded-full shadow-2xl font-[lemon] border-bold bg-[#FE5F97] lg:py-3 py-2 ">
                                more info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
