function nok(array, canvasID, color, width, height) {
  var canvasID = "canvas";
  var color = "rgba(0, 0, 0, 0.8)"
  var canvasWidth = 1000;
  var canvasHeight = 200;

  if (canvasID !== undefined) {
    canvasID = canvasID;
  }

  if (color !== undefined) {
    color = color;
  }

  if (width !== undefined) {
    canvasWidth = width;
  }

  if (height !== undefined) {
    canvasHeight = height;
  }

  let data = array
  let normalizedData = []

  let ratio = Math.max.apply(Math, data) / canvasHeight;
  normalizedData = []
  for ( i = 0; i < data.length; i++ ) {
    normalizedData.push( Math.round(data[i] / ratio) )
  }

  var lineWidth = canvasWidth / data.length

  var canvas = document.getElementById(canvasID);
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  var ctx = canvas.getContext("2d");

  var position = 0
  normalizedData.forEach(function (item, index) {
      ctx.fillStyle = color;
      ctx.fillRect(position,canvasHeight,lineWidth, -item);
      position += lineWidth
  });
}