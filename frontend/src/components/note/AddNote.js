import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = (props) => {
    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"", tag:""})
        props.showAlert("Note added successfully", "success");
    }
    const handler = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container my-3">
                <h3 className='text-center'>"Capturing Moments, Crafting Memories: Your Notes, Your Story"</h3>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className='form-label'>Title</label>
                        <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={handler} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className='form-label'>Description</label>
                        <input type="text" className="form-control" id="description"  value={note.description} name='description' onChange={handler} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className='form-label'>Tag</label>
                        <input type="text" className="form-control" id="tag"  value={note.tag} name='tag' onChange={handler} />
                    </div>
                    <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote