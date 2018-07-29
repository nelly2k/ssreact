import * as React from "react";
import { Route } from "react-router-dom";
import { Page1, Page2 } from "./public/page1";
import Page3 from "./public/page3";

export const Routes =()=><div>
      <Route exact path="/" component={Page1} />
    <Route exact path="/page2" component={Page2} />
    <Route exact path="/page3" component={Page3} />
</div>;
