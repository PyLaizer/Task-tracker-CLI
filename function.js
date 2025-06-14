
import * as fs from 'fs';
import {
	addFunc
} from "./add.js"
import { updateFunc } from './update.js';

const argv = process.argv;

const arg2 = argv[3]
const arg3 = argv[4]
const arg4 = argv[5]

const commands = [
	"add", "update", "delete", "mark-in-progress", "mark-done", "list"
];
  
const welcomeFunc = () => {
	console.log("*******  Welcome To Task Tracker CLI  *******");
	console.log("A cli application to track your task and manage your to-do list")
	console.log()
	console.log(" Commands:                 Description:                                           Example")
	console.log()
	console.log('  - add                    adds a new task                                        add "Buy groceries" ')
	console.log('  - update                 updates a task via its id                              update 1 "Buy groceries and cook dinner" ')
	console.log('  - delete                 deletes a task via its id                              delete 1 ')
	console.log('  - mark-in-progress       marks a task as "in-progress" via its id               mark-in-progress 1 ')
	console.log('  - mark-done              marks a task as "done" via its id                      mark-done 1 ')
	console.log('  - list:                  returns a list of all tasks                            list')
	console.log('  - list done              returns a list of tasks with status "done"             list done')
	console.log('  - list todo              returns a list of tasks with status "todo"             list todo')
	console.log('  - list in-progress       returns a list of tasks with status "in-progress"      list in-progress')
	return 
}

const checkArgumentOne = (arg1) => {
	if(!commands.includes(arg1)){
		console.log(`Error: ${arg1} is not a recognized command`)
		return
	}
	checkNextArguments(arg1,arg2,arg3,arg4)
}


const checkNextArguments = (command,arg2,arg3,arg4) => {
	switch(command) {

		case "add":
			if(!arg2){
				console.log(`Error: Expected an argument after the ${command} command e.g mycli add <task>`)
				return
			}
			addFunc(arg2);

		case "update":
			if(!arg2){
				console.log(`Error: Expected an argument after the ${command} command e.g mycli update 1 <task>`)
				return
			}
			const isValidId = /^\d+$/.test(arg2);
			if(!isValidId){
				console.log(`Error: Argument after the ${command} command is not a valid integer.`)
				return
			}
			if(!arg3){
				console.log(`Error: Missing task argument. Expected task argument after id:  ${arg2}`)
				return
			}
			updateFunc(arg2,arg3)

			

  }
}


// const taskHandlerFunc = (command) => {
// 	switch(command) {
// 		case "add":
// 			checkArgTwo(command,arg1);   
// 	  case "update":
// 			checkArgTwo(command,arg1); 
// 	}
// }


const writeFunc = (file,operation) => {
	fs.writeFile('task.json', file, function (err) {
		if (err){
			console.log('Error: Encountered error while writing into json file')
			return
		}

		switch(operation){
			case 'add':
				console.log('Task created successfully');
				return
			case 'update':
				console.log('Task updated successfully');
				return		
		}

	  })
}

export {
	welcomeFunc,checkArgumentOne,
	writeFunc
}