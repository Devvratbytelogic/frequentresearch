import PageHeader from '@/components/common/PageHeader'
import WhoWeAre from '@/components/page/home/WhoWeAre'
import WhyChooseUs from '@/components/page/home/WhyChooseUs'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <div className={`custom_container_margin`}>
        {/* Page Header */}
        <PageHeader badge_text={`Why`} title={`Choose us`} subtitle={`...Let's work together`} icon={`/images/img1.png`} />

        <div className={`normal_space_from_top`}>
          <div className={`grid grid-cols-2 gap-4`}>
            <div className={`col-span-1 space-y-1`}>
              <h3 className={`text-lg lg:text-xl font-playfair_bold`}>vintage <span className={`text-base italic font-normal font-inter text-primary-text_color`}>_adj</span></h3>
              <p>of old,recognized and enduring interest, importance or quality: classic</p>
            </div>
            <div className={`col-span-1 space-y-1`}>
              <h3 className={`text-lg lg:text-xl font-playfair_bold`}>hippo <span className={`text-base italic font-normal font-inter text-primary-text_color`}>n_</span></h3>
              <p>meaning versatile, strong, friendly, assertive, caring, quirky and supportive</p>
            </div>
          </div>
        </div>

        {/* WhyChooseUs */}
        <div className={`space_from_top`}>
          <WhyChooseUs />
        </div>


        {/* who we are */}
        <div className={`space_from_top`}>
          <WhoWeAre />
        </div>
      </div>
    </>
  )
}
