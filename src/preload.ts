import { contextBridge, ipcRenderer } from 'electron';
const NS = 'cofre' as const;
const api = { ping: () => ipcRenderer.invoke(`${NS}:ping`) };
contextBridge.exposeInMainWorld(NS, api);