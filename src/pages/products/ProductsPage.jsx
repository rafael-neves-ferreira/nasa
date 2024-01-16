import React, { useEffect, useState } from 'react'
import bg from '../../../public/images/products/product-page-bg.png'
import { products } from '@/data/products'
import { useRouter } from 'next/router'
import { ConfigProvider, Select } from 'antd'
import { categories } from '@/data/categories'
import { MagicMotion } from 'react-magic-motion'

export default function ProductsPage() {
    const router = useRouter()
    const [data, setData] = useState(products);

    function compareByPriceAsc(a, b) {
        return a.price - b.price;
    }

    function compareByPriceDesc(a, b) {
        return b.price - a.price;
    }

    const orderBy = (type) => {
        switch (type) {
            case 1:
                const sortedAsc = [...data].sort(compareByPriceAsc); // Crie uma cópia do array para evitar mutações diretas
                setData(sortedAsc);
                break;
            default:
                const sortedDesc = [...data].sort(compareByPriceDesc); // Crie uma cópia do array para evitar mutações diretas
                setData(sortedDesc);
                break;
        }
    }

    const filterCategory = (category) => {
        if (category === 0) {
            setData(products)
        } else {
            setData(() => products.filter(product => product.category === category))
        }
    }

    return (
        <section id='products' className='bg-white pb-10'>
            <div style={{ backgroundImage: `url(${bg.src})` }} className='bg-[#FE5F97] font-[lemon] text-white flex justify-center items-center text-4xl bg-no-repeat bg-cover py-20'>
                <p>Our Products</p>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-x-6 gap-y-6 lg:gap-y-0 px-6 mt-10'>
                <div>
                    <div className=' text-white shadow-xl px-10 space-y-4 py-10 rounded-xl bg-blue-400'>
                        <p className=' text-center text-2xl font-[lemon] '>Filters</p>
                        <div className='flex flex-col space-y-4'>
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Select: {
                                            colorTextPlaceholder: 'black',
                                            fontFamily: 'montserra',
                                            colorIcon: 'black'
                                        }
                                    },
                                }}>
                                <Select size='large' onChange={filterCategory} options={[{ value: 0, label: 'All' }, ...categories.map(category => ({ value: category.id, label: category.name }))]} placeholder='Select a Category' />
                                <Select size='large' placeholder='Order By' onChange={orderBy} options={[{ value: 1, label: 'Price Asc' }, { value: 2, label: 'Price Desc' }]} />
                            </ConfigProvider>
                        </div>
                    </div>
                </div>
                <div className='lg:px-10 grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-10 col-span-3 '>
                    {data.map(product =>
                        <div key={product?.id} onClick={() => router.push('/products/' + product?.slug)} className=' flex flex-col hover:cursor-pointer lg:min-w-[200px]  min-w-[150px] space-y-4 justify-center items-center  ' >
                            <div className='h-[380px] bg-no-repeat font-[lemon] rounded-2xl bg-center w-full bg-cover' style={{ backgroundImage: `url(/images/products/product-${product?.id}.jpg)` }}>
                            </div>
                            <p className='font-[lemon]'>{product?.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
