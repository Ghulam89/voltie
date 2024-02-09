'use client'
import React,{useEffect,useRef,useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImageFirst, sliderImageSecond, sliderImageThird, sliderImageFour, sliderImageFive, sliderImageSix, heroBgOne, heroBgTwo, heroBgThree, heroBgFour, heroBgFive } from '@/assets/images';
import Image from 'next/image'
import Heading from '../../ui/Heading/Heading';
import SubHeading from '../../ui/SubHeading/SubHeading';
import Description from '../../ui/Description/Description';
import Button from '../../ui/Button/Button';
import './HeroSlider.css'
import { useSlider } from '@/context/SliderContext';
import Link from 'next/link';
import homepagevideo  from '../../../../public/videos/homepagevideo.mp4';
const HeroSliderData = [
  {
    type: 'video',
    video: homepagevideo , // Use the video file you imported
    heading: "Product 1",
    subHeading: "",
    description: "Our fully integrated charging network includes L2 & DC Fast Charging Stations, a Mobile App for Drivers, and a platform for Property Owners & Operating Managers.",
  }
]
const HeroSlider = () => {
  const { selectedItem } = useSlider();
  const [autoplaySpeed, setAutoplaySpeed] = useState(18000); // Initial autoplay speed for video
  const [currentSlideIndex, setCurrentSlideIndex] = useState(selectedItem);

  const sliderRef = useRef<Slider | null>(null); // Initialize with null
console.log('Selected Item ',selectedItem)
  var settings = {
    dots: false, // Display dots
    arrows: false, // Display arrows
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    cssEase: "linear",
    pauseOnHover: true,
    initialSlide:selectedItem,
    appendDots: (dots:any) => (
      <div style={{ position: 'absolute', bottom: '10%'}}>
        <ul className='gap-x-2' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{dots}</ul>
      </div>
    ),
    customPaging: (i:any) => (
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '1px solid white',
           opacity: '0.8',
          margin: '0 20px',
        }}
        className='active-dot'
       ></div>
    ),
  };
  useEffect(()=>{
    if (sliderRef.current) {
      sliderRef.current?.slickGoTo(selectedItem);
    }
  },[selectedItem])
  return (
    <section className='relative h-[94vh] w-full overflow-hidden'>
      <Slider
        {...settings}
        ref={sliderRef}
      >
        {HeroSliderData.map((slideData, index) => (
          <div className='h-[93vh] w-full' key={index}>
            <div className='relative h-full mx-auto'>
                <video
                src={slideData.video || ''}
                autoPlay
                loop
                muted // Add the muted attribute
                className='w-[100vw] h-[100%] object-cover'
              ></video>
              <div className='absolute z-10 text-white w-full h-full'>
                <div className='px-[5%] sm:px-[15%] md:px-[30%] gap-y-4 w-full h-full flex justify-center items-center'>
                  <div className='gap-y-4 flex flex-col justify-center items-center'>
                    <Heading name={slideData.heading} />
                    <SubHeading name={slideData.subHeading} />
                    <Description name={slideData.description} />
                    <div className='flex justify-center items-center gap-2 md:gap-x-4 flex-wrap md:flex-nowrap mt-2'>
                      <Link href='/contact'><Button name="Contact Us" bgColor='black'/></Link>
                      <Button name="FAQ's" bgColor='white'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroSlider