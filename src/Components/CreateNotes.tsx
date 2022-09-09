import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { NoteType } from '../Models/note.model';


type ICreateNoteProps= {
    notes: NoteType[],
    setNote:React.Dispatch<React.SetStateAction<NoteType[]>>
}

const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({notes, setNote}) => {
    const [error, setError] = React.useState<string>()

    const titleRef = React.useRef<HTMLInputElement| null>(null)
    const textRef = React.useRef<HTMLTextAreaElement | null>(null)
    const colorRef = React.useRef<HTMLInputElement| null>(null)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void=>{
       e.preventDefault();
       if(titleRef.current?.value === "" || textRef.current?.value === ""){
        return setError("All fields are mandatory")
       }
       setError("");
       setNote([...notes,{
        id:(new Date()).toString(),
        title: (titleRef.current as HTMLInputElement ).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date()).toString()
       }]);

     (titleRef.current as HTMLInputElement ).value = "";
       (textRef.current as HTMLTextAreaElement).value = ""

    }
   

  return(
    <>
    <h2>Create Notes</h2>
    {error && <Alert variant='danger' >{error}</Alert> }
    <Form className='mt-3 mb-3' onSubmit={(e)=> handleSubmit(e)} >
<Form.Group className='mt-3' controlId='formBasicTitle'>
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter Title Here..." ref={titleRef} />
</Form.Group>
<Form.Group className='mt-3' controlId='formBasicText'>
    <Form.Label>Text</Form.Label>
    <Form.Control  placeholder="Enter Text Here..." as='textarea' rows={3} ref={textRef}/>
</Form.Group>
<Form.Group className='mt-3'>
    <Form.Label htmlFor='colorInput' >Color</Form.Label>
    <Form.Control type="color" id='colorInput' defaultValue='#dfdfdf' title='Choose your color' ref={colorRef}/>
</Form.Group>
<Button type='submit' variant='primary' className='mt-3' >Submit</Button>
    </Form>
    
    </>
  ) ;
};

export default CreateNote;
