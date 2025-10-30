import React from 'react'
import Style from './RatingSlide.module.css'
function RatingSlide() {
  return (
    <div className={Style.slideBarContainer}>
        <label>5 star</label>
 <div className={Style.slidebar}>
        <div className={Style.yellow}></div>
        <div className={Style.grey}></div>
    </div>
    </div>
   
  )
}

export default RatingSlide