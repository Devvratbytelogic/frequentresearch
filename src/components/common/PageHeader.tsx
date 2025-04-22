import { Button } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

interface PageHeaderProps {
    badge_text: string,
    title: string,
    subtitle: string,
    icon: string,
}
export default function PageHeader({ badge_text, title, subtitle, icon }: PageHeaderProps) {
    return (
        <>
            <div className={`page_header_wrapper animate-line`}>
                <div className={`space_from_top ml-10`}>
                    <Button className={`btn_global rounded_btn outline_secondary animate-button`}>{badge_text}</Button>
                </div>
            </div>
            <div className={`normal_space_from_top`}>
                <div className={`flex items-center gap-2`}>
                    <div className={`w-[70px] h-[70px] animate-slide-in-left`}>
                        <Image
                            src={icon || `/images/img1.png`}
                            alt={title}
                            title={title}
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <h1 className={`font-primary text-5xl font-medium text-primary animate-slide-in-right`}>
                        {title} <span className='font-cookie_regular font-normal text-primary-text_color'>{subtitle}</span>
                    </h1>
                </div>
            </div>
        </>
    )
}