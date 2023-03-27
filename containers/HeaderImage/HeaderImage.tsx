"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./header_image.module.css";
import utilStyles from "./../../app/utils.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const eventImages = [
//   "/images/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpeg",
//   "/images/app_launch.jpeg",
//   "/images/coder_girl.jpeg",
// ];

// export type EventImageProps = {
//   event: any,
// }

const HeaderImage = ({ event }: any) => {
  const [eventImages, setEventImages] = useState<string[]>([]);

  useEffect(() => {
    let images: Array<string> = [];
    for (let index = 0; index < event?.images.images.length; index++) {
      const imagesArray: Array<{ url: string }> = event.images.images[index].transforms.transforms;
      const image = imagesArray[imagesArray.length]?.url;
      console.log(
        imagesArray[imagesArray.length]
      );
      images = [...images, image]
      setEventImages(images);
      console.log(eventImages);

    }

    // return getImages()
  }, [])

  // if (isLoading) {
  //   return (
  //     <div className={styles.headerImage}>
  //       <div
  //         className={`${styles.headerImageContainer} ${utilStyles.sectionPadding}`}
  //       >
  //         <div className={styles.sliderContainer}>
  //           <div className={`${utilStyles.skeleton} ${utilStyles.blockSkeleton}`} style={{ width: "100%", aspectRatio: "16/9" }}></div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className={styles.headerImage}>
      <div
        className={`${styles.headerImageContainer} ${utilStyles.sectionPadding}`}
      >
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Navigation, Thumbs, Pagination]}
            navigation={true}
            pagination={{
              dynamicBullets: true,
            }}
            // loop={true}
            style={{ height: "100%" }}
          >
            {eventImages.map((img, i) => (
              <SwiperSlide className={styles.slide} key={i}>
                <Image
                  src={img}
                  alt="img"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
