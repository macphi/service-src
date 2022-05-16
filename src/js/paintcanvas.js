//canvas
var color = document.querySelector("#color");
var eraser = document.querySelector("#eraser");
var sizeEl = document.querySelector("#size");
var decrease = document.querySelector("#decrease");
var increase = document.querySelector("#increase");
var save = document.querySelector("#save");
var clear = document.querySelector("#clear");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var pos1 = {
  x: 0,
  y: 0,
};
var pos2 = {
  x: 0,
  y: 0,
};
var isDrawing = false;
// color
var colorPaint = "#00000";
// size
var size = 10;
// init size
sizeEl.innerText = size;
document.addEventListener("mousedown", function (e) {
  pos1 = {
    x: e.offsetX,
    y: e.offsetY,
  };
  isDrawing = true;
});
document.addEventListener("mousemove", function (e) {
  if (isDrawing) {
    pos2 = {
      x: e.offsetX,
      y: e.offsetY,
    };
    // fill net ve
    ctx.beginPath();
    ctx.arc(pos1.x, pos1.y, size, 0, 2 * Math.PI);
    ctx.fillStyle = colorPaint;
    ctx.fill();
    // ve out line
    ctx.beginPath();
    ctx.moveTo(pos1.x, pos1.y);
    ctx.lineTo(pos2.x, pos2.y);
    ctx.strokeStyle = colorPaint; // đổi màu
    ctx.lineWidth = size * 2; // kích thước
    ctx.stroke();

    pos1.x = pos2.x;
    pos1.y = pos2.y;
  }
});
document.addEventListener("mouseup", function (e) {
  isDrawing = false;
});
// đổi màu
color.addEventListener("change", function (e) {
  colorPaint = e.target.value;
});
// xóa
eraser.addEventListener("click", function () {
  colorPaint = "#ffffff";
});
// size

decrease.addEventListener("click", function () {
  size -= 5;
  size = size > 5 ? size : 5;
  console.log("1", size, sizeEl);
  sizeEl.innerText = size;
});
increase.addEventListener("click", function () {
  size += 5;
  size = size < 30 ? size : 30;
  sizeEl.innerText = size;
});
//clear
clear.addEventListener("click", function () {
  var canvasStats = canvas.getClientRects()[0];
  ctx.clearRect(0, 0, canvasStats.width, canvasStats.height);
});
// save
save.addEventListener("click", function () {
  var output = canvas.toDataURL(
    "image/png".replace("image/png", "image/octet-stream")
  );

  save.setAttribute("href", output);
});
