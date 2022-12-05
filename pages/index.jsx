import classNames from "classnames"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from 'next/head'
import Image from 'next/image'
import BaseButton from "../components/Button"
import RegisterCard from "../components/RegisterCard"
import RegisterCardImage from "../components/RegisterCard/RegisterCardImage"
import MainLayout from "../layouts/MainLayout"
import styles from './Home.module.scss'
import Slider from "react-slick";
import { useEffect, useState } from "react";

export default function Home() {
  const settings = {
    dots: false,
    rows: 1,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  const settingsCartImage = {
    dots: false,
    rows: 1,
    // infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: false,
    // speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // variableWidth: true,
    nextArrow: <></>,
    prevArrow: <></>,
  };  
  const [width, setWidth] = useState();

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const handleScrollToView = (elementID) => {
    console.log("🚀 ~ file: index.jsx:28 ~ handleScrollToView ~ elementID", elementID)
    if(!elementID) return
    const element = document.getElementById(elementID);
    element.scrollIntoView({behavior: 'smooth'});
  }

  const isMobile = width <= 768;
  return (
    <div className={classNames(styles.container) }>
      <div className={classNames(styles.wrap_sections, 'container mx-auto')}>
        
      <div id="form_register" className={classNames(styles.wrap_card)}>
        <RegisterCard/>
      </div>

      <div className={styles.wrap_partner}>
        <div className={styles.section_title_brand}>Đối tác đồng hành cùng AVAY</div>
          <div className="w-full mx-auto">
          <Slider {...settings}>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                  <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                    <Image className='lg:mx-auto' src="/logos/vib.png" alt='vib' width={135} height={65} />
                  </div>
                  <div className={styles.divide}></div>
              </div>
            </div>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                  <Image className='lg:mx-auto' src="/logos/vpb.png" alt='vpb' width={238} height={54} />
                </div>
                <div className={styles.divide}></div>
              </div>
            </div>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                  <Image className='lg:mx-auto' src="/logos/fe.png" alt='fe' width={299} height={31} />
                </div>
                <div className={styles.divide}></div>
              </div>
            </div>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                  <Image className='lg:mx-auto' src="/logos/mafc.png" alt='mafc' width={239} height={86} />
                </div>
                <div className={styles.divide}></div>
              </div>
            </div>
            
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                  <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                    <Image className='lg:mx-auto' src="/logos/vib.png" alt='vib' width={135} height={65} />
                  </div>
                  <div className={styles.divide}></div>
              </div>
            </div>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                  <Image className='lg:mx-auto' src="/logos/vpb.png" alt='vpb' width={238} height={54} />
                </div>
                <div className={styles.divide}></div>
              </div>
            </div>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                  <Image className='lg:mx-auto' src="/logos/fe.png" alt='fe' width={299} height={31} />
                </div>
                <div className={styles.divide}></div>
              </div>
            </div>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                  <Image className='lg:mx-auto' src="/logos/mafc.png" alt='mafc' width={239} height={86} />
                </div>
                <div className={styles.divide}></div>
              </div>
            </div>
          </Slider>
          </div>
      </div>

      <div className={styles.wrap_service}>
        <div className={styles.section_title}>
          <div className={styles.title_section_service}><span>Chọn AVAY</span></div>
          <div className={styles.title}>Vay thảnh thơi khắp mọi nơi</div>
          <div className={styles.sub}>Sàn tín dụng an toàn và minh bạch với cơ hội nhận giải ngân cao lên đến 89% từ các ngân hàng và tổ chức tài chính hàng đầu Việt Nam</div>
        </div>
        {isMobile ? (
          <div className={styles.services}>
            <Slider {...settingsCartImage}>
              <div className="card_1 px-1 sm:px-4">
                <RegisterCardImage handleScrollToView={handleScrollToView} classNameImages='pt-[42px] h-[350px]' image={<Image src="/images/image_card_1.png" alt="card_register" width={382} height={355}/>} title='Khoản vay tốt nhất từ ngân hàng và tổ chức uy tín' sub='Cơ hội nhận ngay khoản vay siêu hời với lãi suất hấp dẫn chỉ từ 1.2%/tháng. Bạn sẽ được kết nối tới các gói vay tốt nhất đến từ những đối tác uy tín của AVAY'/>
              </div>
              <div className="card_2 px-1 sm:px-4">
                <RegisterCardImage handleScrollToView={handleScrollToView} classNameImages='w-[300px] pt-0 mx-auto h-[350px]' imageRight image={<Image src="/images/image_card_2.1.png" alt="card_register" width={391} height={456}/>} title='Chỉ với số điện thoại và CMND/CCCD' sub='Chẳng ngại khó vì vay tại AVAY thật đơn giản và dễ dàng. Nhập ngay số điện thoại và CMND/CCCD để được vay không cần phải chứng minh thu nhập.'/>
              </div>
              <div className="card_3 px-1 sm:px-4">
                <RegisterCardImage handleScrollToView={handleScrollToView} classNameImages='w-[335px] pt-0 mx-auto h-[350px]' image={<Image src="/images/image_card_3.png" alt="card_register" width={395} height={473}/>} title='Duyệt vay online chỉ trong 2 phút' sub='Hệ thống duyệt vay thông minh chỉ 2 phút. AVAY cam kết quy trình vay là hoàn toàn miễn phí và không thu thêm bất cứ chi phí nào. '/>
              </div>
            </Slider>
          </div>
        ) : (
          <div className={classNames(styles.scroll, styles.service_scroll, 'lg:overflow-hidden')}>
            <div className={classNames(styles.services, styles.desktop)}>
              <RegisterCardImage handleScrollToView={handleScrollToView} classNameImages='pt-[42px] h-[350px] lg:pt-0 lg:h-auto' image={<Image src="/images/image_card_1.png" alt="card_register" width={382} height={355}/>} title='Khoản vay tốt nhất từ ngân hàng và tổ chức uy tín' sub='Cơ hội nhận ngay khoản vay siêu hời với lãi suất hấp dẫn chỉ từ 1.2%/tháng. Bạn sẽ được kết nối tới các gói vay tốt nhất đến từ những đối tác uy tín của AVAY'/>
              <RegisterCardImage handleScrollToView={handleScrollToView} classNameImages='w-[300px] pt-0 mx-auto h-[350px] lg:w-auto lg:pt-0 lg:h-auto lg:mx-0' imageRight image={<Image src="/images/image_card_2.4.png" alt="card_register" width={328} height={382}/>} title='Chỉ với số điện thoại và CMND/CCCD' sub='Chẳng ngại khó vì vay tại AVAY thật đơn giản và dễ dàng. Nhập ngay số điện thoại và CMND/CCCD để được vay không cần phải chứng minh thu nhập.'/>
              <RegisterCardImage handleScrollToView={handleScrollToView} classNameImages='w-[335px] pt-0 mx-auto h-[350px] lg:w-auto lg:pt-0 lg:h-auto lg:mx-0' image={<Image src="/images/image_card_3.png" alt="card_register" width={395} height={100}/>} title='Duyệt vay online chỉ trong 2 phút' sub='Hệ thống duyệt vay thông minh chỉ 2 phút. AVAY cam kết quy trình vay là hoàn toàn miễn phí và không thu thêm bất cứ chi phí nào. '/>
            </div>
          </div>
        )}
      </div>

      <div id="process_element" className={styles.wrap_process}>
        <div className={styles.back_effect_process_1}></div>
        <div className={styles.back_effect_process_2}></div>
        <div style={{marginBottom:'80px'}} className={classNames(styles.section_title, styles.section_title_process)}>
          <div className={styles.title_section_service}><span>Quy trình</span></div>
          <div style={{marginBottom:'21px'}} className={styles.title}>Chỉ 3 bước để<br className="lg:hidden"/> đăng ký khoản vay</div>
          <div className={styles.sub}>Chỉ cần thực hiện các thao tác đơn giản sau là bạn đã đăng ký thành công</div>
        </div>
        <div className={styles.processes}>
          <div className={styles.process_item}>
            <div className={styles.process_image}>
              <Image src='/images/process_1.png' alt='process_1' width={120} height={120} />
            </div>
            <div className={styles.process_content}>
              <div className={styles.title}>Điền thông tin vay</div>
              <div className={styles.sub}>Cung cấp các thông tin cơ bản để AVAY có thể tìm được sản phẩm vay phù hợp nhất với bạn.</div>
            </div>
          </div>
          <div className={classNames(styles.process_item, styles.fluid)}>
            <div className={styles.process_image}>
              <Image src='/images/process_2.png' alt='process_2' width={120} height={120} />
            </div>
            <div className={styles.process_content}>
              <div className={styles.title}>Nhận kết quả online</div>
              <div className={styles.sub}>Với công nghệ độc quyền, hệ thống tự động đánh giá và phân tích hồ sơ để tìm khoản vay phù hợp chỉ sau 2 phút.</div>
            </div>
          </div>
          <div className={styles.process_item}>
            <div className={styles.process_image}>
              <Image src='/images/process_3.png' alt='process_3' width={120} height={120} />
            </div>
            <div className={styles.process_content}>
              <div className={styles.title}>Nhân viên liên hệ</div>
              <div className={styles.sub}>Chúc mừng bạn đã đăng ký vay thành công tại AVAY. Vui lòng đợi để được liên hệ giải ngân.</div>
            </div>
          </div>
        </div>
        <div className={styles.wrap_button_process}>
          <BaseButton className={classNames('shadow shadow--success lg:max-w-full lg:mx-auto lg:h-20 h-[58px]', styles.button)} onClick={()=>{handleScrollToView('form_register')}}>Đăng ký ngay</BaseButton>
        </div>
      </div>

      <div id='about_element' className={styles.wrap_about}>
        <div className={styles.title_section_about}>Nói về AVAY</div>
        <div className="w-full mx-auto">
          <Slider {...settings}>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                  <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                    {/* <Image className='lg:mx-auto' src="/logos/vib.png" alt='vib' width={135} height={65} /> */}
                    <Image src="/logos/quoc_gia.png" alt='quoc_gia' width={234} height={81} />
                  </div>
                  <div className={styles.divide}></div>
              </div>
            </div>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                  {/* <Image className='lg:mx-auto' src="/logos/vpb.png" alt='vpb' width={238} height={54} /> */}
                  <Image src="/logos/tiepthi.png" alt='tiepthi' width={200} height={78} />
                </div>
                <div className={styles.divide}></div>
              </div>
            </div>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                  {/* <Image className='lg:mx-auto' src="/logos/fe.png" alt='fe' width={299} height={31} /> */}
                  <Image src="/logos/cafe_biz.png" alt='cafebiz' width={191} height={56} />
                </div>
                <div className={styles.divide}></div>
              </div>
            </div>
            <div className="h-16 lg:h-24">
              <div className='flex justify-center items-center flex-row h-full gap-x-'>
                <div className={classNames(styles.item, 'w-44 lg:w-fit lg:mx-auto px-[40px]')}>
                  {/* <Image className='lg:mx-auto' src="/logos/mafc.png" alt='mafc' width={239} height={86} /> */}
                  <Image src="/logos/vietnam_net.png" alt='vietnam_net' width={168} height={86} />
                </div>
                <div className={styles.divide}></div>
              </div>
            </div>
          </Slider>
          </div>
      </div>
      </div>
    </div>
  )
}

Home.Layout = MainLayout
