import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";
import { useRouter } from 'next/router';
import ProductNavLink from './ProductNavLink';
import ProductNavMenuLink from './ProductNavMenuLink';

export default function NavbarApp({ showLinks = true }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter()

    return (
        <Navbar disableAnimation maxWidth='2xl' isMenuOpen={isMenuOpen} className=' bg-transparent text-black'>
            <NavbarContent >
                {showLinks &&
                    <NavbarMenuToggle
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="sm:hidden"
                    />
                }
                <NavbarBrand>
                    <p onClick={() => router.push('/')} className="font-bold text-inherit hover:cursor-pointer text-black text-2xl">NASA</p>
                </NavbarBrand>
            </NavbarContent>
            {showLinks &&
                <NavbarContent className="hidden sm:flex gap-4 text-black font-semibold font-[montserra] " justify="center">
                    <ProductNavLink />
                </NavbarContent>}
            {showLinks &&
                <NavbarMenu className=''>
                    <ProductNavMenuLink />
                </NavbarMenu>
            }
        </Navbar>
    )
}
