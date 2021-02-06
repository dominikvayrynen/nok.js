function nok(array, canvasID, color, width, height) {
  var defaultCanvasID = "canvas";
  var defaultColor = "rgba(0, 0, 0, 0.8)"
  var defaultCanvasWidth = 1000;
  var defaultCanvasHeight = 200;

  if (canvasID !== undefined) {
    defaultCanvasID = canvasID;
  }

  if (color !== undefined) {
    defaultColor = color;
  }

  if (width !== undefined) {
    defaultCanvasWidth = width;
  }

  if (height !== undefined) {
    defaultCanvasHeight = height;
  }

  let data = array
  let normalizedData = []

  let ratio = Math.max.apply(Math, data) / defaultCanvasHeight;
  normalizedData = []
  for ( i = 0; i < data.length; i++ ) {
    normalizedData.push( Math.round(data[i] / ratio) )
  }

  var lineWidth = defaultCanvasWidth / data.length

  var canvas = document.getElementById(defaultCanvasID);
  canvas.width = defaultCanvasWidth;
  canvas.height = defaultCanvasHeight;

  var ctx = canvas.getContext("2d");

  var position = 0
  normalizedData.forEach(function (item, index) {
      ctx.fillStyle = color;
      ctx.fillRect(position,defaultCanvasHeight,lineWidth, -item);
      position += lineWidth
  });
}