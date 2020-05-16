const argv = require('yargs')
    .command('create', 'Create a new task to do', {
        description: {
            demand: true,
            alias: 'd',
            desc: "Description of the task to be done."
        }
    })
    .command('list', 'List the task to do.', {
    })
    .command('update', 'Updates the completion status of a to-do task', {
        number: {
            alias: 'n',
            demand: true,
            desc: "Task number"
        },
        completed: {
            alias: 'c',
            default: true,
            desc: "Mark a task complated."
        }
    })
    .command('delete', 'Delete a task', {
        number: {
            alias: 'n',
            demand: true,
            desc: "Task number"
        },
    })
    .help()
    .argv

module.exports = {
    argv
}