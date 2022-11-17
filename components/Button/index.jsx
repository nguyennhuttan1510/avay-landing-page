import classNames from "classnames";
import React from 'react';
const BaseButton = ({children, text, className, underline, onClick=()=>{}, ...rest}) => {
  return (
    <div onClick={onClick} className={classNames(className, 'button hover:opacity-80')} {...rest}>
      {children || text}
    </div>
  );
};

export default BaseButton;