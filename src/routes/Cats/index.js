import React from 'react';
import withPaginator from '../../hocs/Paginator';
import { FetchCats } from '../../data/cats';
import Footer from '../../components/Footer';
import Page from '../Page';

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

const DisplayCats = ({ limit, data }) => (
    <div className="row">
        {(data || Array(limit).fill({})).map((item, i) => 
            <div className="col-4 mb-4" key={i}>
                <Card url={item.url} />
            </div>)
        }
    </div>
)

export default withPaginator(({ limit, page, paginator }) => (
    <Page 
        header={<h1>Cats</h1>}
        footer={<Footer />}
    >
        <FetchCats params={{ page, limit, order: "DESC" }}>
            {r => <DisplayCats {...r} limit={limit} />}
        </FetchCats>
        <div className="d-flex justify-content-center">
            {paginator}
        </div>
    </Page>
))