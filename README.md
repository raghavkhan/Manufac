The site is reponsive as the units used are effective and importnt for the responsiveness of the page as soon as the char grows out of a certain width, the media query is shot and we can see it taking place as the background color changes. 
In src folder a sub folder is created which is components folder, BarChart.js file is inside components folder which import classes from adjacent file BarChart.module.css and use it as object in function component and same for ScatterPlot.js file and adjacent file is ScatterPlot.module.css.
Wine-data.json is imported through both js files BarChart and ScatterPlot and mainly Array method map is used for getting the desirable keys present in object in array through dot and bracket notation.
Dependencies for echart has been added in terminal through yarn and imported in both BarChart and ScatterPlot.
App.js imports BarChart and ScatterPlot.
yarn start will start the deplopment server.
yarn build will create a optimized production build.
build folder can be used for deployment of site.
