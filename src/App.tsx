import { useState } from 'react';
import './App.css';
import { NoteType } from './Models/note.model';
import  Header from './Components/Header'
import NoteList from './Components/NotesList';
import { Container, Row, Col } from 'react-bootstrap';
import CreateNote from './Components/CreateNotes';

// const noteObject = {
//   id:(new Date).toString(),
//   title:"Meeting",
//   text:"Sheduled for discussion",
//   color:"#dfdfdf",
//   date:(new Date).toString()
// }

function App() {
const [note, setNote] = useState<NoteType[]>([])
  return (
  <>
  <Header/>
  <Container className='mt-5'>
    <Row>
      <Col>
      <NoteList notes={note} setNote={setNote} />
      </Col>
   </Row>
   <Row>
      <Col>
      <CreateNote notes={note} setNote={setNote}  />
      </Col>
   </Row>
  </Container>
  </>
  );
}

export default App;
