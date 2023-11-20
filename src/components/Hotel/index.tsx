
import React from "react";
import StarRatings from "react-star-ratings";
import styled from "styled-components";
import { Container,ImageContainer, Image } from "./styles";
interface IContainerProps {
  star?: number;
}

const Title = styled.a<IContainerProps>`
  display: block;
  cursor: pointer;
  color: black;
  font-size: ${({ star }: IContainerProps) => (star !== undefined ? "2xl" : "xl")};
  font-weight: ${({ star }: IContainerProps) => (star !== undefined ? "bold" : "normal")};
`;

interface IHotelCardProps {
  imgSrc: string;
  title: string;
  star?: number;
  width?:number;
}

const HotelCard: React.FC<IHotelCardProps> = ({ imgSrc, title, star ,width}) => {
  return (
    <Container star={star}style={{ width: `${width}px` }}>
      <ImageContainer>
        <Image src={imgSrc} alt="hotel" loading="lazy" />
      </ImageContainer>
      <Title star={star}>{title}</Title>
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

export default HotelCard;