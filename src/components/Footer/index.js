import React from 'react';
import { NavLink } from 'react-router-dom';

const BuiltWith = () => (
    <div className="card">
        <div className="card-body">
            <p>Built with</p>
            <a href="https://github.com/facebook/react">
                <img alt="react" style={{height: 50}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
            </a>
            <i className="fa fa-plus mx-4" />
            <a href="https://github.com/rphansen91/data-hoc">
                <img alt="data-hoc" style={{height: 50}} src="https://github.com/rphansen91/data-hoc/raw/master/data-hoc-logo.png" />
            </a>
        </div>
    </div>
);

const Navbar = () => (
    <ul className="nav flex-column">
        <NavLink to="/" exact>
            Home
        </NavLink>
        <NavLink to="/cats">
            Cats
        </NavLink>
        <NavLink to="/jedis">
            Jedis
        </NavLink>
        <NavLink to="/films">
            Films
        </NavLink>
    </ul>
);

export default () => (
    <div className="container">
        <div className="row">
            <div className="col-md-4 text-center">
                <BuiltWith />
            </div>
            <div className="offset-md-4 col-md-4">
                <Navbar />
            </div>
        </div>
    </div>
)