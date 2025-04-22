"use client"

import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion"
import { SlHandbag } from "react-icons/sl";
import { LuSearch } from "react-icons/lu";

export default function AuthButton() {
    return (
        <motion.button
            className={`auth_button_wrapper`}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.2,
                ease: "easeInOut",
            }}
        >
            <motion.span initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                <LuSearch className={`customer_size_icons`} />
            </motion.span>
            <motion.span initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                <FaRegHeart className={`customer_size_icons`} />
            </motion.span>

            <motion.span initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <SlHandbag className={`customer_size_icons`} />
            </motion.span>

            <motion.span
                className={`auth_btn_text`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Sign In
            </motion.span>
        </motion.button>
    )
}

