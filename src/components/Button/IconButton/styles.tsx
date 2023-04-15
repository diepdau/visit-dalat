import styled from "styled-components";
import tw from "twin.macro";

export const ButtonContainer = styled.button`
  ${tw`flex items-center justify-center transition-all ease-linear w-11 h-11 bg-light-blue hover:bg-baby-blue disabled:opacity-40`}
`;

export const SwiperButton = styled(ButtonContainer)`
  ${tw`rounded-lg`}
`;

export const SaveButton = styled(ButtonContainer)`
  ${tw`rounded-tl-lg rounded-br-lg`}
`;

export const IconContainer = styled.div`
  ${tw` text-green`}
  svg {
    stroke: #1d764a;
  }
`;
