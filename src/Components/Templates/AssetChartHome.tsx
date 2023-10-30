import { Col } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { assets, fetchAssets } from "../../api/fetchAssets";
import { useEffect, useState } from "react";

export function AssetChart() {
    const [assetsData, setAssetsData] = useState<assets[]>([]);

    useEffect(() => {
        fetchAssets().then((data) => {
            if (data) {
                setAssetsData(data);
            }
        });
    }, []);


    const options = assetsData.map((item) => (
        {
            title: {
                text: `<span>${item.name}<br/>Saúde do ativo:</span>`,
            },
            subtitle:{
                textSize: '100',
                text: `<span style="font-size: 20px; font-weight: bold">Em Alerta<br/>${item.healthscore}%</span>`,
                align: 'center',
                verticalAlign: 'middle',
                y: 75,
            },
            chart: {
                height: "65%",
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            tooltip: {
                enabled: false
            },
            Animation: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '70%'],
                    size: "130%"
                }
            },
            series: [{
                type: 'pie',
                innerSize: '50%',
                data: [{
                    y: item.healthscore,
                    dataLabels: {
                        enabled: false
                    },
                    color: "#941B0C",
                },
                {
                    y: 100 - item.healthscore,
                    dataLabels: {
                        enabled: false
                    },
                    color: "#f1f1f1",
                }],
            }]
        }
    ))


    return (
        <Col>
            {assetsData.map((item, i) => (
                (item.status === "inAlert")
                    ?
                    <HighchartsReact highcharts={Highcharts} options={options[i]} />
                    : null
            ))}
        </Col>
    )
}


