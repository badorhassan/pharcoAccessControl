// resources/js/Pages/Create.jsx
import React, { useState } from 'react';
import { router } from '@inertiajs/react' // We need to import this router for making POST request with our form

export default function Create() {
    const [values, setValues] = useState({ // Form fields
        title: "",
        body: ""
    });

    // We will use function below to get
    // values from form inputs
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    // This function will send our form data to
    // store function of PostContoller
    function handleSubmit(e) {
        e.preventDefault()
        router.post('/posts', values)
    }

    return (
        <>
            <h1>Create Post</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                {/* Pay attention how we create here input fields */}
                <label htmlFor="title">Title:</label>
                <input className='form-control' id="title" value={values.title} onChange={handleChange} />

                <label htmlFor="body">Body:</label>
                <textarea className='form-control' id="body" value={values.body} onChange={handleChange}></textarea>
                <button type="submit" className="btn btn-primary mb-3">Create</button>
            </form>
        </>
    )
}