import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink} from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-solid-svg-icons'

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlansContainer = tw.div`mb-48 flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;
const Plan = styled.div`
  ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }

  ${props =>
    props.featured &&
    css`
      background: rgb(100,21,255);
      background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
      background: rgb(85,60,154);
      background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
      background: rgb(76,81,191);
      background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);
      ${tw`bg-primary-500 text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`h-screen flex items-center justify-center text-[100px] flex flex-col -mx-8 px-8 py-8  flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;


export default ({
  heading = "Contact",
  plans = null,
}) => {
  const defaultPlans = [
    {
      name: "LinkedIn",
      buttonText: "visit page",
      buttonLink: "https://ch.linkedin.com/in/platon-frolov-4168b81a6",
      icon: faLinkedin,
    },
    {
      name: "E-mail",
      buttonText: "send email",
      buttonLink: "mailto:pl.frolov99@gmail.com",
      icon: faEnvelope,
    },
    {
      name: "Github",
      buttonText: "visit page",
      buttonLink: "https://github.com/platonfrolov",
      icon: faGithub,
    },
  ];

  if (!plans) plans = defaultPlans;

  const highlightGradientsCss = [
    css`
      // background: #0077b5;
      background:linear-gradient(45deg, #0077b5,#00a0dc);
    `,
    css`
      background: #2A5470;
      background: linear-gradient(45deg, #6d9fD5, #2A5470);
    `,
    css`
      background: #000000;
      background: linear-gradient(45deg, #4078c0, #000000);
    `
  ];

  const highlightGradientsIconCss = [
    css`
      color: #0077b5;
    `,
    css`
      color: #2A5470;
    `,
    css`
      color: #000000;
    `
  ];



  return (
    <Container id="contact">
      <ContentWithPaddingXl>
        <HeaderContainer>
          <Heading>{heading}</Heading>
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              {!plan.featured && <div className="planHighlight" css={highlightGradientsCss[index % highlightGradientsCss.length]} />}
              <PlanHeader>
                <span >{plan.name}</span>
              </PlanHeader>
              <PlanFeatures>
              <FontAwesomeIcon css={highlightGradientsIconCss[index]} icon={plan.icon}/>
              </PlanFeatures>
              <PlanAction>
                <a href={plan.buttonLink}>
                <BuyNowButton css={highlightGradientsCss[index]}>{plan.buttonText}</BuyNowButton>
                </a>
              </PlanAction>
            </Plan>
          ))}
          <DecoratorBlob/>
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
