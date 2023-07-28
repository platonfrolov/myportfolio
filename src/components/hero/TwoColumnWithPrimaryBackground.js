import React, {useState, useEffect} from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase
} from "../headers/light.js";
import styled from "styled-components";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import keyF from "images/keyboard_key_f.png";
import keyP from "images/keyboard_key_p.png";
import serverIllustrationImageSrc from "images/platon_in_zurich.jpg";

const PrimaryBackgroundContainer = tw.div`mb-72 -mx-8 px-8 bg-white text-gray-900`;

const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(NavLinkBase)`lg:text-black lg:hocus:text-gray-500 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-600 hocus:text-gray-400`;
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full shadow-raised lg:bg-new_primary-100 lg:hocus:bg-new_primary-200`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`mb-16 max-w-3xl lg:max-w-4xl lg:text-left text-5xl leading-tight`;
const Description = tw(SectionDescription)`mb-24 mt-8 max-w-2xl text-gray-900 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = styled(PrimaryButtonBase)`
${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;
const Image = tw.img`w-2/3 mx-auto`
const LogoImage1 = tw.img`p-0 m-0 w-10`
const LogoImage2 = tw.img`p-0 m-0 w-10 mr-3`

const texts = [
  'Hello, world!',
  'Welcome to my website!',
  'Check out my latest projects!',
  'Feel free to contact me!',
];

const highlightGradientsCss = [
  css`
    background: #2A5470;
    background: linear-gradient(45deg, #2A5470, #4078c0);
  `,
];

const imgStyle = css`
img {
  --g: 10px;     /* the gap */
  --b: 16px;    /* border thickness*/
  --c: #2A5470; /* the color */
  
  
  padding: calc(var(--g) + var(--b));
  --_c: #0000 0 25%, var(--c) 0 50%;
  --_g1: repeating-linear-gradient(90deg ,var(--_c)) repeat-x;
  --_g2: repeating-linear-gradient(180deg,var(--_c)) repeat-y;
  background:
    var(--_g1) var(--_p1, 75%) 0   ,var(--_g2) 0    var(--_p2, 75%),
    var(--_g1) var(--_p2, 75%) 100%,var(--_g2) 100% var(--_p1, 75%);
  background-size: 200% var(--b),var(--b) 200%;
  transition: .3s;
}
img:hover {
  --_p1: 175%;
  --_p2: -25%;
  filter: grayscale(0%);
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  grid-auto-flow: column;
  gap: 30px;
  background: pink;
}
`

const TextFadeInOut = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText(texts[currentIndex]);
        setIsVisible(true);
      }, 500); // Delay before showing the next text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="mt-15 text-center text-lg">
      <div
        className={`text-4xl font-bold text-blue-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {currentText}
      </div>
    </div>
  );
};


export default ({
  t = TextFadeInOut,
  heading = "My name is Platon Frolov",
  description = "I am a graduate data scientist based in Zürich, with a background in computer science and a strong passion for mathematics. I specialize in machine learning, statistics, computer vision, optimization, and software engineering. My goal is to leverage these skills to uncover valuable insights from data and contribute meaningfully to the field of data science.",
  primaryButton1Text = "Say Hello",
  primaryButton2Text = "Resume",
  primaryButton1Url = "mailto:pl.frolov99@gmail.com",
  primaryButton2Url = "images/",
  imageSrc = serverIllustrationImageSrc,
  i = imgStyle,
}) => {
  const logoLink = (
    <LogoLink>
      <LogoImage1 src={keyP} alt="Logo" />
      <LogoImage2 src={keyF} alt="Logo" />
      Platon Frolov
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      {/* <NavLink href="#hero">About</NavLink> */}
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      <PrimaryLink css={highlightGradientsCss[0]} href={primaryButton2Url} download="cv_platon_frolov_07_23.pdf">Resume</PrimaryLink>
    </NavLinks>
  ];
  return (
    <PrimaryBackgroundContainer id="hero">
      <Content2Xl>
        <Header logoLink={logoLink} links={navLinks} />
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <TextFadeInOut></TextFadeInOut>
                <Description>{description}</Description>
                <PrimaryButton css={highlightGradientsCss[0]} as="a" href={primaryButton1Url}>{primaryButton1Text}</PrimaryButton>
                <PrimaryButton css={highlightGradientsCss[0]} as="a" href={primaryButton2Url} download="cv_platon_frolov_07_23.pdf">{primaryButton2Text}</PrimaryButton>
              </TextColumn>
              <IllustrationColumn css={i}>
                <Image src={imageSrc} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
