
import * as fs from 'fs';
import { writeFunc } from './function.js';

export const updateFunc = (index, value) => {
    fs.readFile('task.json', function(err, data){
        if(err){
            console.log(err.stack)
            return
        }
        const fileObject = JSON.parse(data)
		let objectKeys = Object.keys(fileObject)
        if(!objectKeys.includes(index)){
            console.log("Could not find id, try again with another id")
            return
        }
        const item = fileObject[index];
        item['description'] = value;

        const taskJson = JSON.stringify(fileObject);
        writeFunc(taskJson, 'update');
        
    })
}