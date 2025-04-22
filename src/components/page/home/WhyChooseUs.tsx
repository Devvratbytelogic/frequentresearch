'use client';
import React from 'react';
import { Button } from '@heroui/react';
import { FaCircleArrowRight } from 'react-icons/fa6';
import CommonCard from '@/components/common/CommonCard';

const data = [
    {
        icon: "/images/img2.png",
        title: "We’re unique",
        normalTitle: "Why",
        description: "We believe in support, customer service and being available to our clients 24/7. We answer our phones, emails and texts. We’re unique that way! We provide our clients with the best service and care.",
        border: "border-orange-500",
        textColor: "text-orange-500",
    },
    {
        icon: "/images/img3.png",
        title: "We’re traditional",
        normalTitle: "Why",
        description: "Our values are traditional, but our approach is not. Our clients are people we want to work with. We enjoy the work we do, the people and businesses we do it with and for. Get in touch…you’ll see the difference.",
        border: "border-green-500",
        textColor: "text-green-500",
    },
    {
        icon: "/images/img4.png",
        title: "We’re special",
        normalTitle: "Why",
        description: "We enjoy what we do and who we do it with! Our passion is very apparent. Get in touch…you’ll see the difference.",
        border: "border-red-500",
        textColor: "text-red-500",
    },
];

export default function WhyChooseUs() {
    return (
        <>
            <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 xl:gap-8">
                {data && data?.length > 0 && data?.map((item, index) => (
                    <CommonCard key={index} index={index} item={item} />
                ))}
            </div>
            <div className={`normal_space_from_top flex gap-4 justify-center`}>
                <Button className={`btn_global rounded_btn dark_btn`} endContent={<FaCircleArrowRight />}>LEARN MORE</Button>
                <Button className={`btn_global rounded_btn secondary_btn`} endContent={<FaCircleArrowRight />}>CONTACT US</Button>
            </div>
        </>
    );
}
