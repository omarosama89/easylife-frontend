import React, { useState, useEffect } from "react";
import { getOffers } from "../../api/offerApi";
import * as config from '../../config'

function IndexPage() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    getOffers().then(_offers => { setOffers(_offers) })
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
              <th key='img'>Phone_number</th>
              <th key='ca'>Created At</th>
              <th key='ua'>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {offers.map(_offer => {
              return (
                <>
                  <tr key={_offer.id}>
                    <td>{_offer.id}</td>
                    <td>{_offer.text}</td>
                    <td><img src={config.default['HOST'] + _offer.image.url} height="100" /></td>
                    <td>{_offer.phone_number}</td>
                    <td>{_offer.created_at}</td>
                    <td>{_offer.updated_at}</td>
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
