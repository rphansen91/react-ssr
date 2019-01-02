import React from 'react';
import map from 'lodash/map';
import Setter from '../../hocs/Setter';

const Todos = ({ todos }) => (
    <ul className="list-group">
        {map(todos, (todo) => (
            <li key={todo.id} className="list-group-item">
                <div className="row">
                    <div className="col">
                        {todo.title}
                    </div>
                    <div className="col-1">
                        {todo.completed ? <i className="fa fa-check" />: <div />}
                    </div>
                </div>
            </li>
        ))}
    </ul>
);

const Address = ({ address }) => (
    <figcaption className="figure-caption m-4">
        <p className="mb-0">{address.street} {address.suite}</p>
        <p className="mb-0">{address.city} {address.zipcode}</p>
    </figcaption>
);


export default Setter("open", false, ({ user, todos, open, setopen }) => (
    <div className="card mb-4">
        <div className="card-body">
            <div 
                className="row mb-2" 
                onClick={() => setopen(!open)}
            >
                <div className="col-1">
                    <img 
                        className="rounded-circle" 
                        src={`https://ui-avatars.com/api/?name=${user.name.split(" ").join("+")}`}
                        alt="avatar" 
                    />
                </div>
                <div className="col">
                    <h5 className="card-title mt-2 mb-0">{user.name}</h5>
                    <p className="card-text mb-0">{user.email}</p>
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <i 
                        style={{ 
                            transform: open ? "rotate(180deg)": "rotate(0deg)",
                            transition: "transform 0.2s ease-in"
                        }}
                        className="fa fa-arrow-down cursor-pointer" 
                    />
                </div>
            </div>
            {
                open && (
                    <div>
                        <Address address={user.address} />
                        <Todos todos={todos} />
                    </div>
                )
            }
        </div>
    </div>
))