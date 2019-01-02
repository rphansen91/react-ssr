import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Setter from '../../hocs/Setter';
import cx from 'classnames';

export default Setter("show", false, ({ show, setshow }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Delta Hoc Demo</Link>
        <button 
            onClick={() => setshow(!show)}
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={cx("collapse navbar-collapse", { show })} id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <NavLink className="nav-item" to="/" exact>
                    <span className="nav-link">Home</span>
                </NavLink>
                <NavLink className="nav-item" to="/cats">
                    <span className="nav-link">Cats</span>
                </NavLink>
                <NavLink className="nav-item" to="/jedis">
                    <span className="nav-link">Jedis</span>
                </NavLink>
                <NavLink className="nav-item" to="/films">
                    <span className="nav-link">Films</span>
                </NavLink>
            </ul>
        </div>                      
    </nav>
));