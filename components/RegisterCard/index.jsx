import classNames from "classnames";
import Link from "next/link";
import React, { useState } from 'react';
import BaseButton from "../Button";
import SelectField from "../SelectField";
import styles from './styles.module.scss'
import InputMask from 'react-input-mask';

const mockupOption = [
  {title:'10 triệu đồng', value:10000000},
  {title:'20 triệu đồng', value:20000000},
  {title:'30 triệu đồng', value:30000000},
  {title:'50 triệu đồng', value:50000000},
  {title:'80 triệu đồng', value:80000000},
]
const mockupOptionMonth = [
  {title:'6', value: 6},
  {title:'12', value: 12},
  {title:'18', value: 18},
  {title:'24', value: 24},
  {title:'30', value: 30},
  {title:'36', value: 36},
]

const RegisterCard = () => {
  const PERCENT_MONTH = 0.02
  const [value, setValue] = useState({
    month: null,
    amount: null,
    phone: null,
    identify: null
  })

  const handleSetValue = (data) => {
    setValue(prev => ({
      ...prev, [data.name]: data.value
    }))
  }

  const total = (value.month && value.amount) ? Intl.NumberFormat('de-DE').format(( value.amount / value.month * PERCENT_MONTH ) + (value.amount / value.month)) : ''

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

          <div className="flex flex-wrap mb-2 xl:mb-10 xl:-mx-5">
            <div className="w-full mb-2 xl:w-[30%] xl:px-5 xl:mb-0">
                <div className={classNames(styles.input_field, 'h-[62px] xl:h-[85px] ')}>
                <div className={styles.label}>Số điện thoại</div>
                <InputMask mask="9999 999 999" value={value.phone} maskChar=" " onChange={(e)=>{setValue(prev => ({...prev, phone: e.target.value}))}}>
                  {(inputProps) =>  <input {...inputProps} className={styles.input} type="tel" disableUnderline />}
                </InputMask>
              </div>
            </div>
            <div className="w-full mb-2 xl:w-[30%] xl:px-5 xl:mb-0">
                <div className={classNames(styles.input_field, 'h-[62px] xl:h-[85px] ')}>
                <div className={styles.label}>Số  CMND / CCCD</div>
                <InputMask mask="999 999 999 999" value={value.identify} maskChar=" " onChange={(e)=>{setValue(prev => ({...prev, identify: e.target.value}))}}>
                  {(inputProps) =>  <input {...inputProps} className={styles.input} type="text" disableUnderline min={9} max={12} />}
                </InputMask>
              </div>
            </div>
            <div className="w-full mb-2 xl:w-[40%] xl:px-5 xl:mb-0 xl:order-first">
                <div className={classNames(styles.input_field, 'h-[62px] xl:h-[85px] ')}>
                <div className={styles.label}>Số tiền muốn vay</div>
                <SelectField onChange={(data) => {handleSetValue({...data, name: 'amount'})}} options={mockupOption} className="text-[#13BC7D] text-2xl font-semibold"/>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-2 xl:mb-10 xl:-mx-5">
            <div className="w-full mb-2 xl:w-[40%] xl:px-5 xl:mb-0">
              <div className="flex items-center">
                <div className="w-1/2 xl:w-1/3">
                  <div className={classNames(styles.input_field, styles.no_bg)}>
                    <div className={styles.label}>Lãi suất tháng</div>
                    <div className="text-[#0A0D28] font-semibold text-xl">1.2 - 3%</div>
                  </div>
                </div>
                <div className="w-1/2 xl:w-2/3 ">
                  <div className={classNames(styles.input_field,'h-[62px] xl:h-[85px]')}>
                    <div className={styles.label}>Kỳ hạn vay (Tháng)</div>
                    <SelectField onChange={(data) => {handleSetValue({...data, name: 'month'})}} options={mockupOptionMonth} className="text-xl font-semibold"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-2 xl:w-[30%] xl:px-5 xl:mb-0">
              <div className={classNames(styles.input_field, styles.input_bg, 'h-[62px] xl:h-[85px] ')}>
                <div className={styles.label}>Số tiền phải trả hàng tháng</div>
                <input className={classNames(styles.input, styles.primary_color)} type='text' disabled value={total}/>
              </div>
            </div>
            <div className="w-full mb-2 xl:w-[30%] xl:px-5 xl:mb-0">
              <div className="h-[55px] mt-[15px] mb-[16px] xl:m-0 xl:h-full">
                <Link href={'/OTP'}>
                  <BaseButton style={{fontSize: '26px', lineHeight: '30px'}} className='success'>ĐĂNG KÝ</BaseButton>
                </Link>
              </div>
            </div>
          </div>

        </div>
          <div className={classNames(styles.sub, 'text-center xl:text-left')}>Lưu ý: Số tiền góp mỗi tháng mang tính chất tham khảo, sẽ khác với thực tế tùy thời điểm.</div>
      </div>
    </div>
  );
};

export default RegisterCard;