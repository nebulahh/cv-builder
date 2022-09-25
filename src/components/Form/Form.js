import React, { Component } from 'react';

class Form extends Component {

  render() {

    return (
        <form className='w-2/4 mt-0' onSubmit={this.handleSubmit}>
      <h3>General Information</h3>
      <fieldset className='border border-black p-3 mt-0'>
         <label>
           <p>Name</p>
           <input className='border border-black'
            name="name"
            type="text"
            value={this.props.info.name}
            id="name"
            onChange={e => this.props.change(e)}/>
         </label>

         <label>
           <p>Email</p>
           <input className='border border-black'
            name="email"
            type="text"
            value={this.props.info.email}
            id="email"
            onChange={e => this.props.change(e)}/>
         </label>

         <label>
           <p>Phone Number</p>
           <input className='border border-black'
            name="phone"
            type="tel"
            value={this.props.info.phone}
            id="fullName"
            onChange={e => this.props.change(e)}/>
         </label>
       </fieldset>

       <h3>Educational Experience</h3>
       <fieldset className='border border-black p-3'>
         <label>
           <p>School Name</p>
           <input className='border border-black'
            name="schoolName"
            type="text"
            value={this.props.info.schoolName}
            id="schoolName"
            onChange={e => this.props.change(e)}/>
         </label>

         <label>
           <p>Title of Study</p>
           <input className='border border-black'
            name="titleOfStudy"
            type="text"
            value={this.props.info.titleOfStudy}
            id="studyTitle"
            onChange={e => this.props.change(e)}/>
         </label>

         <label>
           <p>Date of Study</p>
           <input className='border border-black'
            name="studyDuration"
            type="text"
            value={this.props.info.studyDuration}
            id="fullName"
            onChange={e => this.props.change(e)}/>
         </label>
       </fieldset>

       <h3>Practical Experience</h3>
       <fieldset className='border border-black p-3'>
         <label>
           <p>Company Name</p>
           <input className='border border-black'
            name="companyName"
            type="text"
            value={this.props.info.companyName}
            id="compName"
            onChange={e => this.props.change(e)}/>
         </label>

         <label>
           <p>Position Title</p>
           <input className='border border-black'
            name="positionTitle"
            type="text"
            value={this.props.info.positionTitle}
            id="positionTitle"
            onChange={e => this.props.change(e)}/>
         </label>

         <label>
           <p>Main Task of your Job</p>
           <input className='border border-black'
            name="jobTasks"
            type="text"
            value={this.props.info.jobTasks}
            id="mainTask"
            onChange={e => this.props.change(e)}/>
         </label>

         <label>
           <p>Date Employed</p>
           <input className='border border-black'
            name="dateEmployed"
            type="text"
            value={this.props.info.dateEmployed}
            id="dateEmployed"
            onChange={e => this.props.change(e)}/>
         </label>
       </fieldset>
       {/* <button className='border border-black p-1 rounded hover:outline-2' type="submit">Submit</button> */}
      </form>
      
    );
  }
}

export default Form;

