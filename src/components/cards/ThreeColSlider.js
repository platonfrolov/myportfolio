import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import UTMLScreenshot from "../../images/utml_screenshot.png";
import DSLScreenshot from "../../images/dsl_screenshot.png";
import APScreenshot from "../../images/ap_screenshot.png";
import AEScreenshot from "../../images/ae_screenshot.png"

const Container = tw.div`mb-48 relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`rounded-lg h-full flex! flex-col max-w-sm shadow`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-lg w-full h-56 sm:h-64 bg-cover bg-center`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const highlightGradientsCss = [
  css`
    background: #2A5470;
    background: linear-gradient(45deg, #2A5470, #4078c0);
  `,
];



const PrimaryButton = tw(PrimaryButtonBase)`rounded-full mx-10 mb-5 mt-auto`;
export default () => {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: AEScreenshot,
      title: "AlterEgo",
      description: "A plug-in for clothing brands to visualize how different cloths and sizes fit on a human.",
      year: "2023",
    },
    {
      imageSrc: UTMLScreenshot,
      title: "UTML",
      description: "Light weight version of Google Draw with functionality and UI tailored for teaching purposes at the University of Twente.",
      year: "2021",
    },
    {
      imageSrc: APScreenshot,
      title: "Audio Playground",
      description: "A tool to transcribe/annotate interviews and visualize interview data.",
      locationText: "Ibiza, Spain",
      pricingText: "USD 50/Day",
      year: "2020",
    },
    {
      imageSrc: DSLScreenshot,
      title: "Tree Restoration Monitoring",
      description: "Machine learning models to segment and cluster/classify trees from drone imagery.",
      year: "2022",
    },
    // {
    //   imageSrc: DSLScreenshot,
    //   title: "Bachelor Thesis",
    //   description: "A model to segment and cluster/classify trees from drone imagery.",
    //   locationText: "Palo Alto, CA",
    //   pricingText: "USD 19/Day",
    //   rating: "5.0",
    // },
    {
      imageSrc: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Miscellaneous personal projects",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      year: "",
    },
  ]

  return (
    <Container id="projects">
      <Content>
        <HeadingWithControl>
          <Heading>Projects</Heading>
          <Controls>
            <PrevButton css={highlightGradientsCss[0]} onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton css={highlightGradientsCss[0]} onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    {/* <StarIcon /> */}
                    <Rating>{card.year}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton css={highlightGradientsCss[0]}>Go to project</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
