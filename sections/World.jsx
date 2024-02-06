'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView='show' viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
      <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className="relative mt-[68px] flex w-full h-[550px]">
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#8e95a8]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute bottom-[12rem] left-[13rem] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#8e95a8] lg:block hidden">
          <img src="/world-01.png" alt="World" className="w-full h-full rounded-[24px]" />
          <p className="absolute text-[18px] text-white bottom-4 left-5">The Upside Down</p>
        </div>

        <div className="absolute top-[4rem] right-[11rem] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#8e95a8] lg:block hidden">
          <img src="/world-02.png" alt="World" className="w-full h-full rounded-[24px]" />
          <p className="absolute text-[18px] text-white bottom-4 left-5">Hawkins Labs</p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
