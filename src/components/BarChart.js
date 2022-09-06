import classes from'./BarChart.module.css';
import * as echarts from 'echarts';
import Wine from '../Wine-Data.json';

let chartDom1 = document.getElementsByClassName('chart1');
let myChart1 = echarts.init(chartDom1);
let option1;

option1 = {
  xAxis: {
    type: 'category',
    data: Wine.map(compose => compose.Alcohol),
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data : Wine.map(compose => compose['Malic Acid']),
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};

option1 && myChart1.setOption(option1);


function BarChart () {
return(
<div className={classes.chart1}> 
    Bar Chart
    </div>
    ) }
export default BarChart;
