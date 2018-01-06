import { ipcRenderer as ipc } from 'electron';

export const getScreenSize = () => {
    ipc.send('screensize:get');
};