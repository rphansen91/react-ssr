import React, { Component } from 'react';
import { FetchFilms } from '../../data/swars';
import List from '../../components/List';
import Footer from '../../components/Footer';
import Page from '../Page';

class Home extends Component {
  render() {
    return (
      <Page 
        header={<h1>Films</h1>}
        footer={<Footer />}
    >
        <FetchFilms params={[1, 2, 3, 4, 5, 6, 7]}>
          {List("title")}
        </FetchFilms>
      </Page>
    );
  }
}

export default Home;
