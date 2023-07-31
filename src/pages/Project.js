import React from "react";
import { useRef } from 'react';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import HeaderBase, {
    LogoLink as LogoLinkBase,
    NavLinks,
    NavLink as NavLinkBase,
  } from "../components/headers/light.js";
import { SectionHeading } from "components/misc/Headings";
import projects_info from "project_info.json"
import { Markup } from 'interweave';
import keyF from "images/keyboard_key_f.png";
import keyP from "images/keyboard_key_p.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const LogoDiv = tw.div`flex`
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const LogoLink = tw(LogoLinkBase)`text-gray-600 hocus:text-gray-400`;
const LogoImage1 = tw.img`p-0 m-0 w-10`
const LogoImage2 = tw.img`p-0 m-0 w-10`
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;



export default ({ 
}) => {
    const pathname = window.location.href;
    const last_part = pathname.split("/").at(-1)
    var project_info = undefined
    if (last_part in projects_info["projects"]) {
        project_info = projects_info["projects"][last_part]
    } else {
        project_info = projects_info["not_found"]
    }
    console.log(pathname.split("/"))
    console.log(last_part)
    const logoLink = (
        <LogoLink href="/">
            <FontAwesomeIcon icon={faArrowLeft}/>
            Back
        </LogoLink>
      );
      const navLinks = [

        <LogoLink>
        <LogoImage1 src={keyP} alt="Logo" />
        <LogoImage2 src={keyF} alt="Logo" />
        Platon Frolov
      </LogoLink>
      ];
  return (
    <AnimationRevealPage>
      <Container>
        
        <ContentWithPaddingXl>
        <Header logoLink={logoLink} links={navLinks} />
          <HeadingRow>
            <Heading>{project_info.name}</Heading>
          </HeadingRow>
          <Text>
            <Markup content={project_info.description}></Markup>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};
