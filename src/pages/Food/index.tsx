
import Background from "../../components/Background";
import bgImg from "../../assets/foods/background.png";
import SectionHeader from "../../components/SectionHeader";
import { SectionMarginer } from "../../components/Marginer";
import BackToTopButton from "../../components/BackToTopButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CommentSection from "../Comment/index";
import { useTranslation } from "react-i18next";
import './style.css'
import food1 from "../../assets/foods/quan1.png"
import food2 from "../../assets/foods/quan2.png"
import food3 from "../../assets/foods/quan3.png"
import food4 from "../../assets/foods/banh-can.png"

import fss1 from "../../assets/foods/fs11.png"
import fss2 from "../../assets/foods/fss2.png"
import fss3 from "../../assets/foods/fss3.png"
import fss4 from "../../assets/foods/fss4.png"
import fss5 from "../../assets/foods/fss5.png"
import fss6 from "../../assets/foods/fss6.png"

import fs21 from "../../assets/foods/fs21.png"
import fs22 from "../../assets/foods/fs22.png"
import fs23 from "../../assets/foods/fs23.png"
import fs24 from "../../assets/foods/fs24.png"


import FromTron from "./Tron/FromTron";
import ac from '../../assets/foods/account.jpg'
import HotelsCarouselTest from "../../components/Carousel/test";
import HotelsCarouselTest2 from "../../components/Carousel/test/index1";
import FormComment from "../Comment/FormComment";
const Food = () => {
  const { t } = useTranslation("food");
  const hotelsWithoutStars = [
    { imgSrc: fss1, title: "Một bữa ăn đầy đủ dưỡng chất và dễ nấu thì món" },
    { imgSrc: fss2, title: "Một bữa ăn đầy đủ dưỡng chất và dễ nấu thì món canh đu đủ " },
    { imgSrc: fss3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
   
  ];

  const hotelsWithoutStars1 = [
    { imgSrc: fss4, title: "Một bữa ăn đầy đủ dưỡng chất và dễ nấu thì món" },
    { imgSrc: fss5, title: "Một bữa ăn đầy đủ dưỡng chất và dễ nấu thì món canh đu đủ " },
    { imgSrc: fss6, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
   
  ];
  const hotelsWithoutStars2 = [
    { imgSrc: fs21, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor." },
    { imgSrc: fs22, title: "Một bữa ăn đầy đủ dưỡng chất và dễ nấu thì món canh đu đủ xương heo và đậu hũ chiên là một lựa chọn không thể bỏ qua.Một bữa ăn đầy đủ dưỡng chất và dễ nấu thì món canh đu đủ xương heo và đậu hũ chiên là một lựa chọn không thể bỏ qua." },
    
   
  ];

  const hotelsWithoutStars3 = [
    { imgSrc: fs23, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor." },
    { imgSrc: fs24, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor." },
    
   
  ];
  const hotels = [
    { imgSrc: food1, title: "Ana Mandara Villas Dalat Resort & Spa", star: 4.5 },
    { imgSrc: food2, title: "Dalat Palace Heritage Hotel", star: 4.5 },
    { imgSrc: food3, title: "Terracotta Hotel and Resort Dalat", star: 4.5 },
    { imgSrc: food4, title: "Terracotta Hotel and Resort Dalat", star: 4.5 },
  ];

  return (
    <>
      <Navbar />
      <Background
        title={t("hero image.title")}
        subtitle={t("hero image.subtitle")}
        img={bgImg}
      />
      <SectionMarginer>
        <SectionHeader
          field={t("destinations.field")}
          title={t("destinations.title")}
        />
         <HotelsCarouselTest hotels={hotelsWithoutStars} />;
         <HotelsCarouselTest hotels={hotelsWithoutStars1} />;
      </SectionMarginer>

      <div className="food_section2"> 
        <h1 className ='p_search' >Du lịch Đà Lạt thưởng thức hương vị gia đình</h1>
       <FromTron/>
       </div>
       

      <SectionMarginer background={true}>
        <SectionHeader
          field={t("search.title")}
          title={t("search.field")}
        />
        <h5 className ='p_search' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,incididunt ut labore et dolor.</h5>
        <div className ='section_search'>
            <input className ='input_search'type="text" placeholder="Search.." name="search" />
            <button className="button_search" type="submit"><i className="fa fa-search search_kitchen"></i></button> 
       </div>
      </SectionMarginer>


      <div className="food_section2"> 
        <h1 className ='p_search' >Du lịch Đà Lạt thưởng thức hương vị gia đình</h1>
        <HotelsCarouselTest2 hotels={hotelsWithoutStars2}/>;
        <HotelsCarouselTest2 hotels={hotelsWithoutStars3}/>;
       </div>
      
      <SectionMarginer background={true}>
        <SectionHeader
          field={t("places to stay.places to stay")}
          title={t("places to stay.best places to stay in Dalat")}
        />
        <HotelsCarouselTest hotels={hotels} />;
      </SectionMarginer>
      <h2 className="text-center comment">Bình luận</h2>
      <CommentSection
        imgAccount={ac}
        nameComment="Leslie Alexander"
        time="March 12.2020.7:08 pm"
        contComment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
        lorem id penatibus imperdiet."
        AnsimgAcount={ac}
        Ansname="Jenifier Lopez"
        Anstime="March 12.2020.7:08 pm"
        AnscontComment="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <CommentSection
        imgAccount={ac}
        nameComment="Jane Cooper"
        time="March 12.2020.7:08 pm"
        contComment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
        lorem id penatibus imperdiet."/>
      <CommentSection
        imgAccount={ac}
        nameComment="Jenny Wilson"
        time="March 12.2020.7:08 pm"
        contComment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
        lorem id penatibus imperdiet."/>
      <FormComment/>      
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Food;
