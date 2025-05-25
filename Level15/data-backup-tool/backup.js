import { config } from './config.js';
import { performBackup } from './utils/backupManager.js';

(async () => {
  try {
    await performBackup(config.sourceDir, config.backupDir, config.maxBackups);
    console.log('✅ One-time backup completed!');
  } catch (err) {
    console.error('❌ Backup failed:', err.message);
  }
})();
