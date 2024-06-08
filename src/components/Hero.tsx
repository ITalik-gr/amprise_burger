'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Image from 'next/image';

import burger_bg from '@images/hero/burger-bg.svg';

import bun_top from '@images/burger/bun-top.png'
import cucumber from '@images/burger/cucumber.png'
import tomato from '@images/burger/tomato.png'
import tomato_1 from '@images/burger/tomato-1.png'
import tomato_2 from '@images/burger/tomato-2.png'
import cutlet from '@images/burger/cutler.png';
import onion from '@images/burger/onion.png';
import onion_1 from '@images/burger/onion-1.png'
import onion_2 from '@images/burger/onion-2.png'
import cheese from '@images/burger/cheese.png';
import salad from '@images/burger/salad.png';
import mayo from '@images/burger/mayo.png';
import bun_base from '@images/burger/bun-base.png';


const ingredients = [
  { id: 10, image: bun_top, initial: { y: 490, x: 70, rotate: 35, opacity: 0 }, finalY: 710 },
  { id: 9, image: mayo, initial: { y: 430, x: 14, rotate: 25, opacity: 0 }, finalY: 670 },
  { id: 8, image: cucumber, initial: { y: 335, x: 45, rotate: 14, opacity: 0 }, finalY: 520 },
  { id: 7, image: tomato, initial: { y: 260, x: 65, rotate: -8, opacity: 0 }, finalY: 370 },
  { id: 6, image: cutlet, initial: { y: 180, x: -90, rotate: 9, opacity: 0 }, finalY: 270 },
  { id: 5, image: onion, initial: { y: 150, x: -40, rotate: -22, opacity: 0 }, finalY: 220 },
  { id: 4, image: cheese, initial: { y: 190, x: 45, rotate: -15, opacity: 0 }, finalY: 185 },
  { id: 3, image: salad, initial: { y: 90, x: 13, rotate: 3, opacity: 0 }, finalY: 65 },
  { id: 2, image: mayo, initial: { y: 55, x: 60, rotate: -20, opacity: 0 }, finalY: -20 },
  { id: 1, image: bun_base, initial: { y: 0, x: 60, rotate: -20, opacity: 0 }, finalY: -100 }
];

function Hero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; currentTarget: any; }) => {
      const { clientX, currentTarget } = event;
      const { left, right } = currentTarget.getBoundingClientRect();
  
      // Обчислюємо максимальну ефективну ширину для прогресу
      const effectiveWidth = right - left - 300;
      // Визначаємо, де знаходиться миша відносно цієї ширини
      const relativeX = clientX - left;
      
      // Обчислюємо прогрес, обмежуючи його між 0 і 1
      const newProgress = Math.min(Math.max(relativeX / effectiveWidth, 0), 1);
  
      setProgress(newProgress);
    };
  
    const section = document.getElementById('hero-section');
    section?.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      section?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  

  console.log(progress);
  

  return (
    <section id='hero-section' className="pt-[100px] hero-section">
      <div className="container">
        {/* wrap */}
        <div className="flex justify-between items-center">

          {/* text block */}
          <div className="">
            <h1 className="text-7xl font-medium text-base_black mb-4">Make <br /> Your Burger</h1>
            <p className="max-w-[482px] text-gray text-xl">Parallax screen. Burger ingredients and emojis moving depending on the position of the mouse pointer.</p>
          </div>

          {/* burger block */}
          <div id='burger-block' className="relative burger-block">
            <Image className='' src={burger_bg} alt='Burger bg' />
            
            <div className="burger absolute bottom-10 left-20 flex flex-col justify-center items-center">
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={ingredient.id}
                  className='will-change-transform'
                  custom={progress}
                  initial={ingredient.initial}
                  animate={{
                    y: ingredient.initial.y + progress * (ingredient.finalY - ingredient.initial.y),
                    x: ingredient.initial.x * (1 - progress),
                    rotate: ingredient.initial.rotate * (1 - progress),
                    opacity: 1,
                  }}
                  style={{zIndex: `${ingredient.id}`}}
                  // style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  <Image src={ingredient.image} alt="ingridient" />
                </motion.div>
              ))}
            </div>

            {/* burger */}
            {/* <div className="flex flex-col items-center justify-center absolute bottom-5 left-20">
              <Image src={bun_top} alt='Bun top' />
              <Image src={mayo} alt='Mayo' />
              <Image src={salad} alt='Salad' />
              <Image src={cucumber} alt='Cucumber' />
              <div className="tomato flex items-center">
                <Image className='translate-x-12' src={tomato_1} alt='Tomato' />
                <Image className='-translate-x-12' src={tomato_2} alt='Tomato' />
              </div>
              <Image src={cutlet} alt='Cutlet' />
              <div className="onion flex items-center">
                <Image className='translate-x-14' src={onion_1} alt='Onion' />
                <Image className='-translate-x-14' src={onion_2} alt='Onion' />
              </div>
              <Image src={cheese} alt='Cheese' />
              <Image src={salad} alt='Salad' />
              <Image src={mayo} alt='Mayo' />
              <Image src={bun_base} alt='Bun base' />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

