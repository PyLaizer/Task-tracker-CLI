#!/usr/bin/env node

// Imports
import { welcomeFunc } from './function.js';
import * as fs from 'fs';


const argv = process.argv;

const commands = [
  "add", "update", "delete", "mark-in-progress", "mark-done", "list"
];

let firstArg = argv[2]

if(!firstArg){
	welcomeFunc();
}else{
	if(!commands.includes(firstArg)){
		console.log(`Error: ${firstArg} is not a recognized command`)
	}
}






