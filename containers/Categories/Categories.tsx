"use client"

import React from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from "./categories.module.css";
import utilStyles from "./../../app/utils.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Heading from "../../components/Heading/Heading";
import { allCategories } from "../../test/data";

// import "./styles.css";

const Categories = () => {
    return (
        <div className={styles.categories}>
            <div className={`${styles.categoriesContainer} ${utilStyles.sectionPadding}`}>
                <section>
                    <Heading title="Browse by category" />
                    <Swiper
                        //   onSwiper={setThumbsSwiper}
                        autoplay={true}
                        loop={false}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        navigation={true}
                        slidesPerView={1.3}
                        // spaceBetween={6}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.3,
                                // spaceBetween: 6,
                            },
                            768: {
                                slidesPerView: 2.5,
                                // spaceBetween: 8,
                            },
                            1024: {
                                slidesPerView: 3.5,
                                // spaceBetween: 12,
                            },
                            1440: {
                                slidesPerView: 4.5,
                                // spaceBetween: 12,
                            },
                        }}
                    >
                        {allCategories.map((category, i) => (
                            <SwiperSlide key={i}
                                className={styles.categoriesSwiper}
                            > <CategoryCard {...category} /></SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>
        </div>
    );
};

export default Categories;
