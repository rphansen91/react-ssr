import React from 'react';
import withPaginator from '../../hocs/Paginator';
import { FetchCats } from '../../data/cats';

const Card = ({ url }) => (
    <div className="card">
        <div 
            className="card-img-top"
            style={{ 
                height: 300,
                backgroundImage: `url(${url})`,
                backgroundColor: '#e8e8e8',
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}
        />
    </div>
)

const DisplayCats = ({ loading, error, data }) => (
    <div className="row">
        {(data || Array(6).fill({})).map((item, i) => 
            <div className="col-4 mb-4" key={i}>
                <Card url={item.url} />
            </div>)
        }
    </div>
)

export default withPaginator(({ 
    page=0,
    paginator
}) => (
    <div>
        <div className="jumbotron rounded-0">
            <h1>Cats</h1>    
        </div>
        <div className="container">
            <FetchCats params={{ page, limit: 6, order: "DESC" }}>
                {DisplayCats}
            </FetchCats>
            <div className="d-flex justify-content-center">
                {paginator}
            </div>
        </div>
    </div>
))