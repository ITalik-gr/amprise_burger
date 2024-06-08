
import Image from 'next/image'
import Ingredient from '@components/Ingredient'

import calculator_bg from '@images/calculator/calculator-bg.svg'

import kcal_icon from '@images/calculator/kcal.svg'
import min_icon from '@images/calculator/min.svg'
import gram_icon from '@images/calculator/gram.svg'

import ketchup_gift from '@images/calculator/ketchup.png'

import bun_base from '@images/burger/bun-base-shadow.png'

// ingridients
import ingredient_cutlet from '@images/ingridients/cutlet.png'
import ingredient_mayo from '@images/ingridients/mayo.png'
import ingredient_onion from '@images/ingridients/onion.png'
import ingredient_tomato from '@images/ingridients/tomato.png'
import ingredient_cucumber from '@images/ingridients/cucumber.png'
import ingredient_cheese from '@images/ingridients/cheese.png'
import ingredient_salad from '@images/ingridients/salad.png'
import ingredient_bun from '@images/ingridients/bun.png'


const ingredients = [
  {id: 1, name: "Cutlet", image: ingredient_cutlet, kcal: 12, time: 6, gram: 7, price: 2},
  {id: 2, name: "Mayo", image: ingredient_mayo, kcal: 12, time: 6, gram: 7, price: 0.2},
  {id: 3, name: "Onion", image: ingredient_onion, kcal: 12, time: 6, gram: 7, price: 0.2,},
  {id: 4, name: "Tomato", image: ingredient_tomato, kcal: 12, time: 6, gram: 7, price: 0.2},
  {id: 5, name: "Cucumber", image: ingredient_cucumber, kcal: 8, time: 5, gram: 4, price: 0.2},
  {id: 6, name: "Cheese", image: ingredient_cheese, kcal: 12, time: 6, gram: 7, price: 1},
  {id: 7, name: "Salad", image: ingredient_salad, kcal: 12, time: 6, gram: 7, price: 1},
  {id: 8, name: "Bun", image: ingredient_bun, kcal: 12, time: 6, gram: 7, price: 1},
]

function Calculator() {
  return (
    <section id="calculator" className="calculator pb-[92px]">
      <div className="container">
        {/* text, burger, summary */}
        <div className="flex justify-center">
          {/* text */}
          <div className="mt-[164px] text-7xl font-medium text-base_black mb-4">Make <br /> Your Burger</div>

          {/* burger */}
          <div className="ml-14 mr-10 relative">
            <Image src={calculator_bg} alt="bg"/>

            <div className="burger absolute bottom-0 left-4">

              <Image src={bun_base} alt='base'/>
            </div>
          </div>

          {/* summary */}
          <div className="mt-[143px]">
            <div className="text-base_black text-4xl mb-6">Summary</div>
            {/* burger info (kcal, min, g) */}
            <div className="flex items-center">
              <div className="flex items-center bg-[#F5F5FF] px-4 py-3 rounded-full mr-3">
                <Image className='mr-2' src={kcal_icon} alt="kcal"/>
                50 kcal
              </div>
              <div className="flex items-center bg-[#F5F5FF] px-4 py-3 rounded-full mr-3">
                <Image className='mr-2' src={min_icon} alt="min"/>
                0 min
              </div>
              <div className="flex items-center bg-[#F5F5FF] px-4 py-3 rounded-full">
                <Image className='mr-2' src={gram_icon} alt="gram"/>
                20 g
              </div>
            </div>
            {/* ketchup */}
            <div className="mt-[74px] relative">
              {/* price */}
              <div className="absolute text-4xl text-[#FFF] font-extrabold px-6 py-3 rounded-full bg-[#5243C2] -top-4 -left-1/2">
                $0.00
              </div>
              {/* not */}
              <div className="text-base_black font-light text-2xl">Build a <span className='text-base_red font-bold'>$5</span> Burger and Get a Gift</div>

              {/* gift */}
              {/* <div className="">
                <span className='text-4xl text-base_red font-extrabold mb-2'>+ Gift</span>
                <div className="text-2xl text-base_black font-normal mb-7 ml-7">Tomato Ketchup <span className='ml-3 text-[#949BA6]'>0.2 oz</span></div>
                <Image src={ketchup_gift} alt="ketchup" width={172} className='ml-[162px]' />
              </div> */}

            </div>
          </div>
        </div>

        {/* order button */}
        <div className="flex justify-center mt-4 mb-6">
          <button 
            className="text-[#FFF] text-4xl font-extrabold px-6 py-3 bg-[#BE2B20] rounded-full disabled:bg-[#F5F5FF]">
            Order
          </button>
        </div>

        {/* Ingridients */}
        <div className="flex justify-between">
          {ingredients.map((ingredient) => (
            <Ingredient key={ingredient.id} ingridient={ingredient} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Calculator