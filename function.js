
import * as fs from 'fs';
import {
	addFunc
} from "./add.js"
const argv = process.argv
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


const checkArgOne = (arg) => {
	if(!commands.includes(arg)){
		console.log(`Error: ${arg} is not a recognized command`)
		return
	}
		taskHandlerFunc(arg)
}


const checkArgTwo = (command,arg) => {
	switch(command) {
		case "add":
			if(!arg){
				console.log(`Error: Expected an argument after the ${command} command e.g mycli add "Buy groceries" or mycli add groceries`)
				return
			}
			addFunc(arg)
  }
}


const taskHandlerFunc = (command) => {
	switch(command) {
		case "add":
      let arg = argv[3]
      checkArgTwo(command,arg);     
	}
}


const writeFunc = (file) => {
	fs.writeFile('task.json', file, function (err) {
		if (err){
			console.log('Error: Encountered error while writing into json file')
			return
		}
		console.log('Task created successfully');
		return
	  })
}

export {
	welcomeFunc,checkArgOne,
	writeFunc
}