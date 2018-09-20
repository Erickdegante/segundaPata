import React, {Component}from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Footer from "./components/item-page/footer.js";
import ItemPage from "./components/item-page/ItemPage.jsx";
import UploadProduct from "./components/UploadProduct.jsx";//client/src/components/UploadProduct.jsx
import Error from "./components/item-page/error.js";
import Navigation from "./components/item-page/navigation.js";
import Home from "./home.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item/:id" component={ItemPage} />
            <Route path="/Upload" component={UploadProduct} />
            <Route  component={Error} />
          </Switch>

          <Footer/>
                  </div>
      </BrowserRouter>

    );
  }
};



ReactDOM.render(<App />, document.getElementById("App"));
