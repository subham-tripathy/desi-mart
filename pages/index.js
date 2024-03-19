import AllCategory from './Components/AllCategory'
import Carousel from './Components/Carousel'
import TodayDeal from './Components/TodayDeal'
import React from 'react'

const index = () => {
  return (
    <main>
      <Carousel/>
      <AllCategory/>
      <TodayDeal/>
    </main>
  )
}

export default index