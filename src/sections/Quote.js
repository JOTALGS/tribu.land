'use client'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import initialVideo from "../assets/video/tribu.mp4";
import LogoImage from "../assets/Images/logo.png";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #000;
`;


const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: absolute;
  top: 100;
  left: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }
`;


const TextContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 5%;
  width: 65%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto', sans-serif;
  font-size: var(--fontlg);
`;

const moveUp = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const Text = styled.p`
  width: 100%;
  height: var(--fontxl);
  overflow: hidden;
  position: relative;
  text-transform: uppercase;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    background-image: linear-gradient(-55deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2em;
  }

  @media screen and (max-width: 95em) {
    font-size: 2rem;
    height: 200px;
  }

  @media screen and (max-width: 48em) {
    font-size: 1rem;
    height: 200px;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 15%; /* Sube la posición del logo para dar espacio al texto */
  left: 5%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Quote = () => {
  const sectionRef = useRef(null);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const Elem = sectionRef.current;

    const trigger = ScrollTrigger.create({
      trigger: Elem,
      start: 'top top',
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <VideoContainer>
        <video src={initialVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <LogoContainer>
        <Image src={LogoImage} alt="Logo"/>
      </LogoContainer>
      <TextContainer>
        <Text delay="0s">
          <span>FIND YOUR NEXT COLLABORATION</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quote;