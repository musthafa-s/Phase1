// utils/notesManager.js
const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');
const { marked } = require('marked');

const baseDir = path.join(__dirname, '../notes');

async function createNote(folder, title, content) {
  try {
    const folderPath = path.join(baseDir, folder);
    await fs.mkdir(folderPath, { recursive: true });
    const filePath = path.join(folderPath, `${title}.md`);
    await fs.writeFile(filePath, content);
    console.log(chalk.green(`✅ Note "${title}" created.`));
  } catch (err) {
    console.error(chalk.red('❌ Error creating note:'), err.message);
  }
}

async function listNotes(folder = '') {
  try {
    const folderPath = path.join(baseDir, folder);
    const files = await fs.readdir(folderPath);
    console.log(chalk.blue(`📄 Notes in "${folder || 'root'}":`));
    files.forEach(f => console.log('•', f));
  } catch (err) {
    console.error(chalk.red('❌ Could not list notes:'), err.message);
  }
}

async function viewNote(folder, title) {
  try {
    const filePath = path.join(baseDir, folder, `${title}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(chalk.yellow(`📝 ${title}:\n`));
    console.log(marked(content));
  } catch (err) {
    console.error(chalk.red('❌ Could not read note:'), err.message);
  }
}

async function editNote(folder, title, newContent) {
  try {
    const filePath = path.join(baseDir, folder, `${title}.md`);
    await fs.writeFile(filePath, newContent);
    console.log(chalk.green(`✏️ Note "${title}" updated.`));
  } catch (err) {
    console.error(chalk.red('❌ Could not update note:'), err.message);
  }
}

async function deleteNote(folder, title) {
  try {
    const filePath = path.join(baseDir, folder, `${title}.md`);
    await fs.unlink(filePath);
    console.log(chalk.green(`🗑️ Note "${title}" deleted.`));
  } catch (err) {
    console.error(chalk.red('❌ Could not delete note:'), err.message);
  }
}

async function searchNotes(query, folder = '') {
  try {
    const folderPath = path.join(baseDir, folder);
    const files = await fs.readdir(folderPath);
    console.log(chalk.cyan(`🔍 Searching for "${query}"...`));
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const content = await fs.readFile(filePath, 'utf-8');
      if (content.includes(query)) {
        console.log(`✔️ Found in: ${file}`);
      }
    }
  } catch (err) {
    console.error(chalk.red('❌ Search failed:'), err.message);
  }
}

module.exports = {
  createNote,
  listNotes,
  viewNote,
  editNote,
  deleteNote,
  searchNotes,
};
