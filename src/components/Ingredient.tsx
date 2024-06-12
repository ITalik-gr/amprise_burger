'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';


import minus from '@images/minus.svg'
import plus from '@images/plus.svg'

interface IngredientProps {
  id: number;
  name: string;
  image: StaticImageData;
  kcal: number;
  time: number;
  gram: number;
  price: number;
}

interface IngredientComponentProps {
  ingredient: IngredientProps;
  onClick: () => void;
}

const Ingredient: React.FC<IngredientComponentProps> = ({ ingredient, onClick }) => {
  const [count, setCount] = useState(0);

  const ingredientToggle = (cont: string) => {
    if (cont === 'minus') {
      if (count - 1 < 0) return;
      setCount((prev) => prev - 1);
    } else if (cont === 'plus') {
      if (count + 1 > 20) return;
      setCount((prev) => prev + 1);
    } else {
      console.log('Error');
    }
  };

  return (
    <div
      className="border border-[#F0F7FA] bg-[#FFF] rounded-[20px] w-[140px] h-[180px] flex flex-col justify-center items-center"
      onClick={onClick}
    >
      <div className="min-h-[60px] mb-3 flex items-center justify-center">
        <Image src={ingredient.image} alt="Ingredient" />
      </div>
      <div className="text-sm text-base_black font-medium mb-3">{ingredient.name}</div>
      <div className="counter flex justify-center items-center">
        <div onClick={() => ingredientToggle('minus')} className="cursor-pointer size-8 rounded-full bg-[#F5F5FF] flex justify-center items-center">
          <Image src={minus} alt="Minus" />
        </div>
        <div className="text-base text-base_black font-medium mx-3">{count}</div>
        <div onClick={() => ingredientToggle('plus')} className="cursor-pointer size-8 rounded-full bg-[#F5F5FF] flex justify-center items-center">
          <Image src={plus} alt="plus" />
        </div>
      </div>
    </div>
  );
};

export default Ingredient;


