'use client'
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
interface ItemProps {
    icon: string,
    title: string,
    normalTitle: string,
    description: string,
    border: string,
    textColor: string,
}

interface CommonCardProps {
    item: ItemProps;
    index: number;
}
export default function CommonCard({ item, index }: CommonCardProps) {
    return (
        <>
            <motion.div
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
            >
                <div className={`border-2 ${item.border} rounded-full p-6 h-[100px] xs:h-[150px] w-[100px] xs:w-[150px] overflow-hidden flex items-center justify-center`}>
                    <Image
                        src={item.icon}
                        alt={item.title}
                        title={item.title}
                        width={1000}
                        height={1000}
                    />
                </div>
               <div className={`p-2 space-y-4`}>
                    <h3 className="font-bold text-xl md:text-3xl text-center">
                        <span className="text-[#555555] font-medium font-cookie_regular">{item?.normalTitle} </span>
                        <span className={`font-semibold font-playfair_bold ${item.textColor}`}>
                            {item.title}
                        </span>
                    </h3>
                    <div className="w-1/4 m-auto h-0.5 opacity-50 bg-[#727272]"></div>
                    <p className="text-xs md:text-sm text-center text-[#727272] md:w-[80%] m-auto">{item.description}</p>
               </div>
            </motion.div>
        </>
    )
}
export const CommonCardSquare = ({ item, index }: CommonCardProps) => {
    return (
        <>
            <motion.div
                className="flex flex-col items-center bg-white shadow border rounded-md overflow-hidden space-y-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
            >
                <div className={`border-b p-6 h-[240px] w-full overflow-hidden flex items-center justify-center`}>
                    <Image
                        src={item.icon}
                        alt={item.title}
                        title={item.title}
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={`p-2 space-y-4`}>
                <h3 className="font-bold text-3xl text-center">
                        <span className="text-[#555555] font-medium font-cookie_regular">{item?.normalTitle} </span>
                        <span className={`font-semibold font-playfair_bold ${item.textColor}`}>
                            {item.title}
                        </span>
                    </h3>
                    <p className="text-sm text-center text-[#727272] w-[80%] m-auto">{item.description}</p>
                </div>
            </motion.div>
        </>
    )
}