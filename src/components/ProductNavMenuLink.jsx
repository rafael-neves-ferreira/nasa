import { NavbarMenuItem } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export default function ProductNavMenuLink() {
    return (
        <NavbarMenuItem className='text-black' key={`product-link`} >
            <Link className='hover:cursor-pointer' onClick={() => setIsMenuOpen(false)} href={'products'}>
                Products
            </Link>
        </NavbarMenuItem>
    )
}
