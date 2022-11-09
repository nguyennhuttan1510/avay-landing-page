import classNames from "classnames"
import Head from 'next/head'
import Image from 'next/image'
import BaseButton from "../components/Button"
import RegisterCard from "../components/RegisterCard"
import RegisterCardImage from "../components/RegisterCard/RegisterCardImage"
import MainLayout from "../layouts/MainLayout"
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={classNames(styles.container) }>
      <div className={classNames(styles.wrap_sections, 'container mx-auto')}>
        
      <div className={classNames(styles.wrap_card)}>
        <RegisterCard/>
      </div>

      <div className={styles.wrap_partner}>
        <div className={styles.section_title_brand}>Đối tác đồng hành cùng AVAY</div>
        <div className={classNames( styles.scroll, styles.wrap_partners)}>
          <div className={styles.partners}>
            <div className={classNames(styles.item, 'w-[66px] lg:w-max')}>
              <Image src="/logos/vib.png" alt='vib' width={135} height={65} />
            </div>
            <span className={styles.divide}></span>
            <div className={classNames(styles.item, 'w-[120px] lg:w-max')}>
              <Image src="/logos/vpb.png" alt='vpb' width={238} height={54} />
            </div>
            <span className={styles.divide}></span>
            <div className={styles.item}>
              <Image src="/logos/fe.png" alt='fe' width={299} height={31} />
            </div>
            <span className={styles.divide}></span>
            <div className={styles.item}>
              <Image src="/logos/mafc.png" alt='mafc' width={239} height={86} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrap_service}>
        <div className={styles.section_title}>
          <div className={styles.title_section_service}><span>Chọn AVAY</span></div>
          <div className={styles.title}>Vay thảnh thơi khắp mọi nơi</div>
          <div className={styles.sub}>Sàn tín dụng an toàn và minh bạch với cơ hội nhận giải ngân cao lên đến 89% từ các ngân hàng và tổ chức tài chính hàng đầu Việt Nam</div>
        </div>
        <div className={classNames(styles.scroll, styles.service_scroll)}>
          <div className={styles.services}>
            <RegisterCardImage image={<Image src="/images/image_card_1.png" alt="card_register" width={382} height={355}/>} title='Khoản vay tốt nhất từ ngân hàng và tổ chức uy tín' sub='Cơ hội nhận ngay khoản vay siêu hời với lãi suất hấp dẫn chỉ từ 1.2%/tháng. Bạn sẽ được kết nối tới các gói vay tốt nhất đến từ những đối tác uy tín của AVAY'/>
            <RegisterCardImage imageRight image={<Image src="/images/image_card_2.png" alt="card_register" width={391} height={456}/>} title='Chỉ với số điện thoại và CMND/CCCD' sub='Chẳng ngại khó vì vay tại AVAY thật đơn giản và dễ dàng. Nhập ngay số điện thoại và CMND/CCCD để được vay không cần phải chứng minh thu nhập.'/>
            <RegisterCardImage image={<Image src="/images/image_card_3.png" alt="card_register" width={395} height={473}/>} title='Duyệt vay online chỉ trong 2 phút' sub='Hệ thống duyệt vay thông minh chỉ 2 phút. AVAY cam kết quy trình vay là hoàn toàn miễn phí và không thu thêm bất cứ chi phí nào. '/>
          </div>
        </div>
      </div>

      <div className={styles.wrap_process}>
        <div className={styles.back_effect_process_1}></div>
        <div className={styles.back_effect_process_2}></div>
        <div style={{marginBottom:'80px'}} className={classNames(styles.section_title, styles.section_title_process)}>
          <div className={styles.title_section_service}><span>Quy trình</span></div>
          <div style={{marginBottom:'21px'}} className={styles.title}>Chỉ 3 bước để<br/> đăng ký khoản vay</div>
          <div className={styles.sub}>Chỉ cần thực hiện các thao tác đơn giản sau là bạn đã đăng ký thành công</div>
        </div>
        <div className={styles.processes}>
          <div className={styles.process_item}>
            <div className={styles.process_image}>
              <Image src='/images/process_1.png' alt='process_1' width={120} height={120} />
            </div>
            <div className={styles.process_content}>
              <div className={styles.title}>Điển thông tin vay</div>
              <div style={{padding: '0 7px'}} className={styles.sub}>Cung cấp các thông tin cơ bản để AVAY có thể tìm được sản phẩm vay phù hợp nhất với bạn.</div>
            </div>
          </div>
          <div className={classNames(styles.process_item, styles.fluid)}>
            <div className={styles.process_image}>
              <Image src='/images/process_2.png' alt='process_2' width={120} height={120} />
            </div>
            <div className={styles.process_content}>
              <div className={styles.title}>Nhận kết quả online</div>
              <div style={{margin: '0 -12px'}} className={styles.sub}>Với công nghệ độc quyền, hệ thống tự động đánh giá và phân tích hồ sơ để tìm khoản vay phù hợp chỉ sau 2 phút.</div>
            </div>
          </div>
          <div className={styles.process_item}>
            <div className={styles.process_image}>
              <Image src='/images/process_3.png' alt='process_3' width={120} height={120} />
            </div>
            <div className={styles.process_content}>
              <div className={styles.title}>Nhân viên liên hệ</div>
              <div style={{margin: '0 -12px'}} className={styles.sub}>Chúc mừng bạn đã đăng ký vay thành công tại AVAY. Vui lòng đợi để được liên hệ giải ngân.</div>
            </div>
          </div>
        </div>
        <div className={styles.wrap_button_process}>
          <BaseButton className="success">Đăng ký ngay</BaseButton>
        </div>
      </div>

      <div className={styles.wrap_about}>
        <div className={styles.title_section_about}>Nói về AVAY</div>
          <div className={styles.list_logo}>
            <div className={styles.logo_item}>
              <Image src="/logos/quoc_gia.png" alt='quoc_gia' width={234} height={81} />
            </div>
            <span className={styles.divide}></span>
            <div className={styles.logo_item}>
              <Image src="/logos/cafe_biz.png" alt='cafebiz' width={191} height={56} />
            </div>
            <span className={styles.divide}></span>
            <div className={styles.logo_item}>
              <Image src="/logos/vietnam_net.png" alt='vietnam_net' width={168} height={86} />
            </div>
            <span className={styles.divide}></span>
            <div className={styles.logo_item}>
              <Image src="/logos/tiepthi.png" alt='tiepthi' width={200} height={78} />
            </div>
          </div>
      </div>
      </div>
    </div>
    


    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}

Home.Layout = MainLayout
