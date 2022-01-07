import Slider from "react-slick";
//Local stuff
import { sliderItems } from "../../util/data";
import * as s from "./header.styles";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <s.ArrowBack />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <s.ArrowForward />
    </div>
  );
};

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <s.Container>
      <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} {...settings}>
        {sliderItems.map((item) => (
          <s.Wrapper>
            <s.Slide bg={item.bg} key={item.id}>
              <s.InfoContainer>
                <s.Title>{item.title}</s.Title>
                <s.Desc>{item.desc}</s.Desc>
                <s.Button>SHOW NOW</s.Button>
              </s.InfoContainer>
            </s.Slide>
          </s.Wrapper>
        ))}
      </Slider>
    </s.Container>
  );
};

export default Header;
