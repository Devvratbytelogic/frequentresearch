import React from 'react'
import TwoToneHeartIcon from '../../common/TwoToneHeartIcon'
import PageHeader from '@/components/common/PageHeader'
import { CommonCardSquare } from '@/components/common/CommonCard';

const data = [
    {
        icon: "/images/img6.png",
        title: "dedicated, creative people",
        normalTitle: "We are a group of...",
        description: "We love print. We love graphics and design. We love our team. Come check us out.",
        border: "border-orange-500",
        textColor: "text-orange-500",
    },
    {
        icon: "/images/img7.png",
        title: "bread & butte",
        normalTitle: "Our",
        description: "Trusted long lasting relationships are the b & b of VHM. We value & build relationships with our clients, vendors, friends, family and each other. It is important for a healthy & happy work environment.",
        border: "border-green-500",
        textColor: "text-green-500",
    },
    {
        icon: "/images/img8.png",
        title: "Let's talk",
        normalTitle: "Got an idea?",
        description: "We know that listening is an invaluable skill. We like to listen. Run your ideas by us and we’ll give you our honest opinion. Call,email or text.",
        border: "border-red-500",
        textColor: "text-red-500",
    },
];
export default function WhoWeAre() {
    return (
        <>
            <div className={`relative`}>
                <div className={`text-center font-medium border-b-5 border-primary pb-3`}>
                    <p>We live and work by the</p>
                    <h2 className={`font-primary text-5xl font-medium text-secondary`}>GOLDEN RULE</h2>
                    <p className={`text-3xl font-cookie_regular text-[#222222]`}>“Do unto others as you would have then do unto you”</p>
                </div>
                <div className={`two_tone_heart_icon`}>
                    <TwoToneHeartIcon />
                </div>
            </div>
            <div className={`relative`}>
                <PageHeader badge_text={`Who`} title={`We are`} subtitle={`Frequent Research`} icon={`/images/img5.png`} />
            </div>
            <div className={`space_from_top`}>
                <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 xl:gap-8">
                    {data && data?.length > 0 && data?.map((item, index) => (
                        <CommonCardSquare key={index} index={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}
