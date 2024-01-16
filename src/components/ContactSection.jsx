import { ConfigProvider, Form, Input } from 'antd'
import React from 'react'
import bg from '../../public/images/contact/bg.png'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function ContactSection() {
    const size = useWindowSize();

    return (
        <section>
            <div className='flex flex-col space-y-10 py-10 bg-[#32CFBC] text-white lg:px-20 px-6 bg-no-repeat' style={{ backgroundImage: `url(${size.width > 1024 ? bg.src : ' '})` }}>
                <div className='lg:mb-8 mb-4'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='font-[carattere] text-2xl text-[#255EA8]'>Contact</p>
                        <p className='text-center font-[lemon] text-4xl'>
                            Book a date
                        </p>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col-reverse lg:space-y-0'>
                    <div className='w-full  '>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Input: {
                                        colorTextPlaceholder: 'black',
                                        fontFamily: 'lemon'
                                    }
                                },
                            }}>
                            <Form >
                                <div className='flex flex-col bg-white p-6 rounded-xl shadow-2xl'>
                                    <div className=' flex lg:flex-row flex-col lg:space-x-6'>
                                        <Form.Item name={'first_name'} className='w-full'>
                                            <Input size='large' placeholder='First Name' bordered={false} className='bg-[#f5f1f1]' />
                                        </Form.Item>
                                        <Form.Item name={'last_name'} className='w-full '>
                                            <Input size='large' placeholder='Last Name' bordered={false} className='bg-[#f5f1f1]' />
                                        </Form.Item>
                                    </div>
                                    <div className=' flex'>
                                        <Form.Item name={'email'} className='w-full '>
                                            <Input size='large' placeholder='Email' bordered={false} className='bg-[#f5f1f1]' />
                                        </Form.Item>
                                    </div>
                                    <div className=' flex lg:flex-row flex-col lg:space-x-6'>
                                        <Form.Item name={'phone_number'} className='w-full'>
                                            <Input size='large' placeholder='Phone Number' bordered={false} className='bg-[#f5f1f1]' />
                                        </Form.Item>
                                        <Form.Item name={'city'} className='w-full '>
                                            <Input size='large' placeholder='City' bordered={false} className='bg-[#f5f1f1]' />
                                        </Form.Item>
                                    </div>
                                    <div className=' flex lg:flex-row flex-col lg:space-x-6'>
                                        <Form.Item name={'message'} className='w-full '>
                                            <Input.TextArea rows={6} size='large' placeholder='Message' bordered={false} className='bg-[#f5f1f1]' />
                                        </Form.Item>
                                    </div>
                                </div>
                                <Form.Item className=' w-full flex justify-center items-center mt-8'>
                                    <button className='font-[lemon] text-white bg-[#FEBF05] px-8 rounded-full shadow-2xl py-2'>send</button>
                                </Form.Item>
                            </Form>
                        </ConfigProvider>
                    </div>
                    <div className='w-full lg:mt-6 mb-6 lg:mb-0 lg:text-end text-center flex flex-col space-y-6 items-end'>
                        <p className='font-[lemon] text-3xl lg:w-4/5'>It’s your day, make it worth remembering.</p>
                        <p className='font-[montserra] lg:w-3/5'>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Ut elit tellus, luctus nec ul
                            lamcorper mattis, pulvinar dapibus l, luctus nec ul  lamcorper mattis, pulvinar dapibus l, luctus nec ullamcorper mattis, pulvinar dapibus l, luctus nec ul
                            lamcorper mattis, pulvinar
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
