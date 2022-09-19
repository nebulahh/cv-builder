import React, { Component } from 'react';
import './App.css';
import EducationalExp from '../EducationalExp/EducationalExp';
import GeneralInformation from '../Generalnformation/GeneralInformation';
import PracticalExp from '../PracticalExp/PracticalExp';
import Form from '../Form/Form';
// import uniqid from 'uniqid';

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     info: {
  //       name: '',
       
  //     },
  //     infos: [],
  //   };
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     info: {
  //       name: event.target.value,
  //     },
  //   });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   this.setState({
  //     infos: this.state.infos.concat(this.state.info),
  //     info: {
  //       name: event.target.value,
  //     },
  //   });
  // };

  render() {
    const {  info } = this.state;
    console.log(info);

    return (
      <>
        <GeneralInformation info={info} />
        <div className="content">
          <EducationalExp />
          <PracticalExp />
        </div>
        <Form/>

        {/* <div>
          <h3>General Informaton</h3>

          <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input
              onChange={this.handleChange}
              value={info.name}
              type="text"
              id="name"
              className='border-solid border-2'
            />
            <button type="submit">submit</button>
          </form>
        </div> */}
      </>
    );
  }
}

// function App(props) {
//   return (
//     <>
//       <GeneralInformation info={infos} />
//       <div className="content">
//         <EducationalExp />
//         <PracticalExp />
//       </div>
//       <Form />
//     </>
//   );
// }

export default App;
