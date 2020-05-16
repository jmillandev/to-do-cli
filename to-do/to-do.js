const fs = require('fs')
const colors = require('colors')

let listToDo

const saveDB = _ => {
    let data = JSON.stringify(listToDo)
    fs.writeFile('./db/data.json', data, err => {
        if (err) {
            throw new Error("Don't save data.", err)
        }
    })
}

try {
    listToDo = require('../db/data.json')
} catch (error) {
    listToDo = [];
}

const createTask = (description) => {
    let toDo = {
        description,
        completed: false,
    }
    listToDo.push( toDo )
    saveDB() 
    return toDo

}

const listTasks = _ => {
    Array.from(listToDo).forEach( ( task, i ) => {
        console.log(`====== Task ${i+1} =======\n`.cyan)
        console.log(`Description: ${task.description}`)
        if (task.completed) console.log('Completed:',`${task.completed}\n`.green)
        else console.log('Completed:',`${task.completed}\n`.red)
    });
    console.log("====================".cyan)
}

const updateTask = (taskNumber, completed=true) => {
    return new Promise( (resolve, reject) => {
        if (taskNumber > listToDo.length) {
            return reject('Task not found')
        }
        listToDo[taskNumber-1].completed = completed
        saveDB()
        resolve(listToDo[taskNumber-1])
    })
}

const deleteTask = (taskNumber) => {
    return new Promise( (resolve, reject) => {
        if ((taskNumber > listToDo.length) && (taskNumber > 0)) {
            return reject('Task not found')
        }
        task = listToDo.splice(taskNumber-1,1)
        saveDB()
        resolve(task[0])
    })
}

module.exports = {
    createTask,
    listTasks,
    updateTask,
    deleteTask
}