import React, { Component } from 'react';
import { FetchJedis } from '../../data/swars';
import { NumberInput } from '../../components/Input';
import Footer from '../../components/Footer';
import List from '../../components/List';
import Page from '../Page';

class Home extends Component {
  render() {
    return (
      <Page 
        header={<h1>Jedis</h1>}
        footer={<Footer />}
      >
        <NumberInput value={1}>
          {(num) => (
            <FetchJedis params={[num]}>
                {List("name")}
            </FetchJedis>
          )}
        </NumberInput>
      </Page>
    );
  }
}

export default Home;
