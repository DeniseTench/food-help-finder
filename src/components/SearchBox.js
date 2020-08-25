import React from 'react';

class SearchBox extends React.Component {
    constructor (props) {
      super(props);

      this.state = {
        pcode: ''
      };

      this.inputUpdated = this.inputUpdated.bind(this);
      this.submitPostCode = this.submitPostCode.bind(this);
    }

    submitPostCode(e) {
        e.preventDefault();

        const { pcode } = this.state;
        const { onSubmit } = this.props;

        onSubmit(pcode);
        this.setState({ pcode: '' });
    }

    inputUpdated(e) {
          const { value } = e.target;
          this.setState({ pcode: value });
    }

  render () {
    return (
        <div className="searchbox">
          <form onSubmit={this.submitPostCode}>
             <label htmlFor="pcode">Enter Your Postcode</label>
             <input
             className="form-control"
             type="input"
             name="pcode"
             value={this.state.pcode} 
             onInput={this.inputUpdated} />
            <button type="submit" className='btn btn-success'>Find food help</button>
          </form>
        </div>
      );
    }
}

export default SearchBox;