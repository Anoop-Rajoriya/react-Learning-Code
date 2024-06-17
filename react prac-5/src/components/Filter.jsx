import React from 'react'
import downArrow from '../assets/downArrow.svg'

export default function Filter() {
  return (
    <div id="filterContainer">
      <div id='filter'>filter <span><img src={downArrow} alt="" /></span></div>
      <div id='filterOption'>
      </div>
    </div>
  )
}
