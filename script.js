var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d');
context.beginPath();
context.arc(100,60,20,0,2*Math.PI,true);
context.strokeStyle='black'
context.lineWidth = '3';
context.fillStyle="yellow";
context.fill();
context.stroke();

var canvas = document.getElementById('canvas2')
var context = canvas.getContext('2d');
context.beginPath();
context.arc(100,60,20,0,2*Math.PI,true);
context.strokeStyle='black'
context.lineWidth = '3';
context.fillStyle="blue"
context.fill();
context.stroke();



var canvas = document.getElementById('canvas3')
var context = canvas.getContext('2d');
context.beginPath();
context.arc(100,60,20,0,2*Math.PI,true);
context.strokeStyle='black'
context.lineWidth = '3';
context.fillStyle="red"
context.fill();
context.stroke();



var canvas = document.getElementById('canvas4')
var context = canvas.getContext('2d');
context.beginPath();
context.arc(100,60,20,0,2*Math.PI,true);
context.strokeStyle='black'
context.lineWidth = '3';
context.fillStyle="green"
context.fill();
context.stroke();


var canvas1 = document.getElementById("myCanvas1");
  var canvas2 = document.getElementById("myCanvas2");
  var canvas3 = document.getElementById("myCanvas3");
  var canvas4 = document.getElementById("myCanvas4");
  var ctx1 = canvas1.getContext("2d");
  var ctx2 = canvas2.getContext("2d");
  var ctx3 = canvas3.getContext("2d");
  var ctx4 = canvas4.getContext("2d");

  window.onload = function () {
    drawArrow(ctx1, 49, 10.5, 10, 10, 10, "black");
    drawArrow(ctx2, 49, 10.5, 10, 10, 10, "black");
    drawArrow(ctx3, 49, 10.5, 10, 10, 10, "black");
    drawArrow(ctx4, 49, 10.5, 10, 10, 10, "black");
  };

  function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color) {
    //variables to be used when creating the arrow
    var headlen = 5;
    var angle = Math.atan2(toy - fromy, tox - fromx);

    ctx.save();
    ctx.strokeStyle = color;

    //starting path of the arrow from the start square to the end square
    //and drawing the stroke
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineWidth = arrowWidth;
    ctx.stroke();

    //starting a new path from the head of the arrow to one of the sides of
    //the point
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(
      tox - headlen * Math.cos(angle - Math.PI / 7),
      toy - headlen * Math.sin(angle - Math.PI / 7)
    );

    //path from the side point of the arrow, to the other side point
    ctx.lineTo(
      tox - headlen * Math.cos(angle + Math.PI / 7),
      toy - headlen * Math.sin(angle + Math.PI / 7)
    );

    //path from the side point back to the tip of the arrow, and then
    //again to the opposite side point
    ctx.lineTo(tox, toy);
    ctx.lineTo(
      tox - headlen * Math.cos(angle - Math.PI / 7),
      toy - headlen * Math.sin(angle - Math.PI / 7)
    );

    //draws the paths created above
    ctx.stroke();
    ctx.restore();
  }
  var x = 10,
    y = 100;
  function onClick(id, arrowID) {
    var bubble = document.getElementById(id);
    var ctxx = bubble.getContext("2d");
    ctxx.fillStyle = "#808080";
    ctxx.fill();
    // var can = document.getElementById(arrowID);
    // // can.height = 1000; can.width = 1300;
    // var arrCtx = can.getContext("2d");

    // arrCtx.fillStyle = "black";
    // arrCtx.fillRect(700, 100, 100, 100);
    // draw();
  }

  function draw() {
    ctx1.beginPath();
    ctx1.arc(x, y, 20, 0, 2 * Math.PI);
    ctx1.fillStyle = "rgba(250,0,0,0.4)";
    ctx1.fill();

    x += 2;
    ctx1.fillStyle = "rgba(34,45,23,0.4)";
    // ctx1.fillRect(0, 0, 1300, 1000);
    // requestAnimationFrame(draw);
    //ctx.clearRect(0,0,can.width,can.height);
  }

  function onReset() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fill();

    var c = document.getElementById("canvas2");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fill();

    var c = document.getElementById("canvas3");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fill();

    var c = document.getElementById("canvas4");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fill();
    draw();
  }



  