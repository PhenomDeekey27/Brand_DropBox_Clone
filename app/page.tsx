"use client";

import CenterBox from "@/Components/CenterBox";
import OuterBoxes from "@/Components/OuterBoxes";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const [scrollCount, setScrollCount] = useState(0);
  const containerControls = useAnimation();
   const [isMobile, setIsMobile] = useState(false);
   const [innerWidth, setinnerWidth] = useState(typeof window!== "undefined" ? window.innerWidth : 0)

     // Detect screen size
     useEffect(() => {
       const checkSize = () => {
         const mobile = window.innerWidth <= 768;
         setIsMobile(mobile);
         console.log("window.innerWidth:", window.innerWidth);
         setinnerWidth(window.innerWidth)
         const innerHeight = window.innerHeight;
         console.log(innerHeight,"inh")
         console.log("Detected mobile:", mobile);
       };
   
       checkSize();
   
       window.addEventListener("resize", checkSize);
       return () => window.removeEventListener("resize", checkSize);
     }, []);



  // useEffect(() => {
  //   if (scrollCount === 4) {
  //     containerControls.start({
  //       scale: window.innerWidth < 640 ? 0.9 : 0.8, // Smaller scale on mobile
  //       transition: { duration: 0.6, ease: "easeInOut" },
  //     });
  //   } else {
  //     containerControls.start({
  //       scale: 1,
  //       transition: { duration: 0.6, ease: "easeInOut" },
  //     });
  //   }
  // }, [scrollCount, containerControls]);

  return (
    <motion.div
      className="relative min-h-screen w-full overflow-hidden origin-center"
      animate={containerControls}
    >
      <CenterBox isMobile={isMobile} scrollCount={scrollCount} setScrollCount={setScrollCount} innerWidth={innerWidth} />
      <OuterBoxes scrollCount={scrollCount} isMobile={isMobile} innerWidth={innerWidth} />
    </motion.div>
  )
}