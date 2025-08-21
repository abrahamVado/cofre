// cofre/src/index.ts
// SUPER COMMENTS — IMPLEMENTATION ROADMAP
import { ipcMain } from 'electron';
const NS = 'cofre' as const;
export function activate() {
  ipcMain.handle(`${NS}:ping`, () => ({ ok: true, purpose: "Encrypted vault for local files and data (per‑file keys, hybrid recipients)." }));
}
export function deactivate() {
  ipcMain.removeHandler(`${NS}:ping`);
}