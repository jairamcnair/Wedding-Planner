//source: https://stackblitz.com/edit/canvasjs-react-charts-typescript?file=src%2FApp.tsx 
//source: https://www.npmjs.com/package/@canvasjs/react-charts
// install command: npm install @canvasjs/react-charts 
//import * as React from 'react';

// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart() {
  const options = {
    title: {
      text: 'Basic Column Chart in React',
    },
    data: [
      {
        type: 'column',
        dataPoints: [
          { label: 'Apple', y: 10 },
          { label: 'Orange', y: 15 },
          { label: 'Banana', y: 25 },
          { label: 'Mango', y: 30 },
          { label: 'Grape', y: 28 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef = {ref => this.chart = ref} */
      />
    </div>
  );
}
export default Chart;