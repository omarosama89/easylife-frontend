import React, { useState, useEffect } from "react";
import { getNews } from "../../api/newsApi";
import * as config from '../../config'

function IndexPage() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews().then(_news => { setNews(_news) })
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
            {news.map(_news => {
              return (
                <>
                  <tr key={_news.id}>
                    <td>{_news.id}</td>
                    <td>{_news.text}</td>
                    <td><img src={config.default['HOST'] + _news.image.url} height="100" /></td>
                    <td>{_news.created_at}</td>
                    <td>{_news.updated_at}</td>
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
