import { Col, Row } from "antd";
import { Typography } from "antd";
import { workorders } from "../../api/fetchWorkorders";

const { Title, Text } = Typography;

export function WorkorderCardHome(cardData: workorders) {
    return (
        <Col>
            <Row>
                <Title>{cardData.title}</Title>
                <Text>{cardData.priority}</Text>
                <Text>{cardData.description}</Text>
                {/* {cardData.checklist.map((item, i) => (
                    <>
                    <Text>{cardData.checklist[i].completed}</Text>
                    <Text>{cardData.checklist[i].task}</Text>
                    </>
                ))} */}
            </Row>
            {/* {cardData.assignedUsersId.map((item, i) => (
                    <>
                    <Text>{cardData.assignedUsersId[i]}</Text>
                    </>
                ))} */}
            <Col />
        </Col>
    )
}