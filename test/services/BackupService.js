import {expect} from 'chai';
import BackupService from '../../src/services/BackupService';

describe('BackupService', async () => {
  let backupService;
  let walletContractService;

  before(async () => {
    walletContractService = {
      walletContract: {
        name: 'kyle'
      }
    };
    backupService = new BackupService(walletContractService);
  });

  describe('Backup Codes', async () => {
    it('generates one backup code', async () => {
      await backupService.generateBackupCodes(1);
      expect(backupService.backupCodes.length).to.eq(1);
      expect(backupService.backupCodes[0]).to.match(/^\w+(-\w+)+$/);
    });

    it('generates more than one backup code', async () => {
      await backupService.generateBackupCodes(2);
      expect(backupService.backupCodes.length).to.eq(3);
    });

    it('clears backup codes', async () => {
      await backupService.clearBackupCodes();
      expect(backupService.backupCodes.length).to.eq(0);
    });
  });
});
