import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { Arrow, Button, Container, Description, Img, ImgContainer, InfoContainer, Slide, Title, Wrapper } from "./SliderElements";
import { useState } from "react";
import { sliderItems } from '../../data';

const Slider = () => {

    //States
    const [slideIndex, setSlideIndex] = useState(0);

    //Functions
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick("left")} >
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex} >
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id} >
                    <ImgContainer>
                        <Img src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction='right' onClick={() => handleClick("right")} >
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider