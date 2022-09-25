import React, { Component } from 'react';
import './App.css';
import EducationalExp from '../EducationalExp/EducationalExp';
import GeneralInformation from '../Generalnformation/GeneralInformation';
import PracticalExp from '../PracticalExp/PracticalExp';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();

    this.state = {
      info: {
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        titleOfStudy: '',
        studyDuration: '',
        companyName: '',
        positionTitle: '',
        jobTasks: '',
        dateEmployed: '',
      },
    };
  }

  onChange = (event) => {
    event.preventDefault()
    const {info} = this.state
    this.setState({
      info: {
        ...info,[event.target.name]: event.target.value,
      },
    });
  };

  render() {
    const {info} = this.state

    return (
      <>
      <h1 className='text-center'>RESUME BUILDER</h1>
    <div className="wrapper flex gap-5">
  
     <div className='w-2/4 border border-black rounded flex flex-col gap-5'>
       <GeneralInformation user={info}/>
       <EducationalExp user={info}/>
       <PracticalExp user={info}/>      
     </div> 
    
      <Form info={info} change={this.onChange} />
    </div>
      </>
    );
  }
}

export default App;
