import { invoke } from '@tauri-apps/api/tauri';

export const writeFile = (
  filePath: string,
  content: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    invoke('write_file', { filePath, content }).then((message: unknown) => {
      if (message === 'OK') {
        resolve(message as string);
      } else {
        reject('ERROR');
      }
    });
  });
};
