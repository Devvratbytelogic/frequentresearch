import { Button } from "@heroui/react";
import { BsArrowRight } from "react-icons/bs";

export default function FooterAds() {
    const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-col items-center justify-between min-h-[400px] bg-primary custom_container_padding">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12">
        <p className="font-gilroy_light text-white font-light text-xl">Work with Vinova</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-gilroy text-white">Become an Optometrist</h1>
        <Button className={`btn_global bg_white rounded_btn font-gilroy h-14 font-medium text-[#333333CC] text-base`} endContent={<BsArrowRight className={`custom_size_icons !text-primary`} />}>Get in touch</Button>
      </div>

      <div className="w-full flex justify-between text-sm">
        <p className={`text-white text-2xl font-gilroy`}>VINOVA</p>
        <p className={`text-white text-xl font-gilroy`}>©{currentYear} VINOVA</p>
      </div>
    </section>
  )
}

