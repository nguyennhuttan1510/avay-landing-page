import classNames from "classnames";
import Link from "next/link";
import React from 'react';
import BaseButton from "../Button";
import styles from './styles.module.scss'
const RegisterCard = () => {
  return (
    <div className={classNames(styles.container, 'py-3 px-[10px] rounded-[10px] xl:rounded-[30px] xl:py-[30px] xl:px-5')}>
      <div className={classNames(styles.header_card, 'text-xl font-bold text-left px-5 hidden xl:block xl:text-3xl xl:mb-[30px]')}>
        Đăng ký khoản vay
      </div>
      <div className={classNames(styles.wrap_card, 'px-[10px] pt-[17px] pb-1.5 xl:py-[30px] xl:px-5')}>
        <div className={classNames(styles.header_card, 'text-xl font-bold text-center mb-8 block xl:hidden ')}>
          Đăng ký khoản vay
        </div>
        <div className={styles.body_card}>
          <div className='flex flex-col xl:flex-row gap-y-2 xl:gap-x-10 w-full'>
          <div className="w-full xl:w-[30%]">
            <div className={classNames(styles.input_field)}>
              <div className={styles.label}>Số điện thoại</div>
              <input className={styles.input} type='text' />
            </div>
          </div>
          <div className="w-full  xl:w-[30%] ">
            <div className={classNames(styles.input_field)}>
              <div className={styles.label}>Số  CMND / CCCD</div>
              <input className={styles.input} type='text' />
            </div>
          </div>
          <div className="w-full  xl:w-[40%] xl:order-first">
            <div className={classNames(styles.input_field)}>
              <div className={styles.label}>Số tiền muốn vay</div>
              <input className={classNames(styles.input, styles.primary_color)} type='text' />
            </div>
          </div>
          </div>
          <div className="w-full flex gap-y-2 flex-col xl:flex-row xl:gap-x-10 xl:mb-[22px]">
          <div className="flex w-full flex-row xl:w-[40%] ">
            <div className={classNames(styles.input_field, styles.no_bg, 'w-1/2')}>
            <div className={styles.label}>Lãi suất tháng</div>
            <div className="text-[#0A0D28] font-semibold text-xl">1.2 - 3%</div>
          </div>
          <div className={classNames(styles.input_field, 'w-1/2')}>
            <div className={styles.label}>Kỳ hạn vay (Tháng)</div>
            <input className={classNames(styles.input)} type='text' />
          </div>
          </div>
          <div className={classNames(styles.input_field, styles.input_bg, 'w-full xl:w-[30%]')}>
            <div className={styles.label}>Số tiền phải trả hàng tháng</div>
            <input className={classNames(styles.input, styles.primary_color)} type='text' />
          </div>
          <div className="h-[55px] mt-[15px] mb-[16px] xl:m-0 xl:w-[30%] xl:h-full">
            <Link href={'/OTP'}>
              <BaseButton className='success'>ĐĂNG KÝ</BaseButton>
            </Link>
          </div>
          </div>
        </div>
          <div className={classNames(styles.sub, 'text-center xl:text-left')}>Lưu ý: Số tiền góp mỗi tháng mang tính chất tham khảo, sẽ khác với thực tế tùy thời điểm.</div>
      </div>
    </div>
  );
};

export default RegisterCard;