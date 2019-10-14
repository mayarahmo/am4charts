var chart = am4core.create("piediv", am4charts.PieChart);

chart.dataSource.url = "/am4charts/data/countries.json"; // getting external data

var pieSeries = chart.series.push(new am4charts.PieSeries());

pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";

// transforma um gráfico de pizza em uma rosquinha
chart.innerRadius = am4core.percent(30);

pieSeries.slices.template.stroke = am4core.color("#4a2abb") ;
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 500;

var hs = pieSeries.slices.template.states.getKey("hover"); // changing hover behavior more than 1 is bigger than 1 afasta o slice
chart.legend = new am4charts.Legend(); // adding a legend to a chart

pieSeries.slices.template.fillOpacity = 1;

// fill opacity when hover
var hs = pieSeries.slices.template.states.getKey("hover");
hs.properties.scale = 1;
hs.properties.fillOpacity = 0.80;


