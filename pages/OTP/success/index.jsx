import classNames from "classnames";
import Image from "next/image";
import React from 'react';
import BaseButton from "../../../components/Button";
import styles from './styles.module.scss'
const SuccessOTP = () => {
  return (
    <div className={styles.container}>
      <div style={{marginBottom: '0px'}} className={styles.status_icon_otp}>
        <div style={{marginBottom: '15px'}}>
          <Image src='/icons/otp_success.svg' alt="icon_otp_success" width={68} height={68} style={{ marginRight: 'auto', marginLeft: 'auto', transform: 'translateX(6px)'}} />
        </div>
        <div style={{marginBottom: '15px'}}>
          <Image src='/icons/star_icon.svg' alt="star_icon" width={126} height={22} />
        </div>
      </div>
      <div className={classNames(styles.title, styles.success)}>Chúc mừng!</div>
      <div className={styles.content}>
Bạn đã thỏa điều kiện nhận khoản<br/> vay tại <span style={{fontWeight: '700'}}>Fe Credit</span><br/><br/>

Vui lòng đợi nhân viên xác nhận và lên hồ sơ vay trong 24h tới!
      </div>
      <div className={styles.wrap_button}>
        <BaseButton className={classNames('shadow shadow--success lg:max-w-sm lg:mx-auto', styles.button)}>1 Like cho AVAY</BaseButton>
      </div>
      <div className={styles.text_redirect}>
        <span>Tự động chuyển màn hình sau <span style={{fontWeight: '700'}}>10s</span></span>
      </div>
      <div className={styles.logo}>
        <span>
          <Image src='/logos/logo.png' alt='logo' width={93} height={28} />
        </span>
      </div>
    </div>
  );
};

export default SuccessOTP;