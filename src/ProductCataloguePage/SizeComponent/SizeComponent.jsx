import React from 'react'
import Style from './SizeComponent.module.css'
function SizeComponent({setSize, onClick}) {
  return (
    <div onClick={onClick} className={Style.SizeContainer}>
        <label className={Style.SizeLabel}>{setSize}</label>
    </div>
  )
}

export default SizeComponent