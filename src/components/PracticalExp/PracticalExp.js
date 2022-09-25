import React, { Component } from 'react';

class PracticalExp extends Component {

  render() {
    const { user } = this.props
    const compName = user.companyName
    const position = user.positionTitle
    const jobTasks = user.jobTasks
    const dateEmployed = user.dateEmployed
    return (
      <div>
        <h4 className="heading-space text-xl">Practical Experience</h4>
        <hr/>
        <h5>{compName ? compName : 'Krusty Krabs'}</h5>
        <p>{position ? position : 'Manager'}</p>
        <p>{jobTasks ? jobTasks : 'Counting moneeey'}</p>
        <p>{dateEmployed ? dateEmployed : '2020 - 2022'}</p>
      </div>
    );
  }
}
export default PracticalExp;
