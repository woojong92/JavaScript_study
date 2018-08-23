$(document).ready(function(){
  'use strict';

  paper.install(window);//Paper.js를 전역 스코프에 설치
  paper.setup(document.getElementById('mainCanvas'));//Paper.js를 캔버스에 연결하고 Paper.js가 그림을 그릴수 있도록 준비

  /*
  //한개의 원 그리기
  var c = Shape.Circle(200, 200, 50);
  c.fillColor='green';
  */

  /*
  //바둑판 모양으로 원 그리기
  var c;
  for(var x=25; x<400; x+=50){
    for(var y=25; y<400; y+=50){
      c=Shape.Circle(x, y, 20);
      c.fillColor='green';
    }
  }
  */

  var tool =new Tool();// tool 객체생성

  var c=Shape.Circle(200, 200, 80);
  c.fillColor='black';
  var text=new PointText(200, 200);
  text.justification='center';
  text.fillColor='white';
  text.fontSize=20;
  text.content="hello world";

  //tool 객체에 onMouseDown 이벤트 핸들러 연결
  tool.onMouseDown=function(event){
    //var c=Shape.Circle(event.point.x, event.point.y, 20);
    var c=Shape.Circle(event.point, 20);
    c.fillColor='green';
  };


  paper.view.draw();

  console.log('main.js loade');
});
