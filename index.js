const clear = require('clear');
const files = require('./lib/files');
const CustomApp = require('./lib/CustomApp');

let sArr = [
  ['X', 'O', 'O', 'X', 'X', 'X', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'X', 'O', 'X', 'X'],
  ['X', 'X', 'O', 'X', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O', 'X', 'X', 'X'],
  ['O', 'O', 'X', 'X', 'X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X', 'X', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'X', 'O', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'],
];

clear();

const onComplete = () => {
	console.log('this is handler in action...');
}


const start = () => {
	const customApp = new CustomApp();
	customApp.onComplete  = onComplete;
	customApp.start(sArr);
}

start();
//run();
