import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import BaseButton from "../../../components/Button";
import styles from './styles.module.scss'

const FailOPT = () => {
  return (
    <div className={styles.container}>
      <div className={styles.status_icon_otp}>
        <span>
          <Image src='/icons/otp_fail.svg' alt="icon_otp_fail" width={81} height={73} />
        </span>
      </div>
      <div className={classNames(styles.title, styles.fail)}>Đăng ký <br/>
chưa thành công</div>
      <div className={styles.content}>
      Hiện tại chúng tôi chưa tìm được sản phẩm vay phù hợp với bạn.<br/><br/>

Bạn vui lòng tìm lại khoản khoản vay <span style={{fontWeight: '700'}}>sau 30 ngày</span> nhé!
      </div>
      <div className={styles.wrap_button}>
        <BaseButton className={classNames('shadow shadow--success', styles.button)}>1 Like cho AVAY</BaseButton>
      </div>
      <div className={styles.text_redirect}>
        <Link href={'/'}>
          <BaseButton className={classNames('button__underline underline--success', styles.button)}>Về trang chủ</BaseButton>
        </Link>
      </div>
      <div className={styles.logo}>
        <span>
          <Image src='/logos/logo.png' alt='logo' width={93} height={28} />
        </span>
      </div>
    </div>
  );
};

export default FailOPT;