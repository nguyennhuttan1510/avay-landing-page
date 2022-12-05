import classNames from "classnames";
import Image from "next/image";
import React, { useState } from 'react';
import Slider from "react-slick";
import BaseButton from "../../../components/Button";
import styles from './styles.module.scss'
const Header = ({setOpenModalInfo}) => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const handleOpenMenuMobile = () => {
    setOpenMenuMobile(prev => !prev)
  }

  const settingsBanner = {
    dots: true,
    rows: 1,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    // dotsClass: 'slick-dots-custom',
    autoplaySpeed: 5000,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  const handleScrollToView = (elementID) => {
    console.log("🚀 ~ file: index.jsx:28 ~ handleScrollToView ~ elementID", elementID)
    if(!elementID) return
    const element = document.getElementById(elementID);
    element.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className={classNames(styles.wrap_banner)}>
      <div className={classNames(styles.back_effect, styles.left)}></div>
      <div className={classNames(styles.back_effect, styles.right)}></div>
      <div className={classNames(styles.container_bg) }>
      <div className={classNames(styles.container,'container flex')}>
      <div className={styles.leftSite}>
        <span className={styles.logo}>
          <Image src="/logos/logo.png" alt="Logo" width={194} height={60} />
        </span>
      </div>
      <div className={styles.rightSite}>
        <div className={styles.menu}>
          <div className={styles.menu_item} onClick={()=>{setOpenModalInfo(prev => !prev)}}>Về Avay</div>
          <div className={styles.menu_item} onClick={()=>{handleScrollToView('process_element')}}>Quy trình</div>
          <div className={styles.menu_item}>
            <a href="https://avay.vn/blog/">
              Blog
            </a>
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles.contact}>
            <div>
              <Image src='/icons/call_icon.svg' alt='call_icon' width={16} height={16} />
            </div>
            <div><a href="tel:02871082829">Hotline</a></div>
          </div>
          <BaseButton className='success' onClick={()=>{handleScrollToView('form_register')}}>Đăng ký</BaseButton>
        </div>
      </div>
    </div>
    </div>
    <div className={styles.menu_mobile} >
      <div><Image src='/logos/logo.png' alt='logo' width={93} height={28}/></div><div style={{cursor: 'pointer'}} onClick={handleOpenMenuMobile}><Image src='/icons/menu_icon.svg' alt="icon_back" width={24} height={24}/></div>
      <div className={classNames(styles.menu, {[styles.showMenu]: openMenuMobile})}>
        <div className={styles.item} onClick={()=>{handleScrollToView('about_element')}}>Về Avay</div>
        <div className={styles.item} onClick={()=>{handleScrollToView('process_element')}}>Quy trình</div>
        <div className={styles.item}>
          <a href="https://avay.vn/blog/">
            Blog
          </a></div>
        <div className={classNames(styles.contact, styles.contact_mobile)}>
          <div>
            <Image src='/icons/call_icon.svg' alt='call_icon' width={16} height={16} />
          </div>
          <div>Hotline</div>
          </div>
        <div className={styles.wrap_button}>
          <BaseButton className={classNames('success', styles.button)} onClick={()=>{handleScrollToView('form_register')}}>Đăng ký</BaseButton>
        </div>
      </div>
    </div>
      <div className="container mx-auto">
    <Slider {...settingsBanner}>
      <div>
        <div className={classNames(styles.banner)}>
          <div className={classNames(styles.banner_content)}>
            <div className={styles.title}>Vay tín chấp chỉ với <span className={styles.title_highline}>Sim Viettel</span></div>
            <div className={styles.sub}>Ưu tiên sử dụng sim Viettel chính chủ có tỷ lệ duyệt cao đến 79% và hạn mức vay cao hơn.</div>
          </div>
          <div className={classNames(styles.images)}>
            <Image src='/images/banner.png' alt="banner" width={472} height={375}/>
          </div>
        </div>
      </div>
      <div>
        <div className={classNames(styles.banner)}>
          <div className={classNames(styles.banner_content)}>
            <div className={styles.title}>Vay tín chấp chỉ với <span className={styles.title_highline}>Sim Viettel</span></div>
            <div className={styles.sub}>Ưu tiên sử dụng sim Viettel chính chủ có tỷ lệ duyệt cao đến 79% và hạn mức vay cao hơn.</div>
          </div>
          <div className={classNames(styles.images)}>
            <Image src='/images/banner.png' alt="banner" width={472} height={375}/>
          </div>
        </div>
      </div>
      <div>
        <div className={classNames(styles.banner)}>
          <div className={classNames(styles.banner_content)}>
            <div className={styles.title}>Vay tín chấp chỉ với <span className={styles.title_highline}>Sim Viettel</span></div>
            <div className={styles.sub}>Ưu tiên sử dụng sim Viettel chính chủ có tỷ lệ duyệt cao đến 79% và hạn mức vay cao hơn.</div>
          </div>
          <div className={classNames(styles.images)}>
            <Image src='/images/banner.png' alt="banner" width={472} height={375}/>
          </div>
        </div>
      </div>
      <div>
        <div className={classNames(styles.banner)}>
          <div className={classNames(styles.banner_content)}>
            <div className={styles.title}>Vay tín chấp chỉ với <span className={styles.title_highline}>Sim Viettel</span></div>
            <div className={styles.sub}>Ưu tiên sử dụng sim Viettel chính chủ có tỷ lệ duyệt cao đến 79% và hạn mức vay cao hơn.</div>
          </div>
          <div className={classNames(styles.images)}>
            <Image src='/images/banner.png' alt="banner" width={472} height={375}/>
          </div>
        </div>
      </div>
      </Slider>
      </div>
    </div>
  );
};

export default Header;