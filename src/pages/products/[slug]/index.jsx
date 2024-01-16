import { products } from '@/data/products';
import { ConfigProvider, Input } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react'

export default function index({ product }) {
    const [actualImage, setActualImage] = useState(`/images/products/product-${product?.id}.jpg`)

    return (
        <section className='flex flex-col pb-10'>
            <div className='bg-[#F8D311] w-full font-[lemon] text-white flex justify-center items-center lg:text-4xl text-2xl bg-no-repeat bg-cover py-10'>
                <p>{product?.name}</p>
            </div>
            <div className='mt-8 lg:px-20 px-8 flex lg:flex-row flex-col lg:space-x-10'>
                <div className='w-full justify-center items-center flex flex-col space-y-6'>
                    <div>
                        <Image src={actualImage} width={300} height={100} />
                    </div>
                    <div className='flex space-x-4'>
                        <Image onClick={() => setActualImage(`/images/products/product-${product?.id}.jpg`)} src={`/images/products/product-${product?.id}.jpg`} width={50} height={40} />
                        {product?.sub_products_image?.map(id =>
                            <Image onClick={() => setActualImage(`/images/products/secondary/product-${product?.id}-${id}.jpg`)} src={`/images/products/secondary/product-${product?.id}-${id}.jpg`} width={50} height={40} />
                        )}
                    </div>
                </div>
                <div className='w-full mt-10 flex flex-col space-y-6'>
                    <div>
                        <p className=' font-[montserra] text-2xl text-center lg:text-start font-semibold'>{product?.name} {product?.price}</p>
                    </div>
                    <div>
                        <p className=' font-[montserra] lg:w-3/5 font-semibold lg:text-end text-center'>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Ut elit tellus, luctus nec ul
                            t
                            lamcorper mattis, pulvinar
                        </p>
                    </div>
                    <div className='lg:w-3/5 flex justify-center text-white font-[lemon] space-x-4'>
                        <button className='bg-[#32CFBC] px-5 py-2 rounded-full text-lg shadow-2xl'>Buy Now</button>
                        <a href='https://wa.me/+447921593919?text=Hello%2C%20I%27m%20interested%20in%20this%20product%20and%20would%20like%20to%20have%20a%20customized%20one%20for%20myself.' className='bg-[#32CFBC] px-5 py-2 rounded-full text-lg shadow-2xl'>Personalize</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function getServerSideProps(context) {
    const { slug } = context.query;
    const product = products?.find(prod => prod.slug === slug)
    if (!product) {
        return {
            redirect: {
                destination: '/products'
            }
        }
    }

    return { props: { product } }
}