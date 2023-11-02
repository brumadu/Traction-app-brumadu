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

export function ChartModalAssets(assetsHistory: assetsHistoryProps) {
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

      backgroundColor: "#f1f1f1",
      plotBackgroundColor: "#ffffff",
      plotBorderWidth: 2,
    },
    navigation: {
      buttonOptions: {
        enabled: false,
      },
    },
    title: {
      text: "Status da operação",
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
        color: "#4BB543",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
