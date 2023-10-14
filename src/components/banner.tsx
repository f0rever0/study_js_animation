// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./css/banner.css";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import styled from "styled-components";

function Banner() {
  const [title, setTtile] = useState<string>("안녕하세요~");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (Number(latest) > 0 && Number(latest) < 0.2) {
      setTtile("공홈팀");
    } else if (Number(latest) >= 0.2 && Number(latest) < 0.5) {
      setTtile("정말정말");
    } else if (Number(latest) >= 0.5 && Number(latest) < 0.8) {
      setTtile("사당해");
    } else if (Number(latest) === 0) {
      setTtile("안녕하세요~");
    }
  });

  const transition = {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.9],
  };

  const textReveal = {
    initial: {
      y: "200%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
    },
  };

  return (
    <Content>
      <Title
        variants={textReveal}
        initial="initial"
        animate="animate"
        transition={{ ...transition }}
      >
        {title}
      </Title>
    </Content>
  );
}

export default Banner;

const Content = styled.article`
  background-image: url("https://github.com/f0rever0/f0rever0/assets/62867581/72c610b7-f1f8-4752-83b9-7ad8afe1c9a6");
  display: flex;
  align-items: flex-start;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const Title = styled(motion.h1)`
  position: fixed;
`;
