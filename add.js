
// Imports
import * as fs from 'fs';
import { 
	writeFunc 
} from './function.js';

const addFunc = (task) => {
	fs.stat("task.json", (error, stats) => {
		if(error){
			fs.open('task.json', 'w', function (err, file) {
				if (err){
					console.log('Error: Could not create task json file')
					return
				}
				console.log('Created task json file !!!');
				
				const fileObject = new Object();
				let id = (1).toString()
				fileObject[id] = {
						"id":id,
						"description":task,
						"status":"todo",
						"created_at":new Date().toString(),
						"updated_at":new Date().toString(),
				}

				const taskJson = JSON.stringify(fileObject)
				writeFunc(taskJson, 'add')
			});
		}else {
			fs.readFile('task.json', function(err, data) {
				if(err){
						console.log('Error: Encountered error while trying to read task.json file')
						return
				}
				const fileObject = JSON.parse(data)
				let objectLength = Object.keys(fileObject).length;
				let id = (objectLength + 1).toString()
				fileObject[id] = {
						"id":id,
						"description":task,
						"status":"todo",
						"created_at":new Date().toString(),
						"updated_at":new Date().toString(),
				}

				const taskJson = JSON.stringify(fileObject)
				writeFunc(taskJson, 'add')
			});
		}
	});  
}

export {
	addFunc
}