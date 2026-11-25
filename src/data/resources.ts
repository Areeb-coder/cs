import { DriveResource } from '@/types/academic';

export const DRIVE_RESOURCES: DriveResource[] = [
  {
    id: 'drv-folder-1',
    name: 'JMI Sem 3 Primary Resources Folder',
    folderName: 'Root Drive Folder 1',
    driveUrl: 'https://drive.google.com/drive/folders/13-fFhzaVP28zgcC-kpxdHJ8dLIiWIx52?usp=drive_link',
    fileType: 'folder',
    status: 'requires_auth',
    notes: 'Contains subject folders (ADC, C Programming Lab, Discrete, DLT, DSA, Math), Papers and misc., B.Tech. 3rd Sem Syllabus.pdf, 3rd Sem.png.',
  },
  {
    id: 'drv-folder-2',
    name: 'JMI Sem 3 Secondary Archive Folder',
    folderName: 'Root Drive Folder 2',
    driveUrl: 'https://drive.google.com/drive/folders/1Dh3wmS-7sKDtIcrMFTaXgscJ9YcQkou9?usp=drive_link',
    fileType: 'folder',
    status: 'requires_auth',
    notes: 'Contains Subjects@Sem3, Subjects@Sem4, Subjects@Sem5, and semester/year archives.',
  },
  {
    id: 'drv-folder-3',
    name: 'JMI Sem 3 Notes & PYQs Folder',
    folderName: 'Root Drive Folder 3',
    driveUrl: 'https://drive.google.com/drive/folders/1mge5YrSd8dsHe7JKSbsPPcIHDngztaB3?usp=drive_link',
    fileType: 'folder',
    status: 'requires_auth',
    notes: 'Contains Online Resources and supplementary semester materials.',
  },
  {
    id: 'drv-broken-notes-sem3',
    name: 'Notes Sem-3 (Shortcut)',
    folderName: 'Root Drive Folder',
    driveUrl: 'https://drive.google.com/drive/folders/13-fFhzaVP28zgcC-kpxdHJ8dLIiWIx52?usp=drive_link',
    fileType: 'shortcut_broken',
    status: 'broken_shortcut',
    notes: 'Observed shortcut whose original target item was deleted. Flagged for replacement rather than silently substituted.',
  },
];
