import { Card, Col, Divider } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { healthHistoryData } from "../../api/fetchAssets";

interface assetsHistory {
    assets: healthHistoryData[];
  }
  
export function HealthAssetChart(assetsHistory: assetsHistory, name?: String) {
    const options =
        {
            title: {
                text: `<span>Saúde do ativo:</span>`,
            },
            chart: {
                height: "100%",
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            Animation: {
                enabled: false
            },
            plotOptions: {
                series: {
                    step: 'left', // or 'center' or 'right'
                    data: [assetsHistory.assets.map],
                }            
            }
        }


    return (
        <Col>
                <Card style={{maxHeight: '30vh', marginBottom: 10}}>
                        <HighchartsReact highcharts={Highcharts} options={options} />
                </Card>
        </Col>
    )
}


