import React from 'react'

const NetworkTable = ({network}) =>
  (<div className="col-sm-3">   
    <table className="table table-hover">
      <thead>
        <tr>
          <th>{network.networkName}</th>
        </tr>
      </thead>
      <tbody>
        {network.numbers.map((number, index) => 
          (<tr key={index}>
            <td>{number}</td>
          </tr>)
        )}
      </tbody>
    </table>
  </div>)

export default NetworkTable