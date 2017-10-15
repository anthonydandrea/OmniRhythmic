//Probability Matrix
//
//
//  140BPM
//
//                          Half    DottedQuarter   Quarter     Dotted Eighth   Eighth  16th
//
//  Half note
//  Dotted quarter note
//  Quarter note
//  Dotted eighth
//  Eighth note
//  16th note

var probMatrix = [
  [0, .1, .2, .3, .3, .1],
  [0, .1, .2, .3, .3, .1],
  [0, .1, .2, .3, .3, .1],
  [0, .1, .2, .3, .3, .1],
  [0, .1, .2, .3, .3, .1],
  [0, .1, .2, .3, .3, .1]
];

var beatLengths = [2, 1.5, 1, .75, .5, .25];

var canvasHeight = 120;
var canvasWidth = 1500;
var barsPerLine = 4;
var numBars = 5;
var bars = []

//make Staffs
for (var i = 0; i < numBars; i += barsPerLine)
  makeStaff();

//get canvases for each line
var canvas = document.querySelectorAll("canvas");
var ctx = [];
for (var i = 0; i < canvas.length; i++)
  ctx[i] = canvas[i].getContext("2d");


//draw Staffs
drawStaffs();

//Test Draw Notes
// drawEveryNote();

//Create bar object
function makeBar(b) {
  var bar = {
    beats: b,
    availableBeats: b,
    notes: []
  }
  return bar;
}

//Create Markov-chain sourced bars
for (var i = 0; i < numBars; i++) {
  bars[i] = makeBar(4);

  var prevNote;
  if (i == 0)
    prevNote = Math.floor(Math.random() * 6);

  while (bars[i].availableBeats > 0) {
    var prob = Math.random();
    var index = 0;
    var sum = probMatrix[prevNote][index];
    while (sum < prob) {
      index++;
      sum += probMatrix[prevNote][index];
    }
    if (bars[i].availableBeats - beatLengths[index] < 0);
    else {
      var insertionSpot = bars[i].notes.length;
      bars[i].notes[insertionSpot] = index;
      bars[i].availableBeats -= beatLengths[index];
      prevNote = index;
      console.log(beatLengths[index]);
    }
  }
  console.log("availableBeats: " + bars[i].availableBeats);

}


for (var b = 0; b < numBars; b++) {
  var noteX = 380 * b + 40;
  var spacer = 300 / bars[b].notes.length
  var lineNumber = Math.floor(b / barsPerLine);
  console.log("line number = "+lineNumber);
  for (var i = 0; i < bars[b].notes.length; i++) {
    switch (bars[b].notes[i]) {
      case 0:

        drawNote('h', ctx[lineNumber], noteX);
        break;
      case 1:
        drawNote('dq', ctx[lineNumber], noteX);
        break;
      case 2:
        drawNote('q', ctx[lineNumber], noteX);
        break;
      case 3:
        drawNote('de', ctx[lineNumber], noteX);
        break;
      case 4:
      console.log("drrawing on line number = "+lineNumber);
        drawNote('e', ctx[lineNumber], noteX);
        break;
      case 5:
        drawNote('s', ctx[lineNumber], noteX);
        break;
    }
    noteX += spacer;
  }
}


//Create staff
function makeStaff() {
  document.querySelector('body').insertAdjacentHTML('beforeend', "<canvas width=" + canvasWidth + 'px height=' + canvasHeight + "px style='width: 1500px;'></canvas>");
}

//Draw every staff
function drawStaffs() {
  for (var c = 0; c < ctx.length; c++) {
    for (var i = 30; i <= 30 + 90; i += 90 / 4) {
      ctx[c].moveTo(0, i);
      ctx[c].lineTo(canvasWidth + 200, i);
      ctx[c].stroke();
    }
    for (var i = 0; i <= canvasWidth + 100; i += canvasWidth / barsPerLine) {
      ctx[c].fillRect(i - 1.5, 30, 3, 90);
      console.log(i);
    }
  }
}

//Draw note of 'type' with context ctx at x-coordinate x
function drawNote(type, ctx, x) {
  switch (type) {
    case 'h':
      ctx.fillRect(x + 10, 0, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.stroke();
      break;
    case 'dq':
      ctx.fillRect(x + 10, 0, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(x + 20, 87, 3, 3, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case 'q':
      ctx.fillRect(x + 10, 0, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case 'de':
      ctx.fillRect(x + 10, 0, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x + 10, 20, 20, Math.PI * 3 / 2, Math.PI * 2, false);
      ctx.stroke();


      ctx.beginPath();
      ctx.arc(x + 50, 20, 20, Math.PI, Math.PI / 1.7, true);
      ctx.stroke();
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.ellipse(x + 20, 87, 3, 3, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case 'e':
      ctx.fillRect(x + 10, 0, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x + 10, 20, 20, Math.PI * 3 / 2, Math.PI * 2, false);
      ctx.stroke();
      ctx.lineWidth = 1;
      break;
    case 's':
      ctx.fillRect(x + 10, 0, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(x + 10, 20, 20, Math.PI * 3 / 2, Math.PI * 2.2, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x + 10, 40, 20, Math.PI * 3 / 2, Math.PI * 2, false);
      ctx.stroke();


      ctx.beginPath();
      ctx.arc(x + 50, 40, 20, Math.PI, Math.PI / 1.5, true);
      ctx.stroke();
      ctx.lineWidth = 1;
      break;
    default:
      console.log("Not a know note - " + type);

  }
}

//Draws one of every note on first line
function drawEveryNote() {
  drawNote('h', ctx[0], 50);
  drawNote('dq', ctx[0], 100);
  drawNote('q', ctx[0], 150);
  drawNote('de', ctx[0], 200);
  drawNote('e', ctx[0], 250);
  drawNote('s', ctx[0], 300);
}

//Draws one of every note on first line
// function drawNotes() {
//   //half note
//   ctx.fillRect(60, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(50, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.stroke();
//
//   //dotted quarter note
//   ctx.fillRect(110, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(100, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//   ctx.beginPath();
//   ctx.ellipse(120, 87, 3, 3, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//
//   //quarter note
//   ctx.fillRect(170, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(160, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//
//   //eighth note - right extension
//   ctx.fillRect(220, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(210, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//   ctx.fillRect(220, 0, 20, 3);
//
//   //eighth note - left extension
//   ctx.fillRect(260, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(250, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//   ctx.fillRect(240, 0, 20, 3);
//
//   //eighth note - double extension
//   ctx.fillRect(370, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(360, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//   ctx.fillRect(350, 0, 40, 3);
//
//
//   //16th note - double extension
//   ctx.fillRect(570, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(560, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//   ctx.fillRect(550, 0, 40, 5);
//   ctx.fillRect(550, 10, 40, 5);
//
//   //16th note - left extension
//   ctx.fillRect(620, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(610, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//   ctx.fillRect(600, 0, 20, 5);
//   ctx.fillRect(600, 10, 20, 5);
//
//   //16th note - right extension
//   ctx.fillRect(670, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(660, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//   ctx.fillRect(670, 0, 20, 5);
//   ctx.fillRect(670, 10, 20, 5);
//
//
//   //single eighth note
//   ctx.fillRect(720, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(710, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//
//   ctx.lineWidth = 3;
//   ctx.beginPath();
//   ctx.arc(720, 20, 20, Math.PI * 3 / 2, Math.PI * 2, false);
//   ctx.stroke();
//
//
//   ctx.beginPath();
//   ctx.arc(760, 20, 20, Math.PI, Math.PI / 1.7, true);
//   ctx.stroke();
//   ctx.lineWidth = 1;
//
//
//   //single 16th note
//   ctx.fillRect(770, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(760, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//
//   ctx.lineWidth = 4;
//   ctx.beginPath();
//   ctx.arc(770, 20, 20, Math.PI * 3 / 2, Math.PI * 2.2, false);
//   ctx.stroke();
//
//   ctx.beginPath();
//   ctx.arc(770, 40, 20, Math.PI * 3 / 2, Math.PI * 2, false);
//   ctx.stroke();
//
//
//   ctx.beginPath();
//   ctx.arc(810, 40, 20, Math.PI, Math.PI / 1.5, true);
//   ctx.stroke();
//   ctx.lineWidth = 1;
//
//
//   //dotted eighth note
//   ctx.fillRect(820, 0, 2, 80);
//   ctx.beginPath();
//   ctx.ellipse(810, 87, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//
//   ctx.lineWidth = 3;
//   ctx.beginPath();
//   ctx.arc(820, 20, 20, Math.PI * 3 / 2, Math.PI * 2, false);
//   ctx.stroke();
//
//
//   ctx.beginPath();
//   ctx.arc(860, 20, 20, Math.PI, Math.PI / 1.7, true);
//   ctx.stroke();
//   ctx.lineWidth = 1;
//
//   ctx.beginPath();
//   ctx.ellipse(830, 87, 3, 3, 50 * Math.PI / 180, 0, 2 * Math.PI);
//   ctx.fill();
//
//
//
// }
