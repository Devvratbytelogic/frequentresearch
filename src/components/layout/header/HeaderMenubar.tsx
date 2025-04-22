import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import AuthButton from './AuthButton'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Button } from '@heroui/react'

export default function HeaderMenubar() {
    return (
        <>
            <div className={`header_menubar_wrapper`}>
                <div className={`header_menubar_left`}>
                    <div className="logo_box">
                        <div className="logo_img">
                            <Image src={`/images/logo.svg`} alt={`logo`} width={1000} height={1000} />
                        </div>
                    </div>
                </div>
                <div className={`header_menubar_center`}>
                    <div className={`header_center_main_menu`}>
                        <Link href={`#`}>Eyeglasses <IoIosArrowDown className={``} /></Link>
                        <Link href={`#`}>Contact Lenses <IoIosArrowDown className={``} /></Link>
                        <Link href={`#`}>Brands <IoIosArrowDown className={``} /></Link>
                        <Link href={`#`}>Eye Testing <IoIosArrowDown className={``} /></Link>
                        <Link href={`#`}>House of Vinova <IoIosArrowDown className={``} /></Link>
                    </div>
                </div>
                <div className={`header_menubar_right`}>
                    <div className={`common_flex_wrapper justify-end `}>
                        <Button className={`btn_global bg_primary !px-4`}>3D TRY ON</Button>
                        <AuthButton />
                    </div>
                </div>
                <div className="offcanvas_menu">
                    <RxHamburgerMenu className={`custom_size_icons pr-1 !w-7 !h-7`} />
                </div>
            </div>
        </>
    )
}
