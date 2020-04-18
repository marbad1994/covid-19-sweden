import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min.js'
import * as _ from 'lodash';
import  * as $ from 'jquery';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  ngOnInit() {


    var dataPoints = [];
    var secondData = [];
    var confirmedData = [];
    var chart = new CanvasJS.Chart("chartContainer",{
      zoomEnabled: true,
		animationEnabled: true,
		exportEnabled: true,
        title:{
            text:"Stats of Covid-19 in Sweden"
        },
        data: [{
          showInLegend: true, 
            type: "line",
            dataPoints : dataPoints,
            legendText: "Deaths"
        },
        {
          showInLegend: true, 
          type: "line",
          dataPoints: secondData,
          legendText: "Recovered"
        }
        ,
        {
          showInLegend: true, 
          type: "line",
          dataPoints: confirmedData,
          legendText: "Confirmed Cases"
        }

      ]
    });
    let i: number = 0;
    $.getJSON('https://api.covid19api.com/country/sweden', function(data) {  
    $.each(data, function(key, value){
      

       var tomorrow = new Date(2020, 0, 22 + i);
        // tomorrow.setDate(tomorrow.getDate() + parseInt(value[0]));
        dataPoints.push({x: tomorrow, y: parseInt(value["Deaths"])});
        secondData.push({x: tomorrow, y: parseInt(value["Recovered"])});
        confirmedData.push({x: tomorrow, y: parseInt(value["Confirmed"])});
        i += 1
    });
    console.log(dataPoints)

        chart.render();
    });

  }
  }
      
