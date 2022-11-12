import classNames from 'classnames';
import Image from "next/image";
import React, { useState } from 'react';
// import './styles.scss'

const SelectField = ({
  onChange,
  options = [],
  className
}) => {
  const [open, setOpen] = useState(false)
  const [currentOption, setCurrentOption] = useState(null)

  const handleSelect = (option) => {
    onChange(option)
    setOpen(prev => !prev)
    setCurrentOption(option)
  }
  return (  
    <div className='selection'>
    <div className='field_input h-[24px]' onClick={()=>{setOpen(prev => !prev)}}>
      <div className='flex justify-between gap-x-2'><div  className={className}>{currentOption?.title }</div><div><Image src='/icons/dropdown_icon.svg' alt='icon' width={12} height={6} /></div></div>
    </div>
    <div className={classNames('flex flex-col wrap_option z-50',{'hidden': !open})}>
      {options.map(option => (
        <div key={option.value} className={classNames('option cursor-pointer', {'bg-gray': currentOption?.value===option.value})} onClick={()=>{handleSelect(option)}}>{option.title}</div>
      ))}
    </div>
    </div>
  );
};

export default SelectField;