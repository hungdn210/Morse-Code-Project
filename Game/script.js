const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const BG_W = canvas.width;
const BG_H = canvas.height; 
const CARD_W = 200;
const CARD_H = 200;
const HORI_SQ_CNT = BG_W / CARD_W;
const VERT_SQ_CNT = BG_H / CARD_H;

function setUpValue() {

}

function setUpBG() {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  for(let i = 0; i <= HORI_SQ_CNT; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.strokeRect(i * CARD_W, 0, i * CARD_W, BG_H);
    ctx.stroke();
  }
  for(let i = 0; i <= VERT_SQ_CNT; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, i * CARD_H, BG_W, i * CARD_H);
    ctx.stroke();
  }
}
function start() {
  setUpValue();
  setUpBG();
}