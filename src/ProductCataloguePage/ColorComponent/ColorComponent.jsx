import React from 'react'
import Style from './ColorComponent.module.css'
function ColorComponent({fillColor, onClick}) {
  return (
    <div onClick={onClick} style={{backgroundColor:fillColor}}  className={Style.colorContainer}></div>
  )
}

export default ColorComponent