
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import { useESGData } from "../../Context/esg";
import { useMemo } from 'react';

function BarCharts() {
    const { filteredData } = useESGData();


    const GenerateData = useMemo(() => {
        return {
            series: [{ name: "ESG Composite Score", data: filteredData.map(it => it["ESG Composite Score"]) }, { name: "ESG Composite Score (Prev. Year)", data: filteredData.map(it => it["ESG Composite Score (Prev. Year)"]) }],
            categories: filteredData.map(it => it["Company Name"].length > 10 ? `${it["Company Name"].substring(0, 10)}...` : it["Company Name"])
        }
    }, [filteredData])


    const Chart = {
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        // subtitle: {
        //     text:
        //         'Source: <a target="_blank" ' +
        //         'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>'
        // },
        xAxis: {
            categories: GenerateData.categories,
            crosshair: true,
            accessibility: {
                description: 'Countries'
            },
            title: {
                text: "Company Name's"
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Range'
            }
        },
        // tooltip: {
        //     valueSuffix: ' (1000 MT)'
        // },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        // series: [
        //     {
        //         name: 'Corn',
        //         data: [387749, 280000, 129000, 64300, 54000, 34300]
        //     },
        //     {
        //         name: 'Wheat',
        //         data: [45321, 140000, 10000, 140500, 19500, 113500]
        //     }
        // ]
        series: GenerateData.series
    };


    return <HighchartsReact highcharts={Highcharts} options={Chart} />;
}

export default BarCharts;