import { atom } from 'nanostores';

export const notes = atom<any[]>([]);

export function addNote(note: any) {
    notes.set([...notes.get(), note])
    console.log('notes', notes.get())
}