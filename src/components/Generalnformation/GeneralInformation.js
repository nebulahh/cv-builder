import React, { Component } from 'react';

class GeneralInformation extends Component {
  render() {
    const { user } = this.props
    const name = user.name 
    const phone = user.phone 
    const mail = user.email
    return (
      <div className='h-17'>
      <h2 className='text-3xl'>
        {name ? name : 'lorem ipsum'}
      </h2>
      <section>
        {
          phone || mail ? <span>{user.email} | {user.phone} </span>: 'mail | number' 
        }
      </section>
      <hr/>
     </div>
    );
  }
}

export default GeneralInformation;