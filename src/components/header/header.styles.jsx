import styled from "styled-components";
//MUi stuff
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Container = styled.div`
  width: 100%;
  height: 500px;

  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    background: #fcfcfc;
    width: 47px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    box-shadow: 1px 2px 10px -1px rgb(0 0 0 / 30%);
  }

  .slick-prev {
    left: 0;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  .slick-next {
    right: 0;
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
  }
  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
`;

export const ArrowBack = styled(ArrowBackIosNewIcon)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.dark};
`;
export const ArrowForward = styled(ArrowForwardIosIcon)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin-top: 64px;
`;

export const Slide = styled.div`
  width: 100vw;
  height: 48vh;
  /* margin: 64px 30px 0 30px; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
  /* background: url(${(props) => props.bg}) center no-repeat;
  background-size: cover; */
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Desc = styled.p`
  margin: 30px 0px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-bottom: 3px solid ${({ theme }) => theme.colors.dark};
  border-right: 3px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  transition: all 1s ease;
  :hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export const HeaderCarousel = styled("div")`
  margin: 10px;
`;
