//Note Guide
//
//0   whole rest
//1   dotted half rest
//2   half rest
//3   dotted quarter rest
//4   quarter rest
//5   quarter-note triplet rest
//6   dotted eighth rest
//7   eighth rest
//8   eighth-note triplet rest
//9   16th rest
//10  half Note
//11  dotted quarter-note
//12  quarter-note
//13  quarter-note triplet
//14  dotted eighth Note
//15  eighth-note
//16  eighth-note triplet
//17  One 16th Note
//18  Two 16th Notes
//19  Three sextuplets
//20  Two sextuplets
//21  Three 9let notes
//22  4/3 let notes



// 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21  22
var probMatrix = /*0*/ [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*1*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*2*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*3*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*4*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*5*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*6*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*7*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*8*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*9*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*10*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*11*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*12*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*13*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  /*14*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*15*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*16*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3 / 31, 0, 0, 20 / 31, 0, 7 / 31, 0, 1 / 31],
  /*17*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .99, .01, 0, 0],
  /*18*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6 / 11, 0, 5 / 11, 0, 0],
  /*19*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /*20*/
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .5, 0, .01, 0, .49]
];

//0  1  2  3  4  5
var repeatMatrix = /*0*/ [
  [1, 0, 0, 0, 0, 0],
  /*1*/
  [1, 0, 0, 0, 0, 0],
  /*2*/
  [1, 0, 0, 0, 0, 0],
  /*3*/
  [1, 0, 0, 0, 0, 0],
  /*4*/
  [1, 0, 0, 0, 0, 0],
  /*5*/
  [1, 0, 0, 0, 0, 0],
  /*6*/
  [1, 0, 0, 0, 0, 0],
  /*7*/
  [1, 0, 0, 0, 0, 0],
  /*8*/
  [1, 0, 0, 0, 0, 0],
  /*9*/
  [1, 0, 0, 0, 0, 0],
  /*10*/
  [1, 0, 0, 0, 0, 0],
  /*11*/
  [1, 0, 0, 0, 0, 0],
  /*12*/
  [1, 0, 0, 0, 0, 0],
  /*13*/
  [1, 0, 0, 0, 0, 0],
  /*14*/
  [1, 0, 0, 0, 0, 0],
  /*15*/
  [1, 0, 0, 0, 0, 0],
  /*16*/
  [3 / 33, 3 / 33, 27 / 33, 0, 0, 0],
  /*17*/
  [0, 0, 0, 0, 0, 0],
  /*18*/
  [0, 0, 0, 9 / 12, 0, 3 / 12],
  /*19*/
  [1, 0, 0, 0, 0, 0],
  /*20*/
  [0, 0, 0, 1, 0, 0]
];





//.................0  1  2   3   4    5     6   7     8   9   10  11  12   13   14  15   16    17   18   19    20
var beatLengths = [4, 3, 2, 1.5, 1, 2/3, .75, .5, 1/3, .25, 2, 1.5, 1,2/3, .75, .5,1/3, .25, 1/6, 2/9, .375];

var canvasHeight = 160;
var paddingTop = 70;
var noteLinePadding = paddingTop - 30;
var noteNotepadding = noteLinePadding + 87;
var restPadding = 110;
var canvasWidth = 1800;
var barsPerLine = 4;
var numBars = 1;
var bars = []

var qRest = new Image(50, 50);
qRest.src = "qRest.png";
var eRest = new Image(40, 40);
eRest.src = "eRest.png";
var sRest = new Image(25, 40);
sRest.src = "sRest.png";

//make Staffs
for (var i = 0; i < numBars; i += barsPerLine)
  makeStaff();

//get canvases for each line
var canvas = document.querySelectorAll("canvas");
var ctx = [];
for (var i = 0; i < canvas.length; i++)
  ctx[i] = canvas[i].getContext("2d");


//Draw Staffs
drawStaffs();

//Give bars notes
fillInBars();

//Draws bars on staffs
drawBarsWithNotes();

//Test Draw Notes
// drawEveryNote();

//Test Draw Rests
// drawEveryRest();

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
function fillInBars() {
  for (var i = 0; i < numBars; i++) {
    bars[i] = makeBar(4);

    var prevNote;
    if (i == 0)
      prevNote = 16; //start with a triplet, ensure this note has probabilities to continue chain

      tempCout = 0;
    while (bars[i].availableBeats > .1 && tempCout < 4) {
      // tempCout += 1;
      // console.log("beats left - " + bars[i].availableBeats);
      // console.log("prevNote - " + prevNote);
      // console.log("prevNote length - " + beatLengths[prevNote]);
      if (prevNote == 20)
        prevNote = 16;
      //LMFAO CHANGE THIS TOO

      var prob = Math.random();
      var index = 0;
      var sum = probMatrix[prevNote][index];
      while (sum < prob) {
        index++;
        sum += probMatrix[prevNote][index];
      }
      if (bars[i].availableBeats - beatLengths[index] < -.1) {
        console.log("chosen beat too long - " + beatLengths[index] + "- availableBeats-beatLengths[index] = " + (bars[i].availableBeats - beatLengths[index]));
        console.log("prev note = " + prevNote);
          if(prob > 6/11) console.log("prob = " + prob);
          else console.log("prob is a bitch");
          prob = Math.random();
      } else if (!validPartial(bars[i].availableBeats, index)) {
        console.log("invalid partial for index: " + index + " - repicking...");
      } else {
        var repeatRand = Math.random();
        var repeatAmount = 0;
        try {
          var repeatSum = repeatMatrix[index][repeatAmount];
        } catch (e) {
          console.log("invalid index - " + index);
          index = 16;
          //CHANGE THIS AT SOME POINT
        }

        while (repeatSum < repeatRand) {
          repeatAmount += 1;
          repeatSum += repeatMatrix[index][repeatAmount];
          // console.log(repeatAmount);
        }
        while (repeatAmount >= 0 && bars[i].availableBeats - beatLengths[index] > .1) {
          var insertionSpot = bars[i].notes.length;
          bars[i].notes[insertionSpot] = index;
          bars[i].availableBeats -= beatLengths[index];
          prevNote = index;
          repeatAmount -= 1;
        }
      }
      console.log("availableBeats: " + bars[i].availableBeats);
    }


  }
}

function validPartial(beatsLeft, index) {
  switch (index) {
    case 0:
      if (beatsLeft == 4)
        return true;
      else
        return false;
    case 1:
      if (beatsLeft >= 2.7 && isDownbeat(beatsLeft))
        return true;
      else
        return false;
    case 2:
    case 10:
      if (beatsLeft >= 1.8 && isDownbeat(beatsLeft))
        return true;
      else
        return false;
    case 3:
    case 11:
      if (beatsLeft >= 1.3 && is16thPartial(beatsLeft))
        return true;
      else
        return false;
    case 4:
    case 12:
      if (beatsLeft >= .9 && is16thPartial(beatsLeft))
        return true;
      else
        return false;
    case 5:
    case 13:
      if (beatsLeft >= .6 && isTripletPartial(beatsLeft))
        return true;
      else
        return false;
    case 6:
    case 14:
      if (beatsLeft >= .6 && is16thPartial(beatsLeft))
        return true;
      else
        return false;
    case 7:
    case 15:
      if (beatsLeft >= .35 && is16thPartial(beatsLeft))
        return true;
      else
        return false;
    case 8:
    case 16:
      if (isTripletPartial(beatsLeft))
        return true;
      else
        return false;
    case 9:
    case 17:
      if (is16thPartial(beatsLeft))
        return true;
      else
        return false;
    case 18:
      if (isSextupletPartial(beatsLeft))
        return true;
      else
        return false;
    case 19:
      if (isTripletPartial(beatsLeft))
        return true;
      else
        return false;
    case 20:
      if (beatsLeft >= 1.45 && isDownbeat(beatsLeft))
        return true;
      else
        return false;
    default:
      console.log("Unkonwn index checked for valid partial - " + index);

  }
}

function isDownbeat(beats) {
  var sub = Math.floor(beats%1*1000)/1000;
  // console.log("downbeat mod = "+sub);
  if( sub < .06 || sub > .94 )
    return true;
  return false;
}
function isAndBeat(beats) {
  var sub = Math.floor(beats%1*1000)/1000;
  // console.log("andBeat mod = "+sub);
  if( sub  > .45 && sub < 0.55)
    return true;
  return false;
}
function isTripletPartial(beats) {
  var sub = Math.floor(beats%1*1000)/1000;
  // console.log("triplet partial mod = "+sub);
  if( (sub < .37 && sub > .29) ||
      (sub > .60 && sub < .72))
    return true;
  return isDownbeat(beats);
}
function isSextupletPartial(beats) {
  var sub = Math.floor(beats%1*1000)/1000;
  // console.log("sextuplet partial mod = "+sub);
  if( (sub > .10 && sub < .22) ||
      (sub >  .77 && sub < .89))
    return true;
  return (isTripletPartial(beats) || isAndBeat(beats));
}
function is16thPartial(beats) {
  var sub = Math.floor(beats%1*1000)/1000;
  console.log("16th partial sub = "+sub);
  if( (sub < .3 && sub > .20) ||
      (sub < .8 && sub > .7))
    return true;
  return (isAndBeat(beats) || isDownbeat(beats));
}

//Draw all bars and notes
function drawBarsWithNotes() {
  for (var b = 0; b < numBars; b++) {
    var noteX = (canvasWidth / 1500) * 380 * (b % barsPerLine) + 40;
    var spacer = (canvasWidth / 1500) * 310 / bars[b].notes.length
    if (Math.floor(b / barsPerLine) !== lineNumber)
      noteX = 380 * (b % barsPerLine) + 40;

    var lineNumber = Math.floor(b / barsPerLine);

    for (var i = 0; i < bars[b].notes.length; i++) {
      switch (bars[b].notes[i]) {
        case 0:
          drawRest('w', ctx[lineNumber], noteX);
          break;
        case 1:
          drawRest('dh', ctx[lineNumber], noteX);
          break;
        case 2:
          drawRest('h', ctx[lineNumber], noteX);
          break;
        case 3:
          drawRest('dq', ctx[lineNumber], noteX);
          break;
        case 4:
          drawRest('q', ctx[lineNumber], noteX);
          break;
        case 5:
          drawRest('qt', ctx[lineNumber], noteX);
          break;
        case 6:
          drawRest('de', ctx[lineNumber], noteX);
          break;
        case 7:
          drawRest('e', ctx[lineNumber], noteX);
          break;
        case 8:
          drawRest('et', ctx[lineNumber], noteX);
          break;
        case 9:
          drawRest('s', ctx[lineNumber], noteX);
          break;
        case 10:
          drawNote('h', ctx[lineNumber], noteX);
          break;
        case 11:
          drawNote('dq', ctx[lineNumber], noteX);
          break;
        case 12:
          drawNote('q', ctx[lineNumber], noteX);
          break;
        case 13:
          drawNote('qt', ctx[lineNumber], noteX);
          break;
        case 14:
          drawNote('de', ctx[lineNumber], noteX);
          break;
        case 15:
          drawNote('e', ctx[lineNumber], noteX);
          break;
        case 16:
          drawNote('et', ctx[lineNumber], noteX);
          break;
        case 17:
          drawNote('s', ctx[lineNumber], noteX);
          break;
        case 18:
          drawNote('sx', ctx[lineNumber], noteX);
          break;
        case 19:
          drawNote('n', ctx[lineNumber], noteX);
          break;
        case 20:
          drawNote('4', ctx[lineNumber], noteX);
          break;
        default:
          console.log("Unkown note index - " + bars[b].notes[i]);
      }
      noteX += spacer;
    }
  }
}

//Create staff
function makeStaff() {
  document.querySelector('body').insertAdjacentHTML('beforeend', "<canvas width=" + canvasWidth + 'px height=' + canvasHeight + "px style='width: " + canvasWidth + "; height: " + canvasHeight + ";'></canvas>");
}

//Draw every staff
function drawStaffs() {
  for (var c = 0; c < ctx.length; c++) {
    for (var i = paddingTop; i <= paddingTop + 90; i += 90 / 4) {
      ctx[c].moveTo(0, i);
      ctx[c].lineTo(canvasWidth + 200, i);
      ctx[c].stroke();
    }
    for (var i = 0; i <= canvasWidth + 100; i += canvasWidth / barsPerLine) {
      ctx[c].fillRect(i - 1.5, paddingTop, 3, 90);
    }
  }
}

//Draw note of 'type' with context ctx at x-coordinate x
function drawNote(type, ctx, x) {
  switch (type) {
    case 'h':
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.stroke();
      break;
    case 'dq':
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(x + 20, noteNotepadding, 3, 3, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case 'q':
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case 'qt':
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();
      ctx.font = "20px serif";
      ctx.fillText("-3-", x, 33);
      break;
    case 'de':
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 20, 20, Math.PI * 3 / 2, Math.PI * 2, false);
      ctx.stroke();


      ctx.beginPath();
      ctx.arc(x + 50, noteLinePadding + 20, 20, Math.PI, Math.PI / 1.7, true);
      ctx.stroke();
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.ellipse(x + 20, noteNotepadding, 3, 3, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case 'e':
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 20, 20, Math.PI * 3 / 2, Math.PI * 2, false);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + 50, noteLinePadding + 20, 20, Math.PI, Math.PI / 1.7, true);
      ctx.stroke();

      ctx.lineWidth = 1;
      break;
    case 'et':
      ctx.font = "20px serif";
      ctx.fillText("-3-", x, 33);
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 20, 20, Math.PI * 3 / 2, Math.PI * 2, false);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + 50, noteLinePadding + 20, 20, Math.PI, Math.PI / 1.3, true);
      ctx.stroke();

      ctx.lineWidth = 1;
      break;
    case 's':
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 20, 20, Math.PI * 3 / 2, Math.PI * 2.2, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 40, 20, Math.PI * 3 / 2, Math.PI * 2, false);
      ctx.stroke();


      ctx.beginPath();
      ctx.arc(x + 50, noteLinePadding + 40, 20, Math.PI, Math.PI / 1.5, true);
      ctx.stroke();
      ctx.lineWidth = 1;
      break;
    case 'sx':
      ctx.font = "20px serif";
      ctx.fillText("-6-", x, 33);
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 20, 20, Math.PI * 3 / 2, Math.PI * 2.2, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 40, 20, Math.PI * 3 / 2, Math.PI * 2, false);
      ctx.stroke();


      ctx.beginPath();
      ctx.arc(x + 50, noteLinePadding + 40, 20, Math.PI, Math.PI / 1.5, true);
      ctx.stroke();
      ctx.lineWidth = 1;
      break;
    case 'n':
      ctx.font = "20px serif";
      ctx.fillText("-9-", x, 33);
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 20, 20, Math.PI * 3 / 2, Math.PI * 2.2, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 40, 20, Math.PI * 3 / 2, Math.PI * 2, false);
      ctx.stroke();


      ctx.beginPath();
      ctx.arc(x + 50, noteLinePadding + 40, 20, Math.PI, Math.PI / 1.5, true);
      ctx.stroke();
      ctx.lineWidth = 1;
      break;
    case '4':
      ctx.font = "20px serif";
      ctx.fillText("4/3", x, 33);
      ctx.fillRect(x + 10, noteLinePadding, 2, 80);
      ctx.beginPath();
      ctx.ellipse(x, noteNotepadding, 8, 12, 50 * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 20, 20, Math.PI * 3 / 2, Math.PI * 2.2, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x + 10, noteLinePadding + 40, 20, Math.PI * 3 / 2, Math.PI * 2, false);
      ctx.stroke();


      ctx.beginPath();
      ctx.arc(x + 50, noteLinePadding + 40, 20, Math.PI, Math.PI / 1.5, true);
      ctx.stroke();
      ctx.lineWidth = 1;
      break;
    default:
      console.log("Not a known note - " + type);

  }
}

//Draw rest of 'type' with context ctx at x-coordinate x
function drawRest(type, ctx, x) {
  switch (type) {
    case 'w':
      ctx.fillRect(x, restPadding, 50, 5);
      ctx.fillRect(x + 10, restPadding + 5, 29, 8);
      break;
    case 'dh':
      ctx.fillRect(x, restPadding, 50, 5);
      ctx.fillRect(x + 10, restPadding - 5, 29, 10);
      ctx.beginPath();
      ctx.ellipse(x + 55, restPadding, 3, 3, 5, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'h':
      ctx.fillRect(x, restPadding, 50, 5);
      ctx.fillRect(x + 10, restPadding - 5, 29, 10);
      break;
    case 'dq':
      ctx.drawImage(qRest, x, restPadding - 25, 50, 50);
      ctx.beginPath();
      ctx.ellipse(x + 43, restPadding, 3, 3, 5, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'q':
      ctx.drawImage(qRest, x, restPadding - 25, 50, 50);
      break;
    case 'qt':
      ctx.drawImage(qRest, x, restPadding - 25, 50, 50);
      ctx.font = "20px serif";
      ctx.fillText("-3-", x + 13, noteLinePadding);

      break;
    case 'de':
      //WTFFFFFF
      // ctx.drawImage(eRest,x,50,25,40);
      ctx.fillText("8thR", x, restPadding);
      ctx.beginPath();
      ctx.ellipse(x + 50, restPadding - 5, 3, 3, 5, 0, Math.PI * 2);
      ctx.fill();

      break;
    case 'e':
      ctx.fillText("8thR", x, restPadding);
      // ctx.drawImage(eRest,x,50,50,50);
      break;
    case 'et':
      // ctx.drawImage(eRest,x,50);
      //Draw this stuff once after drawing all music
      ctx.fillText("8thR", x, restPadding);
      ctx.font = "20px serif";
      ctx.fillText("-3-", x, noteLinePadding);
      break;
    case 's':
      ctx.drawImage(sRest, x, restPadding - 20, 25, 40);
      break;
    default:
      console.log("unknown rest type - " + type);

  }
}

//Draws one of every note on first line
function drawEveryNote() {
  drawNote('h', ctx[0], 50); //10
  drawNote('dq', ctx[0], 100); //11
  drawNote('q', ctx[0], 150); //12
  drawNote('qt', ctx[0], 200); //13
  drawNote('de', ctx[0], 250); //14
  drawNote('e', ctx[0], 300); //15
  drawNote('et', ctx[0], 350); //16
  drawNote('s', ctx[0], 400); //17
  drawNote('sx', ctx[0], 450); //18
  drawNote('n', ctx[0], 500); //19
  drawNote('4', ctx[0], 550); //20

}

//Draws one of every rest on first line
function drawEveryRest() {
  drawRest('w', ctx[0], 50); //0
  drawRest('dh', ctx[0], 120); //1
  drawRest('h', ctx[0], 190); //2
  drawRest('dq', ctx[0], 260); //3
  drawRest('q', ctx[0], 330); //4
  drawRest('qt', ctx[0], 470); //5
  drawRest('de', ctx[0], 540); //6
  drawRest('e', ctx[0], 610); //7
  drawRest('et', ctx[0], 670); //8
  drawRest('s', ctx[0], 750); //9
}
