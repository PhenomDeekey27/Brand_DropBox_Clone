
import { useEffect } from "react";
import { motion, useAnimation } from "motion/react"; // Adjusted import
import { SiComma } from "react-icons/si";
import { FaGreaterThan } from "react-icons/fa";
import { FaBezierCurve } from "react-icons/fa";
import { FaAmilia } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { BsCircleSquare } from "react-icons/bs";
import { AiFillPicture } from "react-icons/ai";
import { FaDropbox } from "react-icons/fa";

type OuterBoxesProps = {
  scrollCount: number;
  isMobile: boolean;
  innerWidth: number;
};

const OuterBoxes = ({ scrollCount, isMobile, innerWidth }: OuterBoxesProps) => {
  const orangeBoxAnimate = useAnimation();
  const blueBoxAnimate = useAnimation();
  const yellowBoxAnimate = useAnimation();
  const purpleBoxAnimate = useAnimation();
  const extraBoxLeftTopAnimate = useAnimation();
  const extraBoxLeftBottomAnimate = useAnimation();
  const extraBoxRightTopAnimate = useAnimation();
  const extraBoxRightBottomAnimate = useAnimation();

  console.log("scrollPostion", scrollCount);

  useEffect(() => {
    if (scrollCount === 1) {
      !isMobile &&
        orangeBoxAnimate.start({
          x: 20,
          y: 50,
          opacity: 1,
          scale: 1,
          left: "-480px",
          width: "500px",
          height: "500px",
          bottom: "-100px",
          transition: { duration: 0.8, ease: "easeInOut" },
        });

      !isMobile &&
        blueBoxAnimate.start({
          x: -50,
          y: 50,
          opacity: 1,
          scale: 1,
          top: "-250px",
          right: "-500px",
          width: "500px",
          height: "500px",
          transition: { duration: 0.8, ease: "easeInOut" },
        });
    } else if (scrollCount === 2) {
      !isMobile &&
        orangeBoxAnimate.start({
          x: 20,
          y: 50,
          opacity: 1,
          scale: 1,
          left: "-380px",
          width: "500px",
          height: "500px",
          bottom: "-100px",
          transition: { duration: 0.8, ease: "easeInOut" },
        });

      !isMobile &&
        blueBoxAnimate.start({
          x: -50,
          y: 50,
          opacity: 1,
          scale: 1,
          top: "-250px",
          right: "-400px",
          width: "500px",
          height: "500px",
          transition: { duration: 0.8, ease: "easeInOut" },
        });
    } else if (scrollCount === 3) {
      !isMobile &&
        orangeBoxAnimate.start({
          x: 20,
          y: 50,
          opacity: 1,
          scale: 1,
          left: "-280px",
          width: "500px",
          height: "500px",
          bottom: "-100px",
          transition: { duration: 0.8, ease: "easeInOut" },
        });

      !isMobile &&
        blueBoxAnimate.start({
          x: -50,
          y: 50,
          opacity: 1,
          scale: 1,
          top: "-250px",
          right: "-300px",
          width: "500px",
          height: "500px",
          transition: { duration: 0.8, ease: "easeInOut" },
        });
    } else if (scrollCount === 4) {
      !isMobile &&
        orangeBoxAnimate.start({
          x: 20,
          y: 50,
          opacity: 1,
          scale: 1,
          left: "-180px",
          width: "500px",
          height: "500px",
          bottom: "-100px",
          transition: { duration: 0.8, ease: "easeInOut" },
        });

      !isMobile &&
        blueBoxAnimate.start({
          x: -50,
          y: 50,
          opacity: 1,
          scale: 1,
          top: "-250px",
          right: "-200px",
          width: "500px",
          height: "500px",
          left:"unset",
          transition: { duration: 0.8, ease: "easeInOut" },
        });


     !isMobile && yellowBoxAnimate.start({
        opacity: 0,
        scale: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    !isMobile  &&  purpleBoxAnimate.start({
        opacity: 0,
        scale: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });

    innerWidth <=425 &&  orangeBoxAnimate.start({
        opacity:0,
        scale:0
      })
      innerWidth <=425 &&  blueBoxAnimate.start({
          opacity:0,
        scale:0

      })

      
    
    } else if (scrollCount === 5) {
      console.log("sc-5")

        isMobile && yellowBoxAnimate.start({
          opacity:0,
          scale:0
        })
         isMobile && purpleBoxAnimate.start({
          opacity:0,
          scale:0
        })
        

      !isMobile &&
        yellowBoxAnimate.start({
          width: "600px",
          height: "400px",
          opacity: 1,
          scale: 1,
          top: "-350px",
          left: innerWidth <=1024 ? "0px": innerWidth <=1440 ? "unset" : "200px",
          x: 0,
          y: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        });

      !isMobile &&
        purpleBoxAnimate.start({
          width: "600px",
          height: "400px",
          opacity: 1,
          scale: 1,
          bottom: "-330px",
          right: innerWidth <=1024 ? "0px" : innerWidth <=1440 ? "-50px" :"50px",
          x: 0,
          y: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        });

      orangeBoxAnimate.start({
        x: 20,
        y: 50,
        opacity: 1,
        scale: 1,
        width:!isMobile &&innerWidth<=1024 ? "500px":"20rem",
        left:  !isMobile && innerWidth<=1024 ? "-10rem": !isMobile && innerWidth<=1440 ? "-8rem": isMobile && innerWidth<=320 ? "9rem" : isMobile &&
        innerWidth <= 375 ? "10rem":   innerWidth <= 425 ? "10rem": innerWidth <= 768 ? "unset":
        "1rem",
   
        bottom: isMobile ? "-3rem" : "-100px",
        right: innerWidth<= 768 ? "1rem" : isMobile ? "1rem" : "",
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      blueBoxAnimate.start({
        x: -50,
        y: 50,
        opacity: 1,
        scale: 1,
        top: innerWidth<=320 ? "-9rem" : innerWidth<=375 ? "-9rem" :  "-10rem" ,
        left: innerWidth<=320 ? "-13rem": innerWidth <=375 ?"-11rem" : !isMobile &&innerWidth<=1024 ? "unset" :
        !isMobile && innerWidth<=1440 ? "unset" :
        "1rem",
      
      right : innerWidth <=1024 ? "-200px": innerWidth <=1440 ? "-10rem" :  "unset",  
        width: innerWidth <=768 ? "25rem" : innerWidth <=1440 ? "25rem" :  "25rem" ,
        height: isMobile ? "8rem" : "500px",
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      extraBoxLeftTopAnimate.start({ opacity: 0, scale: 0 });
      extraBoxLeftBottomAnimate.start({ opacity: 0, scale: 0 });
      extraBoxRightTopAnimate.start({ opacity: 0, scale: 0 });
      extraBoxRightBottomAnimate.start({ opacity: 0, scale: 0 });
    } else if (scrollCount === 6) {
      const commonAnimation = {
        opacity: [0, 0.7, 1],
        scale: [0, 0.7, 1],
        transition: { duration: 1.2, ease: "easeInOut" },
      };

      extraBoxLeftTopAnimate.start({
        ...commonAnimation,
        top: isMobile ? "2px" : "10px",
        left: isMobile ? "2px" : "10px",
        width: isMobile
          ? innerWidth <= 320
            ? "8rem"
            : innerWidth <= 375
            ? "10rem" : innerWidth <=425 ? "11rem" : innerWidth <=768 ? "22rem" 
            : ""
          : "",
      });

      let lemonGreenRight;
          if(innerWidth<=320){
          lemonGreenRight="8rem"
        }else if(innerWidth<=375){
          lemonGreenRight="9.5rem"
        }else if(innerWidth<=425){
          lemonGreenRight="11rem"
        }else if(innerWidth<=768){
          lemonGreenRight="21.5rem"
        } else if(innerWidth<=1024){
          lemonGreenRight="15.5rem"
        }else if(innerWidth<=1440){
          lemonGreenRight="20rem"
        }

      extraBoxLeftBottomAnimate.start({
        ...commonAnimation,
        bottom: isMobile ? "9rem" : "10px",
        left: isMobile ? "2px" : "10px",
        width: lemonGreenRight,
          height: innerWidth<=768 ? "11rem" :  innerWidth<=1024 ? "18.5rem" : innerWidth <=1440 ? "27rem" :"10rem"
      });

          //bluboxwidth
let darkOrangeWidth;
        if(innerWidth<=320){
          darkOrangeWidth="8rem"
        }else if(innerWidth<=375){
          darkOrangeWidth="9.5rem"
        }else if(innerWidth<=425){
          darkOrangeWidth="11rem"
        }else if(innerWidth<=768){
          darkOrangeWidth="21.5rem"
        } else if(innerWidth<=1024){
          darkOrangeWidth="15.5rem"
        }else if(innerWidth<=1440){
          darkOrangeWidth="20rem"
        }



      extraBoxRightTopAnimate.start({
        ...commonAnimation,
        top: isMobile ? "8rem" : "10px",
        right: "4px",
        width: darkOrangeWidth,
          height :innerWidth <= 768 ? "11rem" :  innerWidth <= 1024 ? "20rem": innerWidth <=1440 ? "27rem":  "11.5rem" 
      });

      extraBoxRightBottomAnimate.start({
        ...commonAnimation,
        bottom: "4px",
        right: "3px",
         width: isMobile ? innerWidth <= 320 ?
        "8rem" : innerWidth <=375 ? "9.5rem" : innerWidth <=425 ? "10.5rem" :innerWidth <=768 ? "21rem"
        : innerWidth <=1024 ? "26rem"
        :"":""
      });

      // Update yellow box animation for mobile
      isMobile &&
        yellowBoxAnimate.start({
          ...commonAnimation,
          top: "2px", // Align to upper-left corner
          right: isMobile ? "2px" : "10px", // Align to upper-left corner
          width: isMobile
            ? innerWidth <= 320
              ? "11rem"
              : innerWidth <= 375
              ? "13rem" : innerWidth <=425 ? "15rem" : innerWidth <=768 ? "25.5rem"
              : "15rem"
            : "",
          // Match mobile size
          height: "7.5rem", // Match mobile size
        });

    

        //bluboxwidth
let blueboxWidth;
        if(innerWidth<=320){
          blueboxWidth="11rem"
        }else if(innerWidth<=375){
          blueboxWidth="13rem"
        }else if(innerWidth<=425){
          blueboxWidth="14.5rem"
        }else if(innerWidth<=768){
          blueboxWidth="25.5rem"
        } else if(innerWidth<=1024){
          blueboxWidth="12rem"
        }else if(innerWidth<=1440){
          blueboxWidth="20rem"
        }


        let bluboxHeight;

          if(innerWidth<=768){
          bluboxHeight="7rem"
          }
         else if(innerWidth<=1024){
          bluboxHeight="26rem"
        }else if(innerWidth<=1440){
          bluboxHeight="34rem"
        }

        let blueboxright;

        if(innerWidth<=320){
          blueboxright="5.6rem"
        }else if(innerWidth<=375){
          blueboxright="7.1rem"
        }else if(innerWidth<=425){
          blueboxright="8.7rem"
        } else if(innerWidth<=768){
          blueboxright="19rem"
          }else if(innerWidth<=1024){
          blueboxright="13rem"
        } else if(innerWidth<=1440){
          blueboxright="18rem"
        }  



      blueBoxAnimate.set({
        top: isMobile ? "4.8rem" : "-40px",
        left:"unset",
       
        width: blueboxWidth,
        height: bluboxHeight,
        right:blueboxright
      });


  

      let orangeBoxWidth;

          if(innerWidth<=320){
        orangeBoxWidth="11.5rem"
      } else if(innerWidth<=375){
        orangeBoxWidth="13rem"
      }else if(innerWidth<=425){
        orangeBoxWidth="14rem"
      }else if(innerWidth<=768){
        orangeBoxWidth="25.5rem"
      }else if(innerWidth <=1024){
        orangeBoxWidth="12rem"
      }else if(innerWidth <=1440){
        orangeBoxWidth="20rem"
      }

      let orangeboxRight;

         if(innerWidth<=320){
        orangeboxRight="1.4rem"
      } else if(innerWidth<=375){
        orangeboxRight="1.5rem"
      }else if(innerWidth<=425){
        orangeboxRight="1.5rem"
      }else if(innerWidth<=768){
        orangeboxRight="1.5rem"
      }else if(innerWidth <=1024){
        orangeboxRight="37rem"
      }else if(innerWidth <=1440){
        orangeboxRight="50rem"
      }

        let orangeboxBottom;



         if(innerWidth<=320){
        orangeboxBottom="11.5rem"
      } else if(innerWidth<=375){
        orangeboxBottom="11.5rem"
      }else if(innerWidth<=425){
        orangeboxBottom="11.5rem"
      }else if(innerWidth<=768){
        orangeboxBottom="11.5rem"
      }else if(innerWidth <=1024){
        orangeboxBottom="3.5rem"
      }else if(innerWidth <=1440){
        orangeboxBottom="3.5rem"
      }

        let orangeboxHeight;



         if(innerWidth<=320){
        orangeboxHeight="7.5rem"
      } else if(innerWidth<=375){
        orangeboxHeight="7.5rem"
      }else if(innerWidth<=425){
        orangeboxHeight="7.5rem"
      }else if(innerWidth<=768){
        orangeboxHeight="7.5rem"
      }else if(innerWidth <=1024){
        orangeboxHeight="26rem"
      }else if(innerWidth <=1440){
        orangeboxHeight="35rem"
      }





        orangeBoxAnimate.set({
        bottom:orangeboxBottom,
        right: orangeboxRight,
        width:orangeBoxWidth,
        left:"unset",
        height:orangeboxHeight
  
      

      });


      let purpleBoxWidth;

      if(innerWidth<=320){
        purpleBoxWidth="11rem"
      } else if(innerWidth<=375){
        purpleBoxWidth="13rem"
      }else if(innerWidth<=425){
        purpleBoxWidth="15rem"
      }else if(innerWidth<=768){
        purpleBoxWidth="26rem"
      }else if(innerWidth <=1024){
        purpleBoxWidth="19rem"
      }else if(innerWidth <=1440){
        purpleBoxWidth="27rem"
      }

      let purpleBoxHeight;
      if(innerWidth<=768){
        purpleBoxHeight="8rem"
      }else if(innerWidth <=1024){
        purpleBoxHeight="20rem"
      }else if(innerHeight <=1440){
        purpleBoxHeight="28rem"

      }


      let purpleRight ;
        if(innerWidth<=320){
        purpleRight="8.5rem"
      }else if(innerWidth<=375){
        purpleRight="10rem"
      }else if(innerWidth<=425){
        purpleRight="11.5rem"
      }else if(innerWidth <=768){
        purpleRight = "21.5rem"
      }else if(innerWidth <=1024){
        purpleRight ="16.5rem"
      }else if(innerWidth <=1440){
        purpleRight = "21rem"
      }

      purpleBoxAnimate.set({
        opacity: "1",
        scale: "1",
        bottom: "3px",
        height:purpleBoxHeight,
        width:purpleBoxWidth,
        right: purpleRight
      })



      let yellowBoxWidth;

      if(innerWidth<=320){
        yellowBoxWidth="11rem"
      }else if(innerWidth<=375){
        yellowBoxWidth="13rem"
      }else if(innerWidth <=425){
        yellowBoxWidth="14.5rem"
      }else if(innerWidth <=768){
        yellowBoxWidth="25.5rem"
      }else if(innerWidth<=1024){
        yellowBoxWidth="19rem"
      }else if(innerWidth<=1440){
        yellowBoxWidth="27rem"
      }



      yellowBoxAnimate.start({
        width:yellowBoxWidth,
        height:innerWidth <=1024  && innerWidth > 768 ? '19rem' : innerWidth<=1440 && innerWidth > 1024 ? "28rem"
        :"7.5rem",
        top:innerWidth <=1024  && innerWidth > 768  ?"10px": innerWidth > 1024 && innerWidth<=1440 ? "0.7rem": "2px",
        left:innerWidth <=1024 && innerWidth > 768 ?"16rem": innerWidth > 1024 && innerWidth<=1440 ? "21rem": "unset"


      })
    } else {
      // Reset position when scrollCount is not 1-6
      orangeBoxAnimate.start({ opacity: 0, scale: 0 });
      blueBoxAnimate.start({ opacity: 0, scale: 0 });
      yellowBoxAnimate.start({
        opacity: 0,
        scale: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      purpleBoxAnimate.start({
        opacity: 0,
        scale: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      extraBoxLeftTopAnimate.start({ opacity: 0, scale: 0 });
      extraBoxLeftBottomAnimate.start({ opacity: 0, scale: 0 });
      extraBoxRightTopAnimate.start({ opacity: 0, scale: 0 });
      extraBoxRightBottomAnimate.start({ opacity: 0, scale: 0 });
    }
  }, [scrollCount, isMobile, yellowBoxAnimate, innerWidth]);

  return (
    <div>
      {/* Square Box: Bottom Left */}
      <motion.div
        className="absolute bg-[#ff8c19] w-[11.5rem] h-[7rem] lg:h-[26rem]  lg:w-[11rem]  md:w-[350px] z-20 flex flex-col text-[#77340a] p-2 justify-around cursor-pointer hover:bg-black hover:text-white gap-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={orangeBoxAnimate}
      >
        <h1 className="text-xl md:text-3xl font-bold">Color</h1>
        <BsCircleSquare className="text-3xl md:text-7xl self-end border-none outline-none" />
      </motion.div>

      {/* Square Box: Top Right */}
      <motion.div
        className="absolute bg-[#3dd3ee] w-[11rem] h-[7rem] md:h-[7rem] lg:h-[360px] md:w-[350px] z-20 flex flex-col text-[#055463] p-4 justify-around cursor-pointer hover:bg-black hover:text-white gap-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={blueBoxAnimate}
      >
        <h1 className="text-xl md:text-3xl font-bold">Logo</h1>
        <FaDropbox className="text-3xl md:text-7xl self-start md:self-end border-none outline-none" />
      </motion.div>

      {/* Rectangular box on upper left */}
      <motion.div
        className="absolute bg-[#fad24b] z-20 p-2 md:p-4 w-[11rem] h-[7.5rem] lg:h-[19rem] lg:w-[20rem] flex flex-col gap-6 items-start cursor-pointer text-[#694605] hover:text-white hover:bg-black"
        initial={{ opacity: 0, scale: 0 }}
        animate={yellowBoxAnimate}
        id="yellow_box"
      >
        <h1 className="text-xl md:text-3xl font-bold">Voice & Tone</h1>
        <div className="text-2xl lg:text-7xl">
          <div className="flex">
            <SiComma className="scale-y-[-1] scale-x-[-1] font-bold" />
            <SiComma className="scale-y-[-1] scale-x-[-1] font-bold" />
          </div>
        </div>
        <div className="flex self-end px-1 -mt-8 sm:-mt-12">
          <SiComma className="text-2xl lg:text-4xl" />
          <SiComma className="text-2xl lg:text-4xl" />
        </div>
      </motion.div>

      {/* Rectangular box on down right */}
      <motion.div
        className="absolute bg-[#892055] md:p-4 w-[11rem] h-[8rem] md:h-[8rem] lg:h-[19rem]  lg:w-[19.5rem] lg:right-[16rem] md:w-[350px] text-[#ffafa5] z-20 flex flex-col p-4 justify-around cursor-pointer hover:bg-black hover:text-white gap-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={purpleBoxAnimate}
      >
        <h1 className="text-3xl font-bold">Imagery</h1>
        <AiFillPicture className="text-9xl self-end border-none outline-none" />
      </motion.div>

      {/* Extra boxes */}
      <motion.div
        className="absolute bg-[#283750] z-20 w-[8rem] xl:w-[20rem] xl:h-[35rem] xl:left-[21rem]  h-[7.5rem] lg:h-[27rem] lg:w-[15rem] p-2 md:p-4 text-[#b4c8e1] flex flex-col items-center justify-around cursor-pointer hover:bg-black hover:text-white gap-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={extraBoxLeftTopAnimate}
      >
        <h1 className="text-xl lg:text-3xl font-bold">FrameWork</h1>
        <FaGreaterThan className="text-2xl md:text-9xl" />
      </motion.div>

      <motion.div
        className="absolute bg-[#b4dc19] h-[10rem] lg:h-[18rem] w-[7.6rem] lg:w-[15rem] md:w-[31rem] z-20 text-[#2d683b] hover:text-white hover:bg-black cursor-pointer p-2 md:p-4 flex flex-col justify-between"
        initial={{ opacity: 0, scale: 0 }}
        animate={extraBoxLeftBottomAnimate}
      >
        <h1 className="text-lg md:text-4xl font-bold">Iconography</h1>
        <FaUnlockKeyhole className="text-3xl md:text-6xl self-end" />
      </motion.div>

      <motion.div
        className="absolute bg-[#fa551e] h-[11rem] lg:h-[17rem] w-[8rem] lg:w-[15.5rem] z-20 text-[#4e0119] hover:text-white hover:bg-black cursor-pointer p-2 md:p-4 flex flex-col justify-between"
        initial={{ opacity: 0, scale: 0 }}
        animate={extraBoxRightTopAnimate}
      >
        <h1 className="text-sm md:text-4xl font-bold">Typography</h1>
        <FaAmilia className="text-3xl md:text-6xl self-end" />
      </motion.div>

      <motion.div
        className="absolute bg-[#c8aff0] w-[8rem] xl:h-[56vh] xl:w-[20rem] h-[8rem] lg:h-[55vh] md:w-[250px] z-20 text-[#682760] hover:text-white hover:bg-black cursor-pointer p-4 flex flex-col justify-between"
        initial={{ opacity: 0, scale: 0 }}
        animate={extraBoxRightBottomAnimate}
      >
        <h1 className="text-2xl md:text-4xl font-bold">Motion</h1>
        <FaBezierCurve className="text-4xl md:text-6xl self-end" />
      </motion.div>
    </div>
  );
};

export default OuterBoxes;
