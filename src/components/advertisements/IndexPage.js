import React, { useState, useEffect } from "react";
import { getAdvertisements } from "../../api/advertisementApi";
import * as config from '../../config'

function IndexPage() {
  const [advertisements, setAdvertisements] = useState([]);
  useEffect(() => {
    getAdvertisements().then(_advertisements => { setAdvertisements(_advertisements) })
  }, []);
  return (
    <div className="jumbotron">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr key='0'>
              <th key='id'>#</th>
              <th key='fn'>Text</th>
              <th key='ln'>Image</th>
              <th key='img'>Active</th>
              <th key='ca'>Created At</th>
              <th key='ua'>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {advertisements.map(_advertisement => {
              return (
                <>
                  <tr key={_advertisement.id}>
                    <td>{_advertisement.id}</td>
                    <td>{_advertisement.text}</td>
                    <td><img src={config.default['HOST'] + _advertisement.image.url} height="100" /></td>
                    <input type="checkbox" checked={_advertisement.active} />
                    <td>{_advertisement.created_at}</td>
                    <td>{_advertisement.updated_at}</td>
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
