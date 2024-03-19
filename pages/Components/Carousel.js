import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const pic1 = '/pics/caraouselPics/1.webp'
const pic2 = '/pics/caraouselPics/2.webp'
const mobilePic1 = '/pics/caraouselPics/mobile/1.jpg'
const mobilePic2 = '/pics/caraouselPics/mobile/2.jpg'
const mobilePic3 = '/pics/caraouselPics/mobile/3.jpg'


const Carousel = () => {
  return (
    <div>

      <div className='hidden md:block'>
        <Swiper
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper hidden md:block">
          <SwiperSlide><Link href={''}><img src={pic1} layout="fill"/></Link></SwiperSlide>
          <SwiperSlide><Link href={''}><img src={pic2} layout="fill"/></Link></SwiperSlide>
        </Swiper>
      </div>




      <div className='md:hidden pt-10'>

        <Swiper
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide><Link href={''}><img src={mobilePic1} layout="fill" /></Link></SwiperSlide>
          <SwiperSlide><Link href={''}><img src={mobilePic2} layout="fill" /></Link></SwiperSlide>
          <SwiperSlide><Link href={''}><img src={mobilePic3} layout="fill" /></Link></SwiperSlide>
        </Swiper>
      </div>


    </div>
  );
}

export default Carousel