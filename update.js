
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
        item['updated_at'] = new Date().toString();

        const taskJson = JSON.stringify(fileObject);
        writeFunc(taskJson, 'update');
        
    })
}

export const updateStatusFunc = (index, status) => {
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
        
        switch(status){
            case "mark-in-progress":
                item['status'] = status;
                item['updated_at'] = new Date().toString();
                break;
            case "mark-done":  
                item['status'] = status;
                item['updated_at'] = new Date().toString();
                break;
        }

        const taskJson = JSON.stringify(fileObject);
        writeFunc(taskJson, 'update');
        
    })
}
