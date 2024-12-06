import { Button, Card, Typography } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
import "./style.scss";

const { Title, Text } = Typography;

function PaymentSuccess() {
  return (
    <div className="success-page">
      <Card className="success-card">
        <AiOutlineCheckCircle className="success-icon" />
        <Title level={4} className="success-title">Giao dịch thành công!</Title>
        <Text className="success-text">
          Cảm ơn bạn đã mua khóa học. Chúc bạn học tập hiệu quả!
        </Text>
        <div className="button-container">
          <Button type="default" className="button"><Link to="/">Quay về trang chủ</Link></Button>
          <Button type="primary" className="button">Khóa học đã mua</Button>
        </div>
      </Card>
    </div>
  );
}
export default PaymentSuccess;
