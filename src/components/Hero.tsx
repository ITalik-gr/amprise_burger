'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import Image from 'next/image';

import burger_bg from '@images/hero/burger-bg.svg';

import bun_top from '@images/burger/bun-top.png'
import cucumber from '@images/burger/cucumber.png'
import tomato from '@images/burger/tomato.png'
import tomato_1 from '@images/burger/tomato-1.png'
import tomato_2 from '@images/burger/tomato-2.png'
import cutlet from '@images/burger/cutlet.png';
import onion from '@images/burger/onion.png';
import onion_1 from '@images/burger/onion-1.png'
import onion_2 from '@images/burger/onion-2.png'
import cheese from '@images/burger/cheese.png';
import salad from '@images/burger/salad.png';
import mayo from '@images/burger/mayo.png';
import bun_base from '@images/burger/bun-base.png';

import like from '@images/emoji/like.png'
import fire from '@images/emoji/fire.png'
import party from '@images/emoji/party.png'
import love from '@images/emoji/love.png'




const ingredients = [
  { id: 10, image: bun_top, initial: { y: 540, x: 70, rotate: 35 }, finalY: 710 },
  { id: 9, image: mayo, initial: { y: 480, x: 14, rotate: 25 }, finalY: 670 },
  { id: 8, image: cucumber, initial: { y: 370, x: 45, rotate: 12 }, finalY: 520 },
  { id: 7, image: tomato, initial: { y: 274, x: 11, rotate: 6 }, finalY: 370 },
  { id: 6, image: cutlet, initial: { y: 200, x: 64, rotate: -11 }, finalY: 270 },
  { id: 5, image: onion, initial: { y: 190, x: -40, rotate: -22 }, finalY: 220 },
  { id: 4, image: cheese, initial: { y: 190, x: 45, rotate: -15 }, finalY: 185 },
  { id: 3, image: salad, initial: { y: 90, x: 13, rotate: 3 }, finalY: 65 },
  { id: 2, image: mayo, initial: { y: 55, x: 60, rotate: -20 }, finalY: -20 },
  { id: 1, image: bun_base, initial: { y: 0, x: 60, rotate: -20 }, finalY: -100 }
];

const small_ingredients = [
  {id: 1, image: tomato_1, initial: { y: 40, x: 20, rotate: 35, opacity: 1 }, finalX: 150, finalY: 100, width: 85, 
  style: "-left-[10px] top-[160px]" },
  {id: 2, image: onion_2, initial: { y: 40, x: 20, rotate: 15, opacity: 1 }, finalX: -245, finalY: 90, width: 113, 
  style: "-right-[20px] top-[80px]" },
  {id: 4, image: onion_1, initial: { y: 20, x: 20, rotate: 5, opacity: 1 }, finalX: -110, finalY: -130, width: 166, 
  style: "right-[60px] bottom-[180px] z-[5]" }
]

const emoji = [
  {id: 1, image: like, width: 72, initial: { y: 20, x: 7, rotate: -3, scale: 0.9}, finalY: 10, style: 'left-[80px] bottom-[100px]'},
  {id: 2, image: love, width: 32, initial: { y: 12, x: 3, rotate: -8, scale: 0.9}, finalY: 10, style: 'left-[80px] top-[150px]'},
  {id: 3, image: fire, width: 72, initial: { y: 9, x: 1, rotate: 4, scale: 0.9}, finalY: 10, style: 'right-[90px] top-[110px]'},
  {id: 4, image: party, width: 32, initial: { y: 16, x: 8, rotate: 6, scale: 0.9}, finalY: 10, style: 'right-[40px] bottom-[280px]'},
]

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
  


  return (
    <section id='hero-section' className="pt-[170px] mb-[150px] hero-section overflow-hidden">
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
            {/* bg */}
            <Image src={burger_bg} alt='Burger bg' />

            {/* button */}
            <Link href="#calculator" className="flex justify-center items-center text-center text-[#FFF] uppercase text-sm font-black size-[90px] bg-[#5243C2] rounded-full top-[380px] -left-5 absolute">
              make <br /> burger
            </Link>
            
            {/* burger */}
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

            {/* emoji */}
            {emoji.map((item, i) => (
              <motion.div
                key={item.id}
                className={`absolute will-change-transform ${item.style}`}
                custom={progress}
                initial={item.initial}
                animate={{
                  y: item.initial.y + progress * (item.finalY - item.initial.y),
                  x: item.initial.x * (1 - progress),
                  rotate: item.initial.rotate * (1 - progress),
                  scale: 1
                }}
                >
                <Image src={item.image} alt="emoji" width={item.width} />
              </motion.div>
            ))}

            {/* small ingridients */}
            {small_ingredients.map((item) => (
              <motion.div
                key={item.id}
                className={`will-change-transform absolute ${item.style}`}
                custom={progress}
                initial={item.initial}
                animate={{
                  y: item.initial.y + progress * (item.finalY - item.initial.y),
                  x: item.initial.x + progress * (item.finalX - item.initial.x),
                  rotate: item.initial.rotate * (1 - progress),
                  // opacity: item.initial.opacity * (0.83 - progress),
                  opacity: 1,
                }}
              >
                <Image width={item.width} src={item.image} alt="small ingridient" />
              </motion.div>
            ))}

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

