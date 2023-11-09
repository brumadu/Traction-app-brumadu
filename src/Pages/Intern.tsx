import { Card, Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { companies, fetchCompanies } from "../Services/Axios/fetchCompanies";
import { fetchUnits, units } from "../Services/Axios/fetchUnits";
import { fetchUsers, users } from "../Services/Axios/fetchUsers";
import { CardIntern } from "../Components/CardIntern/CardIntern";
import { useParams } from "react-router-dom";

const { Title } = Typography;

export function Intern() {
  const { unitId } = useParams();

  const [companiesData, setCompaniesData] = useState<companies[]>([]);
  const [unitsData, setUnitsData] = useState<units[]>([]);
  const [usersData, setUsersData] = useState<users[]>([]);

  useEffect(() => {
    fetchCompanies().then((data) => {
      if (data) {
        setCompaniesData(data);
      }
    });
  }, []);

  useEffect(() => {
    fetchUnits().then((data) => {
      if (data) {
        setUnitsData(data);
      }
    });
  }, []);

  useEffect(() => {
    fetchUsers().then((data) => {
      if (data) {
        setUsersData(data);
      }
    });
  }, []);

  const [unitOpenId, setUnitOpenId] = useState<number>(Number(unitId));
  const [userOpen, setUserOpen] = useState<Boolean>(unitId ? true : false);

  return (
    <Col>
      {companiesData.map((company) => (
        <Row
          style={{
            overflowX: "auto",
            flexWrap: "nowrap",
            marginBottom: 10,
          }}
          justify={"start"}
        >
          <Col span={12}>
            <Col>
              <Title level={4}> {company.name} </Title>
            </Col>
            <Col>
              <Card
                style={{
                  width: "90%",
                  height: "75vh",
                  overflowY: "auto",
                  backgroundColor: "#fbfbfb",
                  justifyContent: "center",
                }}
              >
                {unitsData.map((item) =>
                  item.companyId === company.id ? (
                    <Card
                      hoverable={true}
                      style={{ marginBottom: 10 }}
                      onClick={() => {
                        setUnitOpenId(Number(item.id));
                        setUserOpen(true);
                      }}
                    >
                      <Col>
                        <Title style={{ margin: 0 }}>{item.name}</Title>
                      </Col>
                    </Card>
                  ) : null
                )}
              </Card>
            </Col>
          </Col>
          {userOpen && usersData && (
            <CardIntern
              unityData={unitsData}
              unitId={unitOpenId}
              usersData={usersData}
            />
          )}
        </Row>
      ))}
    </Col>
  );
}
