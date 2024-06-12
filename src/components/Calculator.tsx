'use client'

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Ingredient from '@components/Ingredient';
import calculator_bg from '@images/calculator/calculator-bg.svg';
import kcal_icon from '@images/calculator/kcal.svg';
import min_icon from '@images/calculator/min.svg';
import gram_icon from '@images/calculator/gram.svg';
import bun_base from '@images/burger/bun-base-shadow.png';

// Інгредієнти
import ingredient_cutlet from '@images/ingridients/cutlet.png';
import ingredient_mayo from '@images/ingridients/mayo.png';
import ingredient_onion from '@images/ingridients/onion.png';
import ingredient_tomato from '@images/ingridients/tomato.png';
import ingredient_cucumber from '@images/ingridients/cucumber.png';
import ingredient_cheese from '@images/ingridients/cheese.png';
import ingredient_salad from '@images/ingridients/salad.png';
import ingredient_bun from '@images/ingridients/bun.png';

// Бургер зображення
import burger_topBun from '@images/burger/bun-top.png';
import burger_middleBun from '@images/burger/bun-middle.png';
import burger_cucumber from '@images/burger/cucumber.png';
import burger_tomato from '@images/burger/tomato.png';
import burger_cutlet from '@images/burger/cutlet.png';
import burger_onion from '@images/burger/onion.png';
import burger_cheese from '@images/burger/cheese.png';
import burger_salad from '@images/burger/salad.png';
import burger_mayo from '@images/burger/mayo.png';

const ingredients = [
  { id: 1, name: 'Cutlet', image: ingredient_cutlet, kcal: 12, time: 6, gram: 7, price: 2, burgerImage: burger_cutlet, bottom: -70 },
  { id: 2, name: 'Mayo', image: ingredient_mayo, kcal: 12, time: 6, gram: 7, price: 0.2, burgerImage: burger_mayo, bottom: -70},
  { id: 2, name: 'Onion', image: ingredient_onion, kcal: 12, time: 6, gram: 7, price: 0.2, burgerImage: burger_onion, bottom: -50 },
  { id: 3, name: 'Tomato', image: ingredient_tomato, kcal: 12, time: 6, gram: 7, price: 0.2, burgerImage: burger_tomato, bottom: -105 },
  { id: 4, name: 'Cucumber', image: ingredient_cucumber, kcal: 8, time: 5, gram: 4, price: 0.2, burgerImage: burger_cucumber, bottom: -145 },
  { id: 5, name: 'Cheese', image: ingredient_cheese, kcal: 12, time: 6, gram: 7, price: 1, burgerImage: burger_cheese, bottom: -150 },
  { id: 6, name: 'Salad', image: ingredient_salad, kcal: 12, time: 6, gram: 7, price: 1, burgerImage: burger_salad, bottom: -85 },
  { id: 7, name: 'Bun', image: ingredient_bun, kcal: 12, time: 6, gram: 7, price: 1, burgerImage: burger_middleBun, bottom: -80 },
];

interface IngredientProps {
  id: number;
  name: string;
  image: StaticImageData;
  kcal: number;
  time: number;
  gram: number;
  price: number;
  burgerImage: StaticImageData;
  bottom?: number;
}


function Calculator() {
  const [burgerIngredients, setBurgerIngredients] = useState<IngredientProps[]>([

  ]);

  const addIngredientToBurger = (ingredient: IngredientProps) => {
    setBurgerIngredients((prevIngredients) => [...prevIngredients, ingredient,]);
  };

  return (
    <section id="calculator" className="calculator pb-[92px]">
      <div className="container">
        <div className="flex justify-center">
          <div className="mt-[164px] text-7xl font-medium text-base_black mb-4">
            Make <br /> Your Burger
          </div>
          <div className="ml-14 mr-10 relative">
            <Image src={calculator_bg} alt="bg" />
            <div className="burger flex flex-col justify-center items-center absolute bottom-0 left-4">
              
              <Image src={burger_topBun} className={`-mb-10 z-50 ${burgerIngredients.length > 2 ? "opacity-100" : "opacity-0"}`} alt="top" />

                <div className="flex justify-center items-center flex-col-reverse">
                  {burgerIngredients.map((ingredient, index) => {
                  // style={{ bottom: `${index * 10}px` }}
                  let mb;
                  if(ingredient.bottom && index !== 0) {
                    mb = ingredient.bottom 
                  } else {
                    mb = -25
                  }
                  if(index == 0) {
                    mb = 50 
                  }

                  return (
                    <div key={index} className={`w-full`} style={
                      { marginBottom: `${mb}px`, zIndex: `${index + 1}` }
                    }>
                      <Image src={ingredient.burgerImage} alt={ingredient.name} />
                    </div>
                  )
                  })}
                </div>
              <Image className='absolute bottom-0' src={bun_base} alt="base" />
            </div>
          </div>
          <div className="mt-[143px]">
            <div className="text-base_black text-4xl mb-6">Summary</div>
            <div className="flex items-center">
              <div className="flex items-center bg-[#F5F5FF] px-4 py-3 rounded-full mr-3">
                <Image className="mr-2" src={kcal_icon} alt="kcal" />
                50 kcal
              </div>
              <div className="flex items-center bg-[#F5F5FF] px-4 py-3 rounded-full mr-3">
                <Image className="mr-2" src={min_icon} alt="min" />
                0 min
              </div>
              <div className="flex items-center bg-[#F5F5FF] px-4 py-3 rounded-full">
                <Image className="mr-2" src={gram_icon} alt="gram" />
                20 g
              </div>
            </div>
            <div className="mt-[74px] relative">
              <div className="absolute text-4xl text-[#FFF] font-extrabold px-6 py-3 rounded-full bg-[#5243C2] -top-4 -left-1/2">
                $0.00
              </div>
              <div className="text-base_black font-light text-2xl">
                Build a <span className="text-base_red font-bold">$5</span> Burger and Get a Gift
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <button className="text-[#FFF] text-4xl font-extrabold px-6 py-3 bg-[#BE2B20] rounded-full disabled:bg-[#F5F5FF]">
            Order
          </button>
        </div>
        <div className="flex justify-between">
          {ingredients.map((ingredient) => (
            <Ingredient key={ingredient.id} ingredient={ingredient} onClick={() => addIngredientToBurger(ingredient)} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Calculator;
