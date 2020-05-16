const {argv} = require('./config/yargs')
const toDo = require('./to-do/to-do')

const comando = argv._[0]

switch ( comando ) {
    case 'create':
        task = toDo.createTask(argv.description)
        console.log('New task:', task)
        break;

    case 'list':
        toDo.listTasks()
        break;
    case 'update':
        toDo.updateTask(argv.number, argv.completed)
            .then( task => console.log('Task updated:', task))
            .catch( err => console.error(err) )
        break;

    case 'delete':
        toDo.deleteTask(argv.number)
            .then( task => console.log('Task delete:', task))
            .catch( err => console.error(err) )
        break;
    default:
        console.log('Comando invalido')
        break;
}