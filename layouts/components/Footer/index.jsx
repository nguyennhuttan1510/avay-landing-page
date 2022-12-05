import classNames from "classnames";
import Image from "next/image";
import React, { useState } from 'react';
import { Button, Card, CardBody, Collapse, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import styles from './styles.module.scss'

const question = [
  {
    title: 'Làm sao để đăng ký vay online nhanh nhất?',
    content: 'Để đăng ký vay và nhận kết quả về khoản vay phù hợp, bạn vui lòng truy cập web vay tiền online avay.vn, điền thông tin cá nhân và làm theo hướng dẫn. Trong trường hợp không truy cập được website, bạn có thể nhắn tin với cú pháp AVAY gửi tới đầu số 5566 và làm theo hướng dẫn.'
  },
  {
    title: 'Việc có khoản vay phù hợp và được duyệt có phải là điều kiện bắt buộc tôi phải vay qua web vay tiền online AVAY không?',
    content: 'Việc đăng ký vay chỉ mang tính chất tham khảo thông tin về khoản vay phù hợp. Bạn hoàn toàn có thể thay đổi quyết định vay khi có nhân viên gọi điện tư vấn.'
  },
  {
    title: 'Tôi đã đăng ký vay online thành công, bây giờ phải làm gì tiếp theo?',
    content: 'Nếu bạn nhận được khoản vay phù hợp trong quá trình đăng ký, trong vòng 24h (trừ ngày nghỉ), sẽ có nhân viên tư vấn gọi điện để hỗ trợ bạn hoàn thiện hợp đồng vay. Trong trường hợp AVAY chưa tìm được khoản vay phù hợp, bạn vui lòng đăng nhập vào tài khoản AVAY của mình để kiểm tra hoặc chờ AVAY gửi thông báo về khoản vay mới trong tương lai.'
  },
  {
    title: 'Tại sao tôi chưa có khoản vay phù hợp khi đăng ký vay online?',
    content: 'Nếu nhận được thông báo chưa có khoản vay phù hợp, có nghĩa là sau khi thẩm định hồ sơ, AVAY chưa thể tìm được khoản vay phù hợp với điều kiện hiện tại. Bạn vui lòng đăng nhập vào tài khoản AVAY của mình để kiểm tra hoặc chờ AVAY gửi thông báo về khoản vay mới trong tương lai.'
  },
  {
    title: 'Việc đăng ký vay trên AVAY có mất phí không?',
    content: 'Việc đăng ký vay là hoàn toàn miễn phí, AVAY không thu bất kỳ khoản phí nào liên quan tới việc khách hàng đăng ký cũng như sau khi được giải ngân thành công. Tất cả các đối tượng thu phí đăng ký vay và % khoản vay được giải ngân đều là đối tượng cò mồi lừa đảo và không liên quan gì tới AVAY.'
  },
  {
    title: 'Điều kiện để vay qua AVAY?',
    content: 'AVAY xét duyệt điều kiện vay dựa vào thông tin cá nhân bạn cung cấp trong quá trình đăng ký. Để kiểm tra điều kiện vay hiện tại, bạn vui lòng hoàn tất đăng ký vay qua website avay.vn hoặc tải về ứng dụng AVAY tại đây, kết quả duyệt vay sẽ có trong vòng 2 phút khi bạn hoàn tất việc đăng ký.'
  },
  {
    title: 'Tôi đang có khoản vay tại ngân hàng khác thì có thể vay tiếp được từ AVAY không?',
    content: 'Bạn vẫn có cơ hội vay qua AVAY trong trường hợp đang có khoản vay tại ngân hàng khác. Để biết chính xác mình có đủ điều kiện vay hay không, bạn vui lòng hoàn tất đăng ký vay qua website avay.vn hoặc tải về ứng dụng AVAY tại đây.'
  },
  {
    title: 'Tôi có thể vay với CMND của quân đội được không?',
    content: 'Rất tiếc, AVAY không hỗ trợ cho vay với CMND quân nhân.'
  },
  {
    title: 'Độ tuổi tối thiểu và tối đa đủ điều kiện vay tín chấp?',
    content: 'Mỗi ngân hàng, công ty tài chính sẽ có quy định về độ tuổi để tham gia vay tín chấp khác nhau, tuy nhiên thường nằm trong khung từ 21- 65, tùy từng ngân hàng và trường hợp cụ thể.'
  },
  {
    title: 'Số điện thoại của tôi phải đạt các điều kiện gì để có khoản vay phù hợp?',
    content: 'Các tiêu chí đánh giá thông tin của khách hàng trước khi đưa ra khoản vay phù hợp được AVAY tính toán tự động, vì thế, bạn chỉ có thể biết được mình đủ điều kiện vay hay không chứ không biết được lý do cụ thể là do tiêu chí nào. Đây cũng là sự khác biệt về kỹ thuật giúp chúng tôi mang tới khả năng đăng ký vay online nhanh nhất cho khách hàng.'
  },
  {
    title: 'Thủ tục vay của web vay tiền online AVAY như thế nào?',
    content: 'Thủ tục vay rất đơn giản, bạn chỉ cần đăng ký vay qua website avay.vn hoặc tải về ứng dụng AVAY tại đây để nhận được kết quả duyệt vay trong vòng hai phút. Nếu nhận được khoản vay phù hợp trong quá trình đăng ký, nhân viên tư vấn sẽ gọi điện để hỗ trợ bạn hoàn thiện hợp đồng vay trong vòng 24h (trừ ngày nghỉ).'
  },
  {
    title: 'Tôi không muốn làm hợp đồng và nộp giấy tờ vay tại nhà, AVAY có thể hỗ trợ giúp tôi hoàn thiện hợp đồng và thu nhận giấy tờ cần thiết tại một địa điểm khác được không?',
    content: 'Trong quá trình tư vấn hợp đồng, bạn có thể hẹn gặp làm thủ tục và nộp giấy tờ với nhân viên thu hồ sơ tại địa điểm do mình lựa chọn.'
  },
  {
    title: 'Tôi đã đăng ký vay và có khoản vay phù hợp nhưng chưa được nhân viên gọi điện tư vấn.',
    content: 'Trong vòng 48h kể từ khi khoản vay phù hợp được duyệt, nếu bạn vẫn chưa được nhân viên tư vẫn gọi hỗ trợ, xin vui lòng thông báo với bộ phận hỗ trợ khách hàng 028 710 82829, hoặc Facebook Page của AVAY tại đây'
  },
  {
    title: 'Thời gian giải ngân của AVAY là bao lâu?',
    content: 'Thời gian giải ngân trung bình của AVAY là từ 3-5 ngày kể từ khi khoản vay phù hợp của bạn được duyệt trên website.'
  },
  {
    title: 'Tôi có thể thanh toán nợ vay bằng cách nào?',
    content: 'Tùy vào từng đối tác cung cấp dịch vụ, bạn sẽ có các lựa chọn thanh toán nợ vay tại điểm thu hộ, chi nhánh ngân hàng hoặc chuyển khoản ngân hàng.',
  },
  {
    title: 'Tôi có thể thay bản sao CMND bằng bản sao hộ chiếu được không?',
    content: 'Hồ sơ vay bắt buộc phải có bản sao CMND và không thể thay thế bằng bản sao hộ chiếu.',
  },
  {
    title: 'Tôi đã hoàn tất việc nộp hồ sơ, vậy bao giờ tôi có thể nhận được tiền giải ngân?',
    content: 'Trong trường hợp đã gặp nhân viên và hoàn tất việc nộp hồ sơ, ký hợp đồng vay, bạn vui lòng chờ ngân hàng nhắn tin thông báo quyết định giải ngân. Bạn cũng có thể liên hệ với nhân viên thu hồ sơ để kiểm tra tình trạng giải ngân của mình.'
  },
  {
    title: 'Tôi muốn hủy đăng ký vay?',
    content: 'Nếu đã có khoản vay online phù hợp và không có nhu cầu vay nữa, bạn chỉ cần trao đổi với nhân viên khi nhận được cuộc gọi tư vấn.',
  },
  {
    title: 'Tôi có khoản vay phù hợp nhưng khi nhân viên tư vấn gọi tới thì chưa liên lạc được với tôi hoặc chưa tư vấn xong',
    content: 'Trong trường hợp gọi nhưng chưa gặp được hoặc chưa tư vấn đầy đủ, nhân viên tư vấn sẽ bố trí thời gian gọi lại cho bạn.'
  },
  {
    title: 'Tôi đã nộp hồ sơ, nhưng sau đó ngân hàng nhắn tin từ chối giải ngân',
    content: 'Nếu nhận được thông báo từ chối giải ngân của ngân hàng sau khi nộp hồ sơ, có nghĩa là hồ sơ của bạn không đủ điều kiện thẩm định của tổ chức tín dụng. Rất tiếc, trong trường hợp này, tổ chức tín dụng sẽ không có thông tin cụ thể về lý do từ chối giải ngân, bạn vui lòng đăng nhập vào tài khoản AVAY của mình để kiểm tra hoặc chờ AVAY gửi thông báo về khoản vay mới trong tương lai.',
  },
  {
    title: 'Tôi cần thông tin về lãi suất/thời hạn/hạn mức',
    content: 'AVAY chọn gói vay phù hợp với bạn dựa trên việc tính toán, phân tích các thông tin cá nhân mà bạn cung cấp trong quá trình đăng ký. Vì vậy, để biết được các thông tin liên quan tới khoản vay của mình, bạn vui lòng hoàn tất việc đăng ký vay qua website avay.vn hoặc tải về ứng dụng di động AVAY tại đây.',
  },
  {
    title: 'Cách tính lãi suất của AVAY?',
    content: 'Lãi suất AVAY đưa ra được tính trên dư nợ giảm dần và thấp hơn cách tính lãi cố định theo dư nợ ban đầu.'
  },
  {
    title: 'AVAY cho vay theo hình thức nào?',
    content: 'AVAY cung cấp dịch vụ cho vay tiền mặt theo hình thức tín chấp, trả góp hàng tháng và không yêu cầu tài sản đảm bảo. Các gói vay của chúng tôi được cung cấp bởi các công ty tài chính, ngân hàng uy tín tại Việt Nam',
  },
  {
    title: 'Tôi muốn vay một khoản nhỏ hơn hạn mức được mời vay thì có được không?',
    content: 'Bạn chỉ có thể lựa chọn số tiền vay nằm trong hạn mức tối thiểu và tối đa của khoản vay phù hợp.',
  },
  {
    title: 'Tôi muốn vay khoản vay với hạn mức "x", thời hạn "y", lãi suất "z"',
    content: 'Hiện tại AVAY chỉ hỗ trợ vay với thời hạn từ 12 đến 30 tháng, hạn mức từ 1 triệu tới 80 triệu. Tuy nhiên, để biết được chính xác các chi tiết liên quan tới khoản vay phù hợp của mình, bạn vui lòng hoàn tất việc đăng ký vay avay.vn.',
  },
  {
    title: 'Các gói vay của AVAY đến từ đâu?',
    content: 'AVAY hợp tác với các ngân hàng và tổ chức tín dụng uy tín nhất Việt Nam trong đó có VPBank, OCB, Home Credit, FE Credit, Mirae Asset...nhằm mang tới các khoản vay phù hợp nhất với khả năng được duyệt vay cao nhất dành cho bạn',
  },
  {
    title: 'Tôi muốn vay một khoản "x", hạn mức "y", lãi suất "z"?',
    content: 'Lý do để có thể vay online nhanh nhất là vì AVAY tự động xác định các thông tin chi tiết của khoản vay phù hợp với bạn như lãi suất, hạn mức, thời hạn tối đa dựa vào thông tin cá nhân của bạn. Vì vậy, bạn vui lòng hoàn tất việc đăng ký vay để biết chính xác các thông tin này.'
  },
  {
    title: 'Tôi nhận được tin nhắn mời vay với số tiền là "x", thanh toán tối thiểu là "y". Vậy tôi phải thanh toán trong vòng bao lâu thì kết thúc hợp đồng vay của mình?',
    content: 'Số thanh toán tối thiểu là số tiền bạn phải thanh toán hàng tháng cho khoản vay với hạn mức tối thiểu và thời gian vay tối đa nằm trong khoảng cho phép của khoản vay phù hợp. Ví dụ gói vay của bạn có hạn mức từ 1-50 triệu, thời hạn vay 12-30 tháng, thì số thanh toán tối thiểu của bạn là số bạn phải thanh toán hàng tháng cho khoản vay 1 triệu trong 30 tháng.',
  },
  {
    title: 'AVAY nói là hồ sơ vay chỉ cần bản sao CMND và sổ hộ khẩu, vậy tại sao khi nhan viên tư vấn gọi điện lại yêu cầu tôi cung cấp thêm đăng ký xe, sao kê bảng lương, hợp đồng bảo hiểm, hóa đơn điện nước...?',
    content: 'Với thuê bao Viettel, hồ sơ vay của tất cả các gói vay được duyệt chỉ cần bản sao CMND và sổ hộ khẩu, không cần chứng minh thu nhập cũng như sao kê bảng lương. Với thuê bao Vinaphone và Mobifone, khách hàng có thể sẽ được yêu cầu bổ sung một trong các giấy tờ theo yêu cầu của nhân viên tư vấn.'
  },
  {
    title: 'Phí bảo hiểm khoản vay là gì? Tôi có bắt buộc phải đóng phí này khi vay không?',
    content: 'Phí bảo hiểm khoản vay là một loại phí không bắt buộc, dao động từ 5% đến 6% trên phần gốc của khoản vay, có ý nghĩa đảm bảo rằng bạn sẽ được bên bảo hiểm đứng ra chịu trách nhiệm cho khoản vay của mình trong trường hợp bạn mất khả năng chi trả.',
  },
  {
    title: 'Tôi có thể thanh toán khoản vay của mình trước thời hạn vay được không?',
    content: 'Trong trường hợp thanh toán trước hạn hợp đồng vay, bạn sẽ phải thanh toán một khoản phí thanh toán trước hạn dao động từ 5% đến 5.5% tính trên phần gốc còn lại.'
  }
]

const Footer = () => {
  const [activeCollapse, setActiveCollapse] = useState('');
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const toggleCollapse = (id) => {
    if(id === activeCollapse) {
      setActiveCollapse('')
      return
    }
    setActiveCollapse(id)
  }
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
        <div className={styles.menu_item} onClick={toggleModal} style={{cursor: 'pointer'}}>
          <div className={styles.menu_icon}>
            <Image src="/icons/question_2.svg" alt="menu_icon" width={20} height={20} />
          </div>
          <div>Hỏi đáp</div>
        </div>
        <div className={styles.menu_item} style={{cursor: 'pointer'}}>
          <div className={styles.menu_icon}>
            <Image src="/icons/phone_2.svg" alt="menu_icon" width={20} height={20} />
          </div>
          <div><a href="tel:02871082829">Liên hệ</a></div>
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
      <Modal centered={true} isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>CÂU HỎI THƯỜNG GẶP</ModalHeader>
        <ModalBody style={{height: '500px', overflowY:'auto'}} className='scroll_modal'>
          {question.map((item, index) => (
            <>
              <div className="p-3 rounded cursor-pointer flex items-center justify-between" style={{background: '#f2f2f2', marginBottom: '1px'}} onClick={()=>{toggleCollapse(index)}}>{item.title}
                <div className="flex-shrink-0">
                  {activeCollapse === index ? (
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15.5" cy="15.5" r="15" fill="white" stroke="#CDCDCD"/>
                      <rect x="10" y="14.5" width="11" height="2" fill="#04A468"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                      <circle cx="15.5" cy="15.5" r="15" fill="white" stroke="#CDCDCD"/>
                      <rect x="10" y="14.5" width="11" height="2" fill="#04A468"/>
                      <rect x="14.5" y="21" width="11" height="2" transform="rotate(-90 14.5 21)" fill="#04A468"/>
                    </svg>
                  )}
                </div>
              </div>
              <Collapse isOpen={activeCollapse === index}>
                <div className="p-3">
                  {item.content}
                </div>
              </Collapse>
            </>
          ))}
        </ModalBody>
      </Modal>
      
    </div>
  );
};

export default Footer;