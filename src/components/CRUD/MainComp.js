import React from 'react'
import { Link } from 'react-router-dom'

function MainComp() {
    return (
        <div>
            <h1>This is Main Component</h1>
            <Link to="adminpage" className='btn btn-primary btn-sm'>Go to AdminPage</Link>
        </div>
    )
}

export default MainComp
