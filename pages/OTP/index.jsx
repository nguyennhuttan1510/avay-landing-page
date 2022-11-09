import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import BaseButton from "../../components/Button";
import styles from './styles.module.scss'

const OTP = () => {
  const [OTP, setOTP] = useState('')
  const [isError, setIsError]  = useState(false)
  const router = useRouter()
  const handleChangeOTP = (otp) => {
    setOTP(otp)
  }
  const handleSendOPT = () => {
    if(OTP === '1111') {
      setIsError(false)
      router.push('/OTP/success')
      return
    }
    setIsError(true)
  }
  const handleBack = () => {
    router.back()
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div onClick={handleBack} className={styles.icon_back}><Image src='/icons/icon_back_mobile.svg' alt='icon_back' width={19} height={17} /></div>
      </div>
      <div className={styles.wrap_content}>
        <div className={styles.main_title}>Xác nhận số điện thoại</div>
        <div className={styles.sub}>{isError ? (
          <span style={{color: 'rgba(188, 2, 2, 0.5)'}}>Mã OTP bạn vừa nhập chưa đúng, vui<br/> lòng kiểm tra lại!</span>
        ) : (
          <>Vui lòng nhập mã OTP của AVAY gửi tới<br/>số điện thoại <span>0933999999</span></>
        )}</div>
        <div className={styles.opt_code}>
          <OtpInput
            value={OTP}
            onChange={handleChangeOTP}
            numInputs={4}
            separator={<span></span>}
          />
        </div>
        <div className={styles.re_send}>Bạn không nhận được mã xác nhận?<br/><span>Gửi lại ngay</span></div>
        <div className={styles.wrap_button}>
          <BaseButton className='shadow shadow--success lg:max-w-sm lg:mx-auto' onClick={()=>{handleSendOPT()}}>Xác nhận</BaseButton>
        </div>
      </div>
    </div>
  );
};

export default OTP;