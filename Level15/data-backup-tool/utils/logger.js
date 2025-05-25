import fs from 'fs';
import path from 'path';

const logPath = path.join('logs', 'backup-log.txt');

export const log = async (message) => {
  const time = new Date().toISOString();
  const line = `[${time}] ${message}\n`;
  await fs.promises.appendFile(logPath, line, 'utf-8');
};
