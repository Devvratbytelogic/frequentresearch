import React from 'react'
import HeaderToolbar from './HeaderToolbar'
import HeaderMenubar from './HeaderMenubar'
import styles from '@/styles/modules/layout/header.module.scss'

export default function PrimaryHeader() {
    return (
        <>
            {/* Header toolbar */}
            <div className={`${styles.header_toolbar_container}`}>
                <div className={`custom_container_padding`}>
                    <HeaderToolbar />
                </div>
            </div>
            <div className={`${styles.header_menu_container}`}>
                {/*  header menu */}
                <div className={`custom_container_padding`}>
                    <HeaderMenubar />
                </div>
            </div>
        </>
    )
}
