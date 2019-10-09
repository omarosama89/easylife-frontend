import React, { useState, useEffect } from "react";
import { getShops } from "../../api/shopApi";
import * as config from '../../config'

function IndexPage() {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    getShops().then(_shops => { setShops(_shops) })
  }, []);
  return (
    <div className="jumbotron">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr key='0'>
              <th key='id'>#</th>
              <th key='na'>Name</th>
              <th key='fn'>Phone Number</th>
              <th key='sml'>Social Media Links</th>
              <th key='act'>Actions</th>
              <th key='ca'>Created At</th>
              <th key='ua'>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {shops.map(_shop => {
              return (
                <>
                  <tr key={_shop.id}>
                    <td>{_shop.id}</td>
                    <td>{_shop.name}</td>
                    <td>{_shop.phone_number}</td>
                    <td>{_shop.facebook + ', ' + _shop.instagram + ', ' + _shop.twitter}</td>
                    <td><i className="glyphicon glyphicon-edit"></i></td>
                    <td>{_shop.created_at}</td>
                    <td>{_shop.updated_at}</td>
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
