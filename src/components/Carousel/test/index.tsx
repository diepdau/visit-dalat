// HotelsCarousel.js
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import HotelCard from "../test/Hotel";
import { IconButton } from "../../Button";
import {
  CarouselContainer,
  SliderContainer,
  SwiperBtns,
  NextButtonContainer,
  ItemContainer,
} from "../../Carousel/HotelsCarousel/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderRef = { slickNext: () => any; slickPrev: () => any };

type HotelData = {
  imgSrc: string;
  title: string;
  star?: number; 
};

type HotelsCarouselProps = {
  hotels: HotelData[];
};

const HotelsCarouselTest: React.FC<HotelsCarouselProps> = ({ hotels }) => {
  const slide = useRef<SliderRef>(null);
  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  const settings = {
    arrows: false,
    dots: false,
    dotsClass: "custom-dots-slick",
    infinite: false,
    speed: 200,
    swipeToSlide: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
        },
      },
    ],
  };
  

  const handleAfterChange = (currentSlide: number) => {
    if (currentSlide === 0) {
      setDisablePrevBtn(true);
    } else {
      setDisablePrevBtn(false);
    }

    if (currentSlide === hotels.length - 1) {
      setDisableNextBtn(true);
    } else {
      setDisableNextBtn(false);
    }
  };

  return (
    <CarouselContainer>
      <SwiperBtns>
        {hotels.length >3 && (
          <>
            <IconButton
              type="prevBtn"
              disabled={disablePrevBtn}
              onClick={() => slide?.current?.slickPrev()}
            />
            <NextButtonContainer>
              <IconButton
                type="nextBtn"
                disabled={disableNextBtn}
                onClick={() => slide?.current?.slickNext()}
              />
            </NextButtonContainer>
          </>
        )}
      </SwiperBtns>
      <SliderContainer>
        <Slider ref={slide} {...settings} afterChange={handleAfterChange}>
          {hotels.map((hotel, index) => (
            <ItemContainer key={index}>
              <HotelCard imgSrc={hotel.imgSrc} title={hotel.title} star={hotel.star} />
            </ItemContainer>
          ))}
        </Slider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default HotelsCarouselTest;
