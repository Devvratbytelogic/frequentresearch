import ImageComponent from '@/components/ui/ImageComponent'
import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaFigma, FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import FooterAds from './FooterAds'

export default function PrimaryFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={`bg-secondary-drak`}>
        <div className={`custom_container_padding`}>
          <div className={`space_from_top`}>
            <div className={`grid grid-cols-12 gap-8`}>
              <div className={`col-span-full md:col-span-8 lg:col-span-9 max-md:order-1`}>
                <h2 className={`text-4xl md:text-5xl lg:text-[52px] lg:leading-[56px] text-white`}>See the World Clearly – Wishing You a Spectacular Day!</h2>
              </div>
              <div className={`col-span-full md:col-span-4 lg:col-span-3`}>
                <div className={`w-[180px] md:ml-auto`}>
                  <ImageComponent url={`/images/logo.svg`} img_title={'logo'} object_cover={false} />
                </div>
                <div className={`flex gap-x-6 xl:gap-x-8 items-center md:justify-end mt-2 md:mt-4`}>
                  <p className={`text-white`}>Follow us</p>
                  <div className={`flex gap-2`}>
                    <FaFacebookF className={`footer_icon_style`} />
                    <FaGithub className={`footer_icon_style`} />
                    <FaTelegramPlane className={`footer_icon_style`} />
                    <FaInstagram className={`footer_icon_style`} />
                    <FaFigma className={`footer_icon_style`} />
                  </div>
                </div>
              </div>
            </div>
            <p className='text-white mt-2 md:mt-4'>Discover the perfect eyewear to match your style and vision. Wishing you clear sights and bright days ahead!</p>
            <Button className={`btn_global outline_white rounded_btn mt-2 md:mt-4`}>Get started</Button>
          </div>

          {/* footer menu */}
          <div className={`space_from_top`}>
            <div className={`grid gap-5 lg:grid-cols-12`}>
              <div className={`space-y-2 sm:space-y-7 col-span-12 sm:col-span-3 lg:col-span-2`}>
                <h6 className='footer_heading'>Eyeglasses</h6>
                <ul className={`space-y-1 sm:space-y-2 mt-2 text-white`}>
                  <li><Link href={`#`} className={`footer_link`}>Men</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Women</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Kids</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Rimless</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Titan</Link></li>
                </ul>
              </div>

              <div className={`space-y-2 sm:space-y-7 col-span-12 sm:col-span-3 lg:col-span-2`}>
                <h6 className='footer_heading'>Sunglasses</h6>
                <ul className={`space-y-1 sm:space-y-2 mt-2 text-white`}>
                  <li><Link href={`#`} className={`footer_link`}>Men</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Women</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Rimless</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Fastrack</Link></li>
                </ul>
              </div>

              <div className={`space-y-2 sm:space-y-7 col-span-12 sm:col-span-3 lg:col-span-2`}>
                <h6 className='footer_heading'>Contact Lenses</h6>
                <ul className={`space-y-1 sm:space-y-2 mt-2 text-white`}>
                  <li><Link href={`#`} className={`footer_link`}>Bausch & Lomb</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Johnson & Johnson</Link></li>
                </ul>
              </div>

              <div className={`space-y-2 sm:space-y-7 col-span-12 sm:col-span-3 lg:col-span-2`}>
                <h6 className='footer_heading'>Account</h6>
                <ul className={`space-y-1 sm:space-y-2 mt-2 text-white`}>
                  <li><Link href={`#`} className={`footer_link`}>About Us</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Blog</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>FAQs</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Teams</Link></li>
                </ul>
              </div>

              <div className={`space-y-2 sm:space-y-7 col-span-12 sm:col-span-3 lg:col-span-2`}>
                <h6 className='footer_heading'>Payment Options</h6>
                <ul className={`space-y-1 sm:space-y-2 mt-2 text-white`}>
                  <li><Link href={`#`} className={`footer_link`}>Installment</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Insurance</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Crypto</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>PayPal</Link></li>
                  <li><Link href={`#`} className={`footer_link`}>Apple Pay</Link></li>
                </ul>
              </div>

              <div className={`space-y-2 sm:space-y-7 col-span-12 sm:col-span-3 lg:col-span-2`}>
                <h6 className='footer_heading'>Contact Us</h6>
                <ul className={`space-y-1 sm:space-y-2 mt-2 text-white`}>
                  <li className={`footer_link`}>1901 Thornridge Cir. Shiloh, Hawaii 81063</li>
                  <li className={`footer_link`}>hi.vinova@gmail.com</li>
                  <li className={`footer_link`}>1800-265-5158</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`space_from_top border-t`}>
            <div className={`grid grid-cols-12 gap-4 py-8 items-center`}>
              <div className={`col-span-12 sm:col-span-6 md:col-span-7`}>
                <p className={`text-white font-roboto text-sm`}>Copyright © Vinova {currentYear}. All rights reserved. Designed and Developed by Bytelogic Technologies.</p>
              </div>
              <div className={`col-span-12 sm:col-span-6 md:col-span-5`}>
                <div className={`flex gap-4 sm:justify-end`}>
                <Button radius='full' className={`btn_global outline_white !bg-black !border-white text-white rounded_btn`}>Sign In</Button>
                <Button radius='full' className={`btn_global bg_white rounded_btn`}>Contact Us</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterAds />
      </div>
    </>
  )
}
