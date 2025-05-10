#!/usr/bin/env node

// Imports
import { 
	welcomeFunc, checkArgOne 
} from './function.js';


const argv = process.argv;

let arg = argv[2]

if(!arg){
	welcomeFunc();
}else{
	checkArgOne(arg.toLowerCase());
}






