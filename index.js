#!/usr/bin/env node

// Imports
import { 
	welcomeFunc, checkArgumentOne
} from './function.js';

const argv = process.argv;
let arg1 = argv[2]

if(!arg1){
	welcomeFunc();
}else{
	checkArgumentOne(arg1);
}






