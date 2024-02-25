import React, { useState, useEffect } from "react";
import dynamicTextData from "../config/data.json";
import Button from "../utils/button/ButtonBirdz";
import SlideClient from "../components/slide-client/SlideClient";
import QuemSomos from "../components/quem-somos/QuemSomos";
import WeDo from "../components/o-que-fazemos/WeDo";
import Cases from "../components/cases/Cases";

const Home = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [deleting1, setDeleting1] = useState(false);
  const [deleting2, setDeleting2] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);


  const wordsList1 = ["website", "branding", "design", "marketing"];
  const wordsList2 = [
    "pontencial",
    "soluções",
    "inovações",
    "recursos",
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (deleting1) {
        if (text1.length > 0) {
          setText1((prevText) => prevText.slice(0, -1));
        } else {
          setDeleting1(false);
          setCurrentIndex1((prevIndex) => (prevIndex + 1) % wordsList1.length);
        }
      } else {
        if (text1 !== wordsList1[currentIndex1]) {
          setText1(
            (prevText) => prevText + wordsList1[currentIndex1][prevText.length]
          );
        } else {
          setDeleting1(true);
        }
      }
    }, 100); // Intervalo de 150ms entre cada letra para o primeiro texto

    const timer2 = setTimeout(() => {
      if (deleting2) {
        if (text2.length > 0) {
          setText2((prevText) => prevText.slice(0, -1));
        } else {
          setDeleting2(false);
          setCurrentIndex2((prevIndex) => (prevIndex + 1) % wordsList2.length);
        }
      } else {
        if (text2 !== wordsList2[currentIndex2]) {
          setText2(
            (prevText) => prevText + wordsList2[currentIndex2][prevText.length]
          );
        } else {
          setDeleting2(true);
        }
      }
    }, 100); // Intervalo de 150ms entre cada letra para o segundo texto

    // const cursorTimer = setInterval(() => {
    //   setCursorVisible((prev) => !prev);
    // }, 100); // Intervalo de 500ms para piscar o cursor

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      // clearInterval(cursorTimer);
    };
  }, [
    text1,
    text2,
    currentIndex1,
    currentIndex2,
    deleting1,
    deleting2,
    wordsList1,
    wordsList2,
  ]);

  return (
    <>
      <section id="topo"className="mt-40">
        <div className="container">
          <div className="px-5 grid grid-cols-1 gap-10 lg:gap-52 lg:grid-cols-2 lg:px-0">
            <div className="flex flex-col gap-2">
              <h1 className="text-black text-4xl font-regular lg:text-5xl xl:text-6xl ">
                Mais{" "}
                <span className="font-bold text-yellowBirdz">
                  {text1}
                  {/* {cursorVisible && (
                    <span className="cursor text-black font-light">|</span>
                  )} */}
                </span>
              </h1>
              <h1 className="text-black text-4xl font-regular lg:text-5xl xl:text-6xl ">
                mais{" "}
                <span className="font-bold text-yellowBirdz">
                  {text2}
                  {/* {cursorVisible && (
                    <span className="cursor text-black font-light">|</span>
                  )} */}
                </span>
              </h1>
              <p className="mt-7 text-blackBirdz lg:text-md tracking-normal">
                {dynamicTextData.dynamicText}
              </p>
              <p className=" text-blackBirdz lg:text-md tracking-normal">
                {dynamicTextData.dynamicText2}
              </p>
              <Button style={"mt-7 px-0 w-[190px] text-center"} name={"começar agora"}/>
              <SlideClient style={"mt-7"}/>
            </div>
              <img src="./images/bg-home.jpg" className="object-cover w-[800px] h-[600px]" alt="" />
          </div>
        </div>
      </section>
      <QuemSomos />
      <WeDo />
      <Cases />
    </>
  );
};

export default Home;
