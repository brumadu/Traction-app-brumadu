import { Card, Col, Divider } from "antd";
import Highcharts, { time } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { HealthHistoryData } from "../../Services/Axios/fetchAssets";
import { Typography } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

interface assetsHistoryProps {
  assets: HealthHistoryData[];
}

export function ChartAssets(assetsHistory: assetsHistoryProps) {
  const status = assetsHistory.assets.map((item) => item.status);

  const statusType = [...new Set(status)];

  const dataTime = assetsHistory.assets.map((item) => {
    const timestamp =
      item.timestamp instanceof Date
        ? item.timestamp.getUTCDate()
        : new Date(item.timestamp).getUTCDate();
    return timestamp;
  });

  const options = {
    chart: {
      type: "line",
    },
    tooltip: {
      enabled: false,
    },
    xAxis: {
      type: "category",
      title: { text: "Data" },
      categories: dataTime,
    },
    yAxis: {
      title: { text: "Status" },
      categories: statusType,
      reversed: true,
    },
    series: [
      {
        name: "status",
        type: "line",
        data: status.map((item) => statusType.indexOf(item)),
      },
    ],
  };

  return (
    <Col>
      <Title></Title>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Col>
  );
}
