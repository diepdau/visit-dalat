
import React from "react";
import StarRatings from "react-star-ratings";
import styled from "styled-components";
import { Container,ImageContainer, Image, Content } from "./styles";
interface IContainerProps {
  star?: number;
}

const Title = styled.a<IContainerProps>`
  display: block;
  cursor: pointer;
  color: black;
  font-size: ${({ star }: IContainerProps) => (star !== undefined ? "2xl" : "xl")};
  font-weight: ${({ star }: IContainerProps) => (star !== undefined ? "bold" : "bold")};
`;

interface IHotelCardProps {
  imgSrc: string;
  title: string;
  star?: number;
  content?:string;
}

const HotelCardTest: React.FC<IHotelCardProps> = ({ imgSrc, title, star,content}) => {
  return (
    <Container star={star}>
      <ImageContainer>
        <Image src={imgSrc} alt="hotel" loading="lazy" />
      </ImageContainer>
      <Title star={star}>{title}</Title>
      <Content star={star}>{content}</Content>
      {star !== undefined && (
        <StarRatings
          rating={star}
          starDimension="20px"
          starSpacing="3px"
          starRatedColor="#FF9921"
        />
      )}
    </Container>
  );
};

export default HotelCardTest;