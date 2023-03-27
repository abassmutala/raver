"use client"

import React from "react";
import styles from "./partners.module.css";
import utilStyles from "./../../app/utils.module.css";
import Image from "next/image";
import Heading from "../../components/Heading/Heading";
import { partners } from "../../test/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import { Autoplay, FreeMode } from "swiper";

const Partners = () => {

  return (
    <div className={styles.partners}>
      <div
        className={`${styles.partnersContainer} ${utilStyles.sectionPadding}`}
      >
        <section>
          <Heading title="Trusted by top organisations" />
          <div className={styles.iconsRow}>
            <Swiper className={styles.iconsRowContainer}
              modules={[Autoplay, FreeMode]}
              autoplay={true}
              loop={true}
              // speed={300}
              // effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';
              slidesPerView={2}
              // spaceBetween={8}
              freeMode={true}
              watchSlidesProgress={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  // spaceBetween: 12,
                },
                768: {
                  slidesPerView: 4,
                  // spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 6,
                  // spaceBetween: 24
                }
              }}
            >
              {partners.map((partner, i) => (
                <SwiperSlide key={i}>
                  <div key={partner.name} className={styles.partnerLogo} >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                    style={{ objectFit: "contain" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className={styles.partnersGrid}>
            {partners.map((partner) => (
              <div key={partner.name} className={styles.partnerLogo}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  style={{objectFit: "contain"}}
                />
              </div>
            ))}
          </div> */}
          <div className={styles.partnersRow}></div>
        </section>
      </div>
    </div>
  );
};

export default Partners;
