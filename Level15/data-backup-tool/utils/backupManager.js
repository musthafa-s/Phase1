import fs from 'fs';
import path from 'path';
import { log } from './logger.js';

export const performBackup = async (sourceDir, backupDir, maxBackups) => {
  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFolder = path.join(backupDir, `backup-${timestamp}`);

    await fs.promises.mkdir(backupFolder, { recursive: true });

    const copyRecursive = async (src, dest) => {
      const entries = await fs.promises.readdir(src, { withFileTypes: true });

      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
          await fs.promises.mkdir(destPath, { recursive: true });
          await copyRecursive(srcPath, destPath);
        } else {
          await fs.promises.copyFile(srcPath, destPath);
        }
      }
    };

    await copyRecursive(sourceDir, backupFolder);
    await log(`Backup completed to ${backupFolder}`);

    const backups = (await fs.promises.readdir(backupDir))
      .filter(name => name.startsWith('backup-'))
      .sort()
      .reverse();

    while (backups.length > maxBackups) {
      const toDelete = backups.pop();
      const fullPath = path.join(backupDir, toDelete);
      await fs.promises.rm(fullPath, { recursive: true, force: true });
      await log(`Deleted old backup: ${fullPath}`);
    }
  } catch (err) {
    await log(`Backup failed: ${err.message}`);
    throw err;
  }
};
