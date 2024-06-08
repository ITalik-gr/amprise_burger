'use client'

import Image, { StaticImageData } from 'next/image';

import minus from '@images/minus.svg'
import plus from '@images/plus.svg'
import { useState } from 'react';

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
  ingridient: IngredientProps;
}

const Ingredient: React.FC<IngredientComponentProps> = ({ ingridient }) => {

  const [count, setCount] = useState(0)

  // const [image, kcal, time, gram, price] = ingridient;

  return (
    <div className='border border-[#F0F7FA] bg-[#FFF] rounded-[20px] w-[140px] h-[180px] flex flex-col justify-center items-center '>
      <div className="min-h-[60px] mb-3 flex items-center justify-center">
        <Image src={ingridient.image} alt="Ingridient" className='' />
      </div>
      

      <div className="text-sm text-base_black font-medium mb-3">
        {ingridient.name}
      </div>

      <div className="counter flex justify-center items-center">
        <div className="cursor-pointer size-8 rounded-full bg-[#F5F5FF] flex justify-center items-center">
          <Image src={minus} alt='Minus' />
        </div>

        <div className="text-base text-base_black font-medium mx-3">{count}</div>

        <div className="cursor-pointer size-8 rounded-full bg-[#F5F5FF] flex justify-center items-center">
          <Image src={plus} alt='plus' />
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
