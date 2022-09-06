import classes from'./ScatterPlot.module.css';
import * as echarts from 'echarts';
import Wine from '../Wine-Data.json';

//console.log( [Wine.map(compose => { return [compose['Color intensity'],compose.Hue] } )]);
 let chartDom2 = document.getElementsByClassName('chart2');
let myChart2 = echarts.init(chartDom2);
let option2;

option2 = {
  xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 20,
      
      data: [Wine.map(compose => { return [compose['Color intensity'],compose.Hue] } )],
      type: 'scatter'
    }
  ]
};


option2 && myChart2.setOption(option2);


function ScatterPlot () {
return(
<div className={classes.chart2}> 
    Scatter Plot
    </div>
    ) }
export default ScatterPlot;