import * as React from 'react';
import { NoteType } from '../Models/note.model';
import Notes from './Notes';

type INoteListProps= {
    notes: NoteType[],
    setNote:React.Dispatch<React.SetStateAction<NoteType[]>>
}

const NoteList: React.FunctionComponent<INoteListProps> = ({notes,setNote}) => {
const handleDelete = (id:string)=>{
    setNote(notes.filter(note=>note.id !== id))
}

    const renderNotes = ():JSX.Element[]=>{
       return notes.map(note=>{
           return <Notes key={ note.id} note={note} handleDelete = {handleDelete} />
        })
    }
  return(
    <>
    <h2 className='mt-3' > Notes </h2>
    <div>{ renderNotes() }</div>
    </>
  ) ;
};

export default NoteList;
