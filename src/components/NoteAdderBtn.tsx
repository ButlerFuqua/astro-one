import { useState } from "react";
import { addNote, notes } from "../noteStore";
import { useStore } from "@nanostores/react";


export default function NoteAdderBtn() {

    const [newNote, setNewNote] = useState<any>('');
    const $notes = useStore(notes)

    const clickHandler = () => {
        addNote(newNote)
        setNewNote('')
    }

    return (
        <>
            {/* <p>{newNote}</p> */}
            <input type="text" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
            <button onClick={clickHandler}>Add Note</button>
            <ul>
                {
                    $notes.map(note => (
                        <li key={note}>{note}</li>
                    ))
                }
            </ul>
        </>
    )

}