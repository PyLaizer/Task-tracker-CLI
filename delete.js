
// Imports
import * as fs from 'fs';
import { writeFunc } from './function.js';

export const deleteFunc = (index) => {
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

        delete fileObject[index];

        const taskJson = JSON.stringify(fileObject);
        writeFunc(taskJson, 'delete');
       
        
    })
}