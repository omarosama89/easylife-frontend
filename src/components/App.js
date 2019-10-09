import React from "react";
import AdvertisementsIndexPage from "./advertisements/IndexPage";
import ShopsIndexPage from "./shops/IndexPage";
import OffersIndexPage from "./offers/IndexPage";
import EventsIndexPage from "./events/IndexPage";
import NewsIndexPage from "./news/IndexPage";
import ServicesIndexPage from "./services/IndexPage";
import VehiclesIndexPage from "./vehicles/IndexPage";
import Header from "./common/Header";
import NotFoundPage from "./NotFoundPage";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <div className="page-content">
        <div className="row">
          <div className="column side">
            <Header />
          </div>
          <div className="column middle">
            <Switch>
              <Route path="/advertisements" exact component={AdvertisementsIndexPage} />
              <Route path="/shops" exact component={ShopsIndexPage} />
              <Route path="/offers" exact component={OffersIndexPage} />
              <Route path="/events" exact component={EventsIndexPage} />
              <Route path="/news" exact component={NewsIndexPage} />
              <Route path="/services" exact component={ServicesIndexPage} />
              <Route path="/vehicles" exact component={VehiclesIndexPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
