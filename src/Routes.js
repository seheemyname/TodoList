import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Cal from './body/Cal';

const Routes = () =>  (
    <>
    <Router>
      <Route path="cal" component={Cal}/>
    </Router>
    </>
);

export default Routes;
