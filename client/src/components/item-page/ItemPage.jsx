import React, {Component}from "react";
import { Switch, Route } from 'react-router-dom';
import $ from "jquery";
import axios from "axios";
import Pay from "./pay.js"
import Comments from "./coment.js";

import SingleItem from "./SingleItem.jsx";

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined
    }
  }
  componentDidMount() {
    axios.get('/items')
    .then(res => {
      const products = res.data;
      this.setState({ products });
    })
  }

 render(){
  return(
    <div className ="itemspage">
    { this.state.products ?
      <span>

      <h2>Producto:{`${this.state.products[parseInt(this.props.match.params.id-1)].name}`}</h2>
      <h3>Precio:{`${this.state.products[parseInt(this.props.match.params.id-1)].price}`}</h3>
        <h4>Descripción:{`${this.state.products[parseInt(this.props.match.params.id-1)].descrip}`}</h4>
        <h2>Vendedor:{`${this.state.products[parseInt(this.props.match.params.id-1)].vendor}`}</h2>
        <h3>Ponte en contacto con el vendedor:<a href={"mailto:"+this.state.products[parseInt(this.props.match.params.id-1)].email}>{`${this.state.products[parseInt(this.props.match.params.id-1)].email}`}</a></h3>
      </span>
    : <main>
      <h1>"Render individual item page"</h1>
    </main> }
    <Pay />
    <Comments />
  </div>


)}
};
export default ItemPage;
