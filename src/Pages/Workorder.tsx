import { useEffect, useState } from "react";
import { fetchWorkorders, workorders } from "../Services/Axios/fetchWorkorders";
import { Col, Row } from "antd";

export function Workorder() {
  const [workordersData, setWorkordersData] = useState<workorders[]>([]);

  useEffect(() => {
    fetchWorkorders().then((data) => {
      if (data) {
        setWorkordersData(data);
      }
    });
  }, []);

  return (
    <Col>
      <Row>
        <Col span={12}></Col>
        <Col span={12}></Col>
      </Row>
    </Col>
  );
}
