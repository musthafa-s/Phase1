
import { addTask, listTasks, updateTask, deleteTask } from '../../task-manager-cli/taskController.jsx';

const [,, command, ...args] = process.argv;

switch (command) {
  case 'add': {
    const [title, description, status = 'pending', dueDate = null] = args;
    await addTask({ title, description, status, dueDate });
    break;
  }
  case 'list': {
    const [filter] = args;
    await listTasks(filter);
    break;
  }
  case 'update': {
    const [id, key, value] = args;
    await updateTask(parseInt(id), key, value);
    break;
  }
  case 'delete': {
    const [id] = args;
    await deleteTask(parseInt(id));
    break;
  }
  default:
    console.log(`
    Available commands:
    - add "title" "description" [status] [dueDate]
    - list [status]
    - update <id> <field> <value>
    - delete <id>
    `);
}
