import { motion, useAnimation } from "framer-motion";
import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "800", "600", "500"],
});

type CenterBoxProps = {
  scrollCount: number;
  setScrollCount: React.Dispatch<React.SetStateAction<number>>;
  isMobile: boolean;
  innerWidth: number;
};

const CenterBox = ({
  scrollCount,
  setScrollCount,
  isMobile,
  innerWidth,
}: CenterBoxProps) => {
  const isServer = typeof window === "undefined";
  const isInitialMobile = !isServer && window.innerWidth <= 768;

  const [blueLogo, setBlueLogo] = useState(true);
  const [mainText, setMainText] = useState(
    "At DropBox, Our Brand Guidelines helps us infuse everything we make with identity"
  );
  const [showLogo, setShowLogo] = useState(false);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const [boxSize, setBoxSize] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });
  const controls = useAnimation();
  const logoAnimate = useAnimation();
  const [logoY, setLogoY] = useState(200);

  const smallLineLeft = useAnimation();
  const smallLineRight = useAnimation();

  useEffect(() => {
    smallLineLeft.set({
      opacity: 1,
      height: 0,
    });

    smallLineLeft.start({
      height: "100vh",
      opacity: 0.3,
    });

    smallLineRight.set({
      opacity: 1,
      height: 0,
    });

    smallLineRight.start({
      height: "100vh",
      opacity: 0.3,
    });
  }, []);

  useEffect(() => {
    const updateBoxSize = () => {
      if (centerRef.current) {
        const rect = centerRef.current.getBoundingClientRect();
        setLogoY(rect.height * 0.45);
        setBoxSize({
          left: rect.left,
          right: rect.right,
          top: rect.top,
          bottom: rect.bottom,
        });
      }
    };

    updateBoxSize();
    const observer = new ResizeObserver(() => {
      updateBoxSize();
    });

    if (centerRef.current) {
      observer.observe(centerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (logoY === 200 && !isInitialMobile) return;
    console.log(logoY, "yLogo"); // Skip until it's updated

    const targetY = logoY;

    logoAnimate.set({ opacity: 0, y: 20 });

    if (window.innerWidth <= 320 && scrollCount === 6) {
      setLogoY(5);
    } else if (window.innerWidth <= 375 && scrollCount === 6) {
      setLogoY(5);
    } else if (window.innerWidth <= 425 && scrollCount === 6) {
      setLogoY(1);
      logoAnimate.set({
        scale:3
      })
     
    } else if (window.innerWidth <= 768 && scrollCount === 6) {
      setLogoY(3);
      logoAnimate.set({
        scale:3
      })
    } else if (window.innerWidth <= 1024 && scrollCount === 6) {
      controls.set({
        width: "5rem",
        height: "5rem",
      });
      setLogoY(9);
      logoAnimate.set({
        scale: 2,
      });
    } else if (window.innerWidth <= 1440 && scrollCount === 6) {
      setLogoY(10);
    } else if(window.innerWidth<=320 && scrollCount ===3){
      logoAnimate.set({
        y:61
      })
    }

    const timeout = setTimeout(() => {
      setShowLogo(true);
      logoAnimate.start({
        opacity: 1,
        y: targetY,
        transition: { duration: 1.2, ease: "easeInOut" },
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isInitialMobile, logoY, innerWidth]); // ✅ updated dependencies

  useEffect(() => {
    const handleScroll = debounce((event: WheelEvent) => {
      if (event.deltaY > 0 && scrollCount === 0) {
        setScrollCount((prev) => prev + 1);
        setBlueLogo(false);

        controls.start({
          height: isMobile ? "50vh" : "500px",
          width: isMobile ? "80vw" : "40vw",
          backgroundColor: "#0063fe",
          color: "#ffffff",
          fontSize: innerWidth <= 320 ? "1rem" : innerWidth <= 375 ? "1rem": "1.5rem",
          lineHeight: isMobile
            ? innerWidth <= 768
              ? "2rem"
              : isMobile
              ? "1.2rem"
              : "2rem"
            : "2rem",

          transition: { duration: 0.5, ease: "easeInOut" },
        });
        setMainText(
          "From icons to illustration, logos to language, this collection is the foundation for how dropbox looks, feels and sounds like Dropbox."
        );
        logoAnimate.start({
          y: Math.floor(logoY - 100),
          transition: { ease: "easeOut", duration: 1 },
        });
      } else if (event.deltaY > 0 && scrollCount === 1) {
        setScrollCount((prev) => prev + 1);
        // logoAnimate.start({
        //   y: innerWidth <=1024 ? logoY-160 : logoY - 80,
        //   transition: { ease: "easeOut", duration: 1 },
        // });

        if (isMobile) {
          smallLineLeft.set({
            left: "90px",
            transition: {
              ease: "easeIn",
            },
          });
          smallLineRight.set({
            left: "210px",
            transition: {
              ease: "easeIn",
            },
          });
        }
      } else if (event.deltaY > 0 && scrollCount === 2) {
        setScrollCount((prev) => prev + 1);
        logoAnimate.start({
          y: logoY - 80,
          transition: { ease: "easeOut", duration: 1 },
        });

        if (isMobile) {
          smallLineLeft.set({
            left: "110px",
            transition: {
              ease: "easeIn",
            },
          });
          smallLineRight.set({
            left: "190px",
            transition: {
              ease: "easeIn",
            },
          });
        }
      } else if (event.deltaY > 0 && scrollCount === 3) {
        setScrollCount((prev) => prev + 1);
        setMainText("");
        controls.start({
          width: isMobile ? "60vw" : "25vw",
          height: isMobile ? "40vh" : "30vw",
          transition: { duration: 0.5, ease: "easeInOut" },
        });
        logoAnimate.start({
          y: innerWidth <= 320 ? Math.floor(logoY + 60) : 100,
        });

        if (isMobile) {
          smallLineLeft.set({
            left: "130px",
            transition: {
              ease: "easeIn",
            },
          });
          smallLineRight.set({
            left: "170px",
            transition: {
              ease: "easeIn",
            },
          });
        }
      } else if (event.deltaY > 0 && scrollCount === 4) {
        setScrollCount((prev) => prev + 1);
        logoAnimate.start({
          y: innerWidth <= 320 ? Math.floor(logoY + 60) : 100,
          transition: { ease: "easeOut", duration: 1 },
          scale: 1,
        });
      } else if (event.deltaY > 0 && scrollCount === 5) {
        setScrollCount((prev) => prev + 1);
        controls.start({
          width: window.innerWidth <= 768 ? "3rem" : innerWidth<=1440 ? "20rem": "3rem",
          height: isMobile ? "3rem" : "2rem",

          backgroundColor: "#0063fe",
        });
        logoAnimate.start({
          y: isMobile
            ? innerWidth <= 320
              ? "0"
              : innerWidth <= 375
              ? 0
              : "20"
            : "20",
          scale: isMobile
            ? innerWidth <= 320
              ? "3"
              : innerWidth <= 375
              ? 3
              : 1
            : "1",

          transition: { duration: 0.5, ease: "easeInOut" },
        });
      } else if (event.deltaY < 0 && scrollCount === 1) {
        setScrollCount((prev) => prev - 1);
        setBlueLogo(true);
        controls.start({
          height: isMobile ? "50vh" : "500px",
          width: isMobile ? "80vw" : "40vw",
          color: "#0063fe",
          backgroundColor: "#ffffff",
          transition: { duration: 0.5, ease: "easeInOut" },
        });
        setMainText(
          "At DropBox, Our Brand Guidelines helps us infuse everything we make with identity"
        );
        logoAnimate.start({
          y: logoY,
          transition: { ease: "easeOut", duration: 1 },
        });
      } else if (event.deltaY < 0 && scrollCount === 2) {
        console.log("isndie -2");
        setScrollCount((prev) => prev - 1);
        logoAnimate.start({
          y: isMobile ? Math.floor(logoY - 60) : logoY + 220,
          transition: { ease: "easeOut", duration: 1 },
        });
      } else if (event.deltaY < 0 && scrollCount === 3) {
        setScrollCount((prev) => prev - 1);
        logoAnimate.start({
          y: innerWidth <=320 ? logoY :Math.floor(logoY) + 30,
          transition: { ease: "easeOut", duration: 1 },
        });

        if (isMobile) {
          smallLineLeft.set({
            left: "90px",
            transition: {
              ease: "easeIn",
            },
          });
          smallLineRight.set({
            left: "210px",
            transition: {
              ease: "easeIn",
            },
          });
        }
      } else if (event.deltaY < 0 && scrollCount === 4) {
        setScrollCount((prev) => prev - 1);
        setMainText(
          "From icons to illustration, logos to language, this collection is the foundation for how dropbox looks, feels and sounds like Dropbox."
        );
        controls.start({
          height: isMobile ? "50vh" : "500px",
          width: isMobile ? "80vw" : "40vw",
          transition: { duration: 0.5, ease: "easeInOut" },
        });
        logoAnimate.start({
          y: innerWidth <=320 ? logoY : Math.floor(logoY) + 20,
        });

        if (isMobile) {
          smallLineLeft.set({
            left: "110px",
            transition: {
              ease: "easeIn",
            },
          });
          smallLineRight.set({
            left: "190px",
            transition: {
              ease: "easeIn",
            },
          });
        }
      } else if (event.deltaY < 0 && scrollCount === 5) {
        setScrollCount((prev) => prev - 1);
     

        logoAnimate.start({
          y: Math.floor(logoY) + 50,
          transition: { ease: "easeOut", duration: 1 },
          scale: isMobile ? (innerWidth <= 320 ? "1" : "1") : "1",
        });
      } else if (event.deltaY < 0 && scrollCount === 6) {
        setScrollCount((prev) => prev - 1);
        controls.start({
          // width: isMobile ? "60vw" : "25vw",
            width: window.innerWidth <= 768 ? "3rem" : innerWidth<=1440 ? "4rem": "3rem",
          height: isMobile ? "40vh" : "30vw",
          transition: { duration: 0.5, ease: "easeInOut" },
        });
        logoAnimate.set({
          y: Math.floor(logoY + 30),
          scale:1,
          opacity: 1,
        });
        // logoAnimate.start({
        // y: innerWidth <= 375 ? 6 : logoY + 50,
        //   transition: { duration: 0.5, ease: "easeInOut" },
        //   scale:1

        // });
      }
    }, 100);

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [scrollCount, controls, logoAnimate, logoY, isMobile]);

  return (
    <div className="">
      <div className="absolute inset-0 flex items-center justify-center  pointer-events-none px-4 z-10">
        <motion.div
          className={`${inter.className} relative text-[#0063fe] xl:w-[30rem] md:w-[10rem]  lg:top-0 text-center md:text-left  text-2xl md:text-4xl lg:text-5xl font-bold pointer-events-auto w-full max-w-md sm:max-w-lg p-4 rounded-xl bg-white`}
          animate={controls}
          initial={{
            width: isInitialMobile ? "80vw" : "80vw",
            height: isInitialMobile ? "50vh" : "80vh",
          }}
          ref={centerRef}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2,
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            {mainText}
          </motion.h1>

          {/* logo */}
          <motion.div animate={logoAnimate}>
            {showLogo && (
              <Image
                src={blueLogo ? "/Logo.svg" : "/logo_white.svg"}
                width={80}
                height={80}
                alt="logo"
              />
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Vertical lines */}
      <motion.div
        className="w-0.5 bg-[#0063fe] absolute top-0 z-20"
        style={{ left: `${boxSize.left}px` }}
        initial={{ height: 0, opacity: 1 }}
        animate={{ height: "100vh", opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* //extra lines for small devices */}

      <motion.div
        className="w-0.5 bg-[#0063fe] absolute top-0 z-20 lg:hidden"
        style={{ left: `${boxSize.left + 50}px` }}
        animate={smallLineLeft}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <motion.div
        className="w-0.5 bg-[#0063fe] absolute top-0 z-20 lg:hidden"
        style={{ left: `${boxSize.right - 50}px` }}
        animate={smallLineRight}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <motion.div
        className="w-0.5 bg-[#0063fe] absolute top-0 z-20 "
        style={{ left: `${boxSize.right}px` }}
        initial={{ height: 0, opacity: 1 }}
        animate={{ height: "100vh", opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Horizontal lines */}
      <motion.div
        className="h-0.5 bg-[#0063fe] absolute top-10 z-0"
        style={{ top: `${boxSize.top}px` }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100vw", opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.div
        className="h-0.5 bg-[#0063fe] absolute bottom-14 z-0"
        style={{ top: `${boxSize.bottom}px` }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100vw", opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
      />
    </div>
  );
};

export default CenterBox;
