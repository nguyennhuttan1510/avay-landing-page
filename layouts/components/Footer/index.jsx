import classNames from "classnames";
import Image from "next/image";
import React from 'react';
import styles from './styles.module.scss'
const Footer = () => {
  return (
      <div className={classNames(styles.container_bg)}>
        <div className={classNames(styles.container, "container mx-auto")}>
      <div>
        <span className={styles.logo_footer}>
          <Image src='/logos/logo_footer.png' alt="logo_footer" width={220} height={68} />
        </span>
      </div>
      <div className={styles.infoText}>
      Bản quyền thuộc Công ty cổ phần Trusting Social - MST: 0106957913<br/>
Trụ sở: Tầng 8, Toà nhà Havana, 132 Hàm Nghi, phường Bến Thành, Quận 1, HCM, Việt Nam
      </div>
      <div className={styles.menuFooter}>
        <div className={styles.menu_item}>
          <div className={styles.menu_icon}>
            <Image src="/icons/document_2.svg" alt="menu_icon" width={20} height={20} />
          </div>
          <div>Giới thiệu</div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.menu_icon}>
            <Image src="/icons/question_2.svg" alt="menu_icon" width={20} height={20} />
          </div>
          <div>Hỏi đáp</div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.menu_icon}>
            <Image src="/icons/phone_2.svg" alt="menu_icon" width={20} height={20} />
          </div>
          <div>Liên hệ</div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.menu_icon}>
            <Image src="/icons/wifi_2.svg" alt="menu_icon" width={20} height={20} />
          </div>
          <div>Blog</div>
        </div>
      </div>
      <div className={styles.copyright}>
      © 2022 Avay Company
      </div>
      </div>
    </div>
  );
};

export default Footer;