import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css'

const HeroImages = () => {
    let images = [];
    for(let i = 1; i <= 36; i++) {
        images.push(`/hero-images/Image-${i}.png`);
    }

    return (
        <section className={`w-full max-h-[860px] fluid absolute top-0 left-0 -z-20 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-9 gap-[10px] 2xl:gap-[20px] overflow-hidden`}>
            <div className={`${styles.hero} w-full h-full absolute top-0 left-0 z-10`}></div>
            {images.map((src, index) => (
                    <Image
                    src={src}
                    alt={`Hero Image ${index + 1}`}
                    className="object-cover"
                    width={200}
                    height={220}
                />
            ))}
        </section>
    );
};

export default HeroImages;
