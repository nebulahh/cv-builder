import React, { Component } from 'react';
import GeneralInformation from '../Generalnformation/GeneralInformation';
import uniqid from 'uniqid';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: '',
        id: uniqid(),
      },
      infos: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      info: {
        name: event.target.value,
        id: this.state.info.id,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      infos: this.state.infos.concat(this.state.info),
      info: {
        name: '',
        id: uniqid(),
      },
    });
  };

  render() {
    const { info, infos } = this.state;

    return (
      <div>
        <h3>General Informaton</h3>

        <form>
          <label>Name: </label>
          <input
            onChange={this.handleChange}
            value={info.name}
            type="text"
            id="name"
            className='border-solid'
          />
          <button className='border-solid' type="submit" onSubmit={this.handleSubmit}>
            submit
          </button>
        </form>
        <GeneralInformation infos={infos} />
      </div>
    );
  }
}
// name, email, phone number.

export default Form;

