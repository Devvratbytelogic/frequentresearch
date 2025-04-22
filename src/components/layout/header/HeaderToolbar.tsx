import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { BsCurrencyPound } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { HiOutlineTranslate } from 'react-icons/hi'
import { LiaShippingFastSolid } from 'react-icons/lia'

export default function HeaderToolbar() {
  return (
    <>
      <div className={`header_toolbar_wrapper`}>
        <div className={`toolbar_row`}>
          <div className={`toolbar_left_column`}>
            <div className={`toolbar_left_column_child_wrapper`}>
              <div className={`icon_box_small`}>
                <BiSupport className={`custom_size_icons_dark`} />
                <p className={`max-xl:text-xs sm`}>Need Help?</p>
              </div>
              <p>
                <Link href={``} className={`max-xl:text-xs sm`}>Call 1800-266-0123</Link>
              </p>
            </div>
          </div>
          <div className={`toolbar_center_column`}>
            <div className={`common_flex_wrapper justify-center`}>
              <p className='max-xl:text-xs sm'>Shop Our Holiday Collection. Up to 50% Off on Eyewear!</p>
              <Button className={`btn_global bg_primary rounded_btn height_small`}>Grab Now</Button>
              <CgClose className={`custom_size_icons_dark`} />
            </div>
          </div>
          <div className={`toolbar_right_column`}>
            <div className={`common_flex_wrapper !gap-3 justify-end`}>
              <div className={`icon_box_small`}>
                <LiaShippingFastSolid className={`custom_size_icons_dark`} />
                <p className={`sm`}>Track Order</p>
              </div>
              <BsCurrencyPound className={`icon_bg_solid`} />
              <Button className={`btn_global outline_primary rounded_btn font-poppins`} startContent={<HiOutlineTranslate className={`custom_size_icons !text-primary`} />}>Ind - Eng</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
