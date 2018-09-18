import React, {Component}from "react";


class SearchBar extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              value: ''
            };
        }
        handleChange(event) {
            this.setState({value: event.target.value});
        }      
        render() {
            return (
            <div>

      <button onClick={this.props.handleSubmitClothes} data-type="bold"><span >Ropa</span></button>

      <button onClick={this.props.handleSubmitToys} data-type="italic"><span>Juguetes</span></button>

      <button onClick={this.props.handleSubmitBeds} data-type="justifyLeft"><span>Camitas</span></button>

      <button onClick={this.props.handleSubmitAccesories} data-type="justifyCenter"><span>Accesorios</span></button>

            </div>
            );
        }
    }
export default SearchBar;
