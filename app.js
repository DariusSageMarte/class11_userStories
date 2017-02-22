 'use strict';
 var photo = ['boots.jpg','chair.jpg','cthulhu.jpg','shark.jpg','sweep.png','tauntauan.jpg','bag.jpg','banana.jpg','bathroom.jpg','bubblegum.jpg', 'dog-duck.jpg','bathroom.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','unicorn.jpg','wine-glass.jpg','usb.gif'];
 var pTag = [];

 function Photo (filePath) {
   this.name = filePath.split('.')[0];
   this.timeClicked = 0;
   this.timeShown = 0;
   this.imFile = 'images/' + filePath;
 };
 for(var i = 0; i < photo.length; i++ ) {
   var newPhoto = new Photo (photo[i]);
   pTag.push(newPhoto);
 }
 console.log('pTag',pTag);

 var renImg = ['one','two','three'];

 function render () {
   for(var i = 0; i < renImg.length; i++) {
     var currentImg = document.getElementById(renImg[i]);
     var newNum = Math.floor(Math.random() * pTag.length);
     currentImg.setAttribute('src',pTag[newNum].imFile);

   }
 }
 render();


// function createObject () {
//     document.getElementsBy
// }

// function prepareButton()

//    document.getElementById('one').onclick = function()
//    {alert('you clicked me');
//    }; console.log(function);

//  var theChart = document. getElementById('myChart');
//  var myChart = new Chart (theChart, {
//    type: 'bar',
//    data: {
//      labels: ['boots','chair','chtulu','shark','sweep','shark','bag','bathroom','scissors','bubblegum','banana','dog-duck'],
//      datasets: [{
//        label:'Number of clicks',
//        data: [5, 2, 5, 1, 1, 1, 10, 11, 6, 1, 1,],
//        backgroundColor:[ '#000', 'blue', 'green', 'purple'],
//        borderWidth:5 }]
//    },
//    options:{
//      scales:{
//        yAxes:[{
//          ticks:{
//            beginAtZero:true
//          }
//        }]
//      }
//    }


//  });

