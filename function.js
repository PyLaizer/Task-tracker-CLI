
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

export {
	welcomeFunc
}