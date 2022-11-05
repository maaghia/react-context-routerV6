import React, { useContext, useState } from 'react'

export default function AddWish() {

    const [title, setTitle] = useState('');

    const updateTitle = e => {
        setTitle(e.target.value)
    }

    const addWish = e => {
        e.preventDefault();
        console.log("adding wish to bucket...")
        setTitle('')
    }
  return (
    <div className='add-wish'>
        <form>
            <input type="text" placeholder='Add a new wish...' name="title" value={title} onChange={updateTitle}/>
            <input type="submit" value="Add Wish" onClick={addWish}/>
        </form>
    </div>
  )
}
