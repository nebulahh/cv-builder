import React, { Component } from 'react';

class EducationalExp extends Component {
  render() {
    const { user } = this.props
    const schoolName = user.schoolName
    const studyDuration = user.studyDuration
    const titleOfStudy = user.titleOfStudy
    return (
      <div>
        <h2 className='text-xl'>Educational Experience</h2>
        <hr/>
        <h4> {schoolName ? schoolName : 'Bikini Bottom'}</h4>
        <p>{titleOfStudy ? titleOfStudy : 'Business Mathematics'}</p>
        <small>{studyDuration ? studyDuration : '2016 - 2020'}</small>
      </div>
    );
  }
}
export default EducationalExp;