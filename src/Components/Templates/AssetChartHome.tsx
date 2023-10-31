import { Card, Col } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { assets } from "../../api/fetchAssets";

interface assetsProps {
    data: assets;
  }

export function AssetChart(assets: assetsProps) {

const options = {
            title: {
                text: `<span>${assets.data.name}<br/>Saúde do ativo:</span>`,
            },
            subtitle: {
                text: `<span style="font-size: 17px; font-weight: bold">Em Alerta<br/>${assets.data.healthscore}%</span>`,
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
                    y: assets.data.healthscore,
                    dataLabels: {
                        enabled: false
                    },
                    color: "#941B0C",
                },
                {
                    y: 100 - assets.data.healthscore,
                    dataLabels: {
                        enabled: false
                    },
                    color: "#f1f1f1",
                }],
            }]
        }


    return (
        <>
            <Card hoverable={true} style={{ width: '100%', marginBottom: 10, maxHeight: '30vh' }}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Card>
        </>
    )
}


