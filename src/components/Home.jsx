import React from 'react'
import RecipeSlider from './RecipeSlider'
import TrendingRecipe from './TrendingRecipe'
import CategorySelection from './CategorySelection'
import { API_URL } from './useFetch'
const Home = () => {
  return (
    <>
    <main className='max-w-8xl mx-auto x-4 sm:px-6 font-sans text-gray'>
        <RecipeSlider title={"Staff Curated Pick"} fetchUrl={`${API_URL}search.php?f=c`}/>
        <TrendingRecipe title={"Quick & Easy Meals"} fetchUrl={`${API_URL}filter.php?a=Canadian`}/>
        <CategorySelection/>
    </main>
    </>
  )
}

export default Home