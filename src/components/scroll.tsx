// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./css/scroll.css";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { LoremIpsum } from "../assets/LoremIpsum";
import styled from "styled-components";

function Scroll() {
  const [title, setTtile] = useState<string>("title1");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (Number(latest) >= 0.5) {
      setTtile("title2");
    } else {
      setTtile("title1");
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
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Content>
        {title === "title1" && (
          <Title
            variants={textReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition }}
          >
            {title}
          </Title>
        )}
        {title === "title2" && (
          <Title
            variants={textReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition }}
          >
            {title}
          </Title>
        )}
        <LoremIpsum />
      </Content>
    </>
  );
}

export default Scroll;

const Content = styled.article`
  display: flex;
  align-items: flex-start;
`;

const Title = styled(motion.h1)`
  position: fixed;
`;
