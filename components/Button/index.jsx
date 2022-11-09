import classNames from "classnames";
import React from 'react';
const BaseButton = ({children, text, className, underline, onClick=()=>{}}) => {
  return (
    <div onClick={onClick} className={classNames(className, 'button')}>
      {children || text}
    </div>
  );
};

export default BaseButton;