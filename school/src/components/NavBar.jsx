import React from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
    return <div>

        <Link to='/exo' >Exo</Link>
        <Link to='/'>Student</Link>

    </div>;
}

export default NavBar;
