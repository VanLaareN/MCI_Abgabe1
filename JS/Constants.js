const stimulusElement = document.getElementById("stimulus");
const timeElement = document.getElementById('time');
const countElement = document.getElementById('count');
const meanElement = document.getElementById('mean');
const stdDevElement = document.getElementById('sd');
const containerElement = document.getElementById('container');
const errorRateElement = document.getElementById('errorRate');
const purpleResultElement = document.getElementById("purpleResults");
const orangeResultElement = document.getElementById("orangeResults");
const instructionElement = document.getElementById("instruction");

const SIZE = 200;

let times = [];
let purpleTimes = [];
let orangeTimes = [];
let stimulusTimestamp;
let experimentActive = false;