import React from 'react'
import {actionCreatorNewNote} from "../reducers/anecdoteReducer";

const NewAnecdoteForm = ({store}) => {

    const addAnecdoteHandler = (event) => {
        event.preventDefault();

        if (!event.target.anecdoteBody.value) {
            return;
        }

        store.dispatch(actionCreatorNewNote(event.target.anecdoteBody.value));

        event.target.anecdoteBody.value = '';
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdoteHandler}>
                <div><input name={'anecdoteBody'}/></div>
                <button>create</button>
            </form>
        </div>
    );
};

export default NewAnecdoteForm;