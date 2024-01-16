import { NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export default function ProductNavLink() {
    return (
        <NavbarItem>
            <Link className='hover:cursor-pointer' key={3} href="/products">
                Products
            </Link>
        </NavbarItem>
    )
}
