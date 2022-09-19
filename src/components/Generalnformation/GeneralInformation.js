import React, { Component } from 'react';
import './GeneralInformation.css';

class GeneralInformation extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('jh');
  // }

  
  render() {
    console.log('info- ',this.props.info.name);
    return (
      <div>
        {/* <h2>General Informaton</h2> */}
        {/* {this.props.info.map((data) => {
          return (
            <div className="flex btn-aside">
              <h4 key={data.id}>Name: {data.name}</h4>
              <button className='border-2' type="button">Edit</button>
            </div>
          );
        })} */}

{/* id: uniqid(), */}
            <div className="flex gap-5 items-center justify-between">
              <h4>{this.props.info.name}</h4>
              {/* <button type="button">Edit</button> */}
            </div>
        
      </div>
    );
  }
}

export default GeneralInformation;
// name, email, phone number.
// <div className="flex">
//               <p>{info.email}</p>
//               <p>{info.phoneNum}</p>
//             </div>
