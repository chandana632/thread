import * as React from 'react';
import Style from './Rating.module.css';

export default function BasicRating({rate}) {
  const rateFill = rate * 100;
  let goldRate = "gold";

  if(rate==0) goldRate = "#ddd";
  else goldRate = "gold";
  return (
   
    <div className={Style.star} style={{ background: `linear-gradient(to right, ${goldRate} ${rateFill}%, #ddd ${100-rateFill}%)`}}></div>
     
  
  );
}
