 'use strict';
// var photo = ['boots.jpg','chair.jpg','cthulhu','shark.jpg','sweep.png','shark.png','tauntauan','bag.jpg','banana','bathroom','bubblegum', 'dog-duck.jpg','bathroom.jpg','pen.jpg','pet-sweep','scissors.jpg','unicorn.jpg','wine-glass.jpg','usb.gif'];

// function Photo (image, filePath) {
//   this.name = image;
//   this.timeClicked = 0;
//   this.timeShown = 0;
//   this.imFile = 'images/' + filePath;
// };

// function createObject () {
//   return Math.random();

// }

// function createObject () {
//     document.getElementsBy
// }

// function prepareButton()

//    document.getElementById('one').onclick = function()
//    {alert('you clicked me');
//    }; console.log(function);

 var theChart = document. getElementById('myChart');
 var myChart = new Chart (theChart, {
   type: 'bar',
   data: {
     labels: ['boots','chair','chtulu','shark','sweep','shark','bag','bathroom','scissors','bubblegum','banana','dog-duck'],
     datasets: [{
       label:'Number of clicks',
       data: [5, 2, 5, 1, 1, 1, 10, 11, 6, 1, 1,],
       backgroundColor:[ '#000', 'blue', 'green', 'purple'],
       borderWidth:5 }]
   },
   options:{
     scales:{
       yAxes:[{
         ticks:{
           beginAtZero:true
         }
       }]
     }
   }


 });

