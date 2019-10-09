import React, { useState, useEffect } from "react";
import { getEvents } from "../../api/eventApi";
import * as config from '../../config'

function IndexPage() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents().then(_events => { setEvents(_events) })
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
              <th key='ca'>Created At</th>
              <th key='ua'>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {events.map(_event => {
              return (
                <>
                  <tr key={_event.id}>
                    <td>{_event.id}</td>
                    <td>{_event.text}</td>
                    <td><img src={config.default['HOST'] + _event.image.url} height="100" /></td>
                    <input type="checkbox" checked={_event.active} />
                    <td>{_event.created_at}</td>
                    <td>{_event.updated_at}</td>
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
