import React, { useState, useEffect } from "react";
import { getServices } from "../../api/serviceApi";
import * as config from '../../config'

function IndexPage() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices().then(_services => { setServices(_services) })
  }, []);
  return (
    <div className="jumbotron">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr key='0'>
              <th key='id'>#</th>
              <th key='fn'>Text</th>
              <th key='fn'>Phone Number</th>
              <th key='ln'>Image</th>
              <th key='ca'>Created At</th>
              <th key='ua'>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {services.map(_service => {
              return (
                <>
                  <tr key={_service.id}>
                    <td>{_service.id}</td>
                    <td>{_service.text}</td>
                    <td>{_service.phone_number}</td>
                    <td><img src={config.default['HOST'] + _service.icon.url} height="100" /></td>
                    <td>{_service.created_at}</td>
                    <td>{_service.updated_at}</td>
                  </tr>
                </>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IndexPage;
