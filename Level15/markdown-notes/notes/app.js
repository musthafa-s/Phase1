// app.js
const readline = require('readline');
const notes = require('./utils/notesManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = `
📚 Markdown Notes Menu:
1. Create Note
2. List Notes
3. View Note
4. Edit Note
5. Delete Note
6. Search Notes
7. Exit
`;

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  while (true) {
    console.log(menu);
    const choice = await ask('Choose an option: ');
    switch (choice.trim()) {
      case '1': {
        const folder = await ask('Folder: ');
        const title = await ask('Note Title: ');
        const content = await ask('Content: ');
        await notes.createNote(folder, title, content);
        break;
      }
      case '2': {
        const folder = await ask('Folder (optional): ');
        await notes.listNotes(folder);
        break;
      }
      case '3': {
        const folder = await ask('Folder: ');
        const title = await ask('Note Title: ');
        await notes.viewNote(folder, title);
        break;
      }
      case '4': {
        const folder = await ask('Folder: ');
        const title = await ask('Note Title: ');
        const newContent = await ask('New Content: ');
        await notes.editNote(folder, title, newContent);
        break;
      }
      case '5': {
        const folder = await ask('Folder: ');
        const title = await ask('Note Title: ');
        await notes.deleteNote(folder, title);
        break;
      }
      case '6': {
        const folder = await ask('Folder (optional): ');
        const query = await ask('Search Query: ');
        await notes.searchNotes(query, folder);
        break;
      }
      case '7':
        rl.close();
        return;
      default:
        console.log('❌ Invalid option. Try again.');
    }
  }
}

main();
