import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import bg from '../../public/images/reviews/bg.png'
export default function ReviewsSections({ reviews = [
    {
        first_name: 'Jonh',
        id: 1,
        last_name: 'Doe',
        content: 'Day parties are a special time to celebrate the life of our most valued possessions: our kids! And what better way to '
    }, {
        first_name: 'Jonh',
        id: 2,
        last_name: 'Doe',
        content: 'Day parties are a special time to celebrate the life of our most valued possessions: our kids! And what better way to '
    }, {
        first_name: 'Jonh',
        id: 3,
        last_name: 'Doe',
        content: 'Day parties are a special time to celebrate the life of our most valued possessions: our kids! And what better way to '
    }, {
        first_name: 'Jonh',
        id: 4,
        last_name: 'Doe',
        content: 'Day parties are a special time to celebrate the life of our most valued possessions: our kids! And what better way to '
    }, {
        first_name: 'Jonh',
        id: 5,
        last_name: 'Doe',
        content: 'Day parties are a special time to celebrate the life of our most valued possessions: our kids! And what better way to '
    },
] }) {

    const carousel = useRef()
    const [width, setwidth] = useState(0)

    useEffect(() => {
        setwidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <section id='reviews'>
            <div className=' flex flex-col bg-[#FE5F97] py-10 bg-no-repeat' style={{ backgroundImage: `url(${bg.src})`}}>
                <div className=' flex flex-col items-center justify-center '>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <p className='font-[carattere] text-2xl text-[#F8D311]'>Testimonial</p>
                        <p className=' text-center font-[lemon] text-white text-2xl lg:text-4xl'>
                            Our Happy Parents
                        </p>
                    </div>
                    <div className='pt-8 flex flex-col justify-start items-center'>
                        <motion.div className='w-full '>
                            <motion.div className='grid grid-cols-1 pb-20 pl-10 w-full overflow-hidden' ref={carousel} whileTap={{ cursor: 'grabbing' }} >
                                <motion.div className='flex space-x-9 ' drag="x" dragConstraints={{ right: 0, left: -width }}>
                                    {
                                        reviews?.map((review) =>
                                            <motion.div key={review.id} className=' bg-white font-[montserra] lg:min-w-[500px] min-w-[400px] shadow-2xl items-center text-center px-10 rounded-xl py-10  '
                                            >
                                                <p className='font-semibold'>{review?.first_name} {review?.last_name}</p>
                                                <p>{review?.content}</p>
                                            </motion.div>)
                                    }
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
