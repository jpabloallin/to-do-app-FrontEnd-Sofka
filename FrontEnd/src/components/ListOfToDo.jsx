import React, { useContext } from 'react'
import { Store } from './StoreProvider'

const ListOfToDo = () => {

    const {state, dispatch} = useContext(Store)

    console.log(state)
    return (
        <div>
            <h1>Actions pending to be done</h1>
        </div>
    )
}

export default ListOfToDo