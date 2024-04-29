import { invoke } from '@tauri-apps/api/tauri';

export const readFile = (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    invoke('get_file_content', { filePath })
      .then((message: unknown) => {
        resolve(message as string);
      })
      .catch((error) => reject(error));
  });
};
