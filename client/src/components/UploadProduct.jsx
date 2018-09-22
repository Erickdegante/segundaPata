import React from "react";
//import Home from "./home.jsx";
import $ from "jquery";

class UploadProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      descrip: "",
      price: "",
      category: "",
      email: "",
      vendor: ""
    };
    this.handleName = this.handleName.bind(this);
    this.handleDescrip = this.handleDescrip.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handleVendor = this.handleVendor.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleName(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  }

  handleDescrip(e) {
    e.preventDefault();
    this.setState({
      descrip: e.target.value
    });
  }

  handlePrice(e) {
    e.preventDefault();
    this.setState({
      price: e.target.value
    });
  }

  handleMail(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }

  handleVendor(e) {
    e.preventDefault();
    this.setState({
      vendor: e.target.value
    });
  }

  handleCategory(e) {
    e.preventDefault();
    this.setState({
      category: e.target.value
    });
  }

  addItem(name, descrip, price, category, email, vendor) {
    $.ajax({
    url:'/items',
    type: "POST",
    contentType: 'application/json',
    data: JSON.stringify({
      name: name,
      descrip: descrip,
      price: price,
      category: category,
      email: email,
      vendor: vendor
    }),
    success:(data)=> {
    },
    error: (xhr,status,error) => {
    }
  });
}


  submitItem(event) {
    event.preventDefault();
    this.addItem(this.state.name, this.state.descrip, this.state.price, this.state.category, this.state.email, this.state.vendor );

    this.setState({
      name: "",
      descrip: "",
      price: "",
      category: "",
      email: "",
      vendor: ""
    });
    alert('Success!')
  }

  render() {
    return (
      <div>
    <center><img src="https://www.aperrados.com/wp-content/uploads/2017/01/bulldog-ingles-700x452.jpeg" alt="aquí van imagenes de perritos bien cute" /></center>
      <center className = "UploadProducts">

      <h3>¿Qué quieres vender?:
        <input
          value={this.state.name}
          placeholder="nombre del artículo"
          onChange={this.handleName}
        /></h3>
        <br />
        <h3>Describe brevemente el artículo:
        <input
          value={this.state.descrip}
          placeholder="Cuentas con 150 caracteres"
          onChange={this.handleDescrip}
        /></h3>
        < br/>
        <h3>¿Cuál será el costo?:
        <input
          value={this.state.price}
          placeholder="No olvides especificar con el símbolo de $"
          onChange={this.handlePrice}
        /></h3>

        <br />
      <h3>Elige una categoría:
        <input
          value={this.state.category}
          placeholder="Recuerda que son: juguetes, accesorios, cyc (camitas y casitas) y accesorios"
          onChange={this.handleCategory}
        /></h3>
        <br />
        <h3>Pásanos tu mail:
        <input
          value={this.state.mail}
          placeholder="Para ponerse en contacto contigo"
          onChange={this.handleMail}
        /></h3>
        <br />
        <h3>¿Cómo quieres que te llamemos?:
        <input
          value={this.state.vendor}
          placeholder="Éste será el nombre que otros vean"
          onChange={this.handleVendor}
        /></h3>
        <br />
        <button onClick={this.submitItem}>¡Añadir Producto!</button>
        </center>

      </div>
    );
  }
}

export default UploadProduct;
