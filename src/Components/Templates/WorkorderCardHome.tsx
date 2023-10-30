import { Card, Col, Divider, Row } from "antd";
import { Typography } from "antd";
import { workorders } from "../../api/fetchWorkorders";

const { Title, Text } = Typography;

export function WorkorderCardHome(cardData: workorders) {
    return (
        <Card style={{ width: "100%" }}>
            <Col>
                <Row align={"top"} justify={"space-between"}>
                    <Col>
                        <Title>{cardData.title}</Title>
                    </Col>
                    <Col>
                        <Title level={3} type="warning">{cardData.status}</Title>
                    </Col>
                </Row>
                <Text>{cardData.description}</Text>
                <Divider/>
                <Title level={3}> Tarefas Restantes: </Title>
                {cardData.checklist.map((item) => (
                    (item.completed)? null :
                    <Col>
                        <Text>{item.task}</Text>
                    </Col>
                ))}
            </Col>
        </Card>
    )
}