import React from "react";



function dash(){

var ctx = document.getElementById("chart-pie");

  var chartPie = new ApexCharts(ctx, {
    chart: {
       width: 380,
       type: 'donut',
     },
     dataLabels: {
       enabled: false
     },
     plotOptions: {
        pie: {
          customScale: 1,
          expandOnClick: false,
          donut: {
            size: "80%",
          }
        },
      },
    legend: {
        position: "right",
        verticalAlign: "center",
        containerMargin: {
          left: 35,
          right: 60
        }
      },
     series: [66, 55, 13, 33],
     labels: ['Asia', 'USA', 'China', 'Africa'],
     colors: ['#00ab5599', '#00ab55', '#00ab5535', '#00ab5550'],
     donut: {
       size: "100%"
     },
     responsive: [
        {
           breakpoint: 1550,
           options: {
             chart: {
                width: 340,
             },
             legend: {
                 position: "bottom",
                 verticalAlign: "bottom",
                 containerMargin: {
                   left: 'auto',
                   right: 'auto'
                 }
               },
           }
        },
        {
           breakpoint: 1450,
           options: {
             chart: {
                width: 300,
             },
           }
        }
      ]
  });

  chartPie.render();

    return(
        <>
        
        </>
    )
}