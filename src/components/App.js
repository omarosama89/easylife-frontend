import React from "react";
import AdvertisementsIndexPage from "./advertisements/IndexPage";
import ShopsIndexPage from "./shops/IndexPage";
import OffersIndexPage from "./offers/IndexPage";
import EventsIndexPage from "./events/IndexPage";
import NewsIndexPage from "./news/IndexPage";
import ServicesIndexPage from "./services/IndexPage";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";
import Header from "./common/Header";
import PrivateRoute from './common/PrivateRoute';
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
              <PrivateRoute path="/advertisements" exact component={AdvertisementsIndexPage} />
              <PrivateRoute path="/shops" exact component={ShopsIndexPage} />
              <PrivateRoute path="/offers" exact component={OffersIndexPage} />
              <PrivateRoute path="/events" exact component={EventsIndexPage} />
              <PrivateRoute path="/news" exact component={NewsIndexPage} />
              <PrivateRoute path="/services" exact component={ServicesIndexPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/logout" exact component={LogoutPage} />

              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
