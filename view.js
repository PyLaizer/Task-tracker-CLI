import * as fs from 'fs';
import { writeFunc } from './function.js';

export const viewAllFunc = () => {
    fs.readFile('task.json', function(err, data){
        if(err){
            console.log(err.stack)
            return
        }
        const fileObject = JSON.parse(data)
        console.log(fileObject)
        console.log('Task retrieved successfully')
        return;
    })
}

export const viewByStatusFunc = (status) => {
    fs.readFile('task.json', function(err, data){
        if(err){
            console.log(err.stack)
            return
        }
        const tasks = new Object
        const fileObject = JSON.parse(data)
        for (let index in fileObject){
            if(fileObject[index]['status'] == status){
                tasks[index] = fileObject[index]
            }
        }
        console.log(tasks)
        console.log('Task retrieved successfully')
        return;

    })
}