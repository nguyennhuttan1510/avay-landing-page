import classNames from "classnames";
import Image from "next/image";
import React from 'react';
import BaseButton from "../Button";
import styles from './styles.module.scss'
const RegisterCardImage = (props) => {
  const {imageRight=false, title, sub, image, classNameImages, classNameRoot, handleScrollToView} = props
  return (
      <div className={classNames(styles.register_card_image, classNameRoot,'h-[751px] lg:h-auto')}>
      <div className={classNames(classNameImages,{[styles.image_right]: imageRight} )}>
        {image || (
          <Image src="/images/image_card_1.png" alt="card_register" width={382} height={355}/>
        )}
        
      </div>
      <div className={styles.wrap_content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{sub}</div>
        <div className={styles.action}>
          <div>
            <Image src="/icons/icon_back.svg" alt="back" width={28} height={24} />
          </div>
          <BaseButton className='button__underline underline--success' onClick={()=>{handleScrollToView('form_register')}}>Đăng ký</BaseButton> 
        </div>
      </div>
    </div>
  );
};

export default RegisterCardImage;