import React from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
         pcode: '',
         name: {},
         address: {},
         postcode: {}, 
         email: {}, 
         phone: [], 
         url: {},
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(pcode) {
        console.log(pcode);
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://www.givefood.org.uk/api/1/foodbanks/search/?address=${pcode}';
     axios.get(proxyurl + url)
     .then(({ data }) => {
         const { name, address, postcode, email, phone, url } = data;
        this.setState({ pcode: name, address, postcode, email, phone, url })
     });
   }

  render() {
    return <div className="app">
        <SearchBox onSubmit={this.onFormSubmit} />
    </div>;
    }
}

export default App;
