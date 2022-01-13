import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/Products';
import Nav from './components/Nav';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          count: 3
        },
        {
          id: 2,
          count: 1
        },
        {
          id: 3,
          count: 0
        },
        {
          id: 4,
          count: 2
        }
      ]
    }
  }

  handleUpdate = (product, operation) => {

    let newProducts = [...this.state.products];

    const productIndex = newProducts.indexOf(product);
    newProducts[productIndex] = product;

    // if count is zero, don't reduce it anymore
    if (newProducts[productIndex].count === 0) {
      if (operation < 0) {
        return;
      }
    }
    newProducts[productIndex].count += operation;
    this.setState({ products: [...newProducts] });
  }

  handleDelete = (product) => {
    let newProducts = this.state.products.filter(each_product => each_product !== product);
    this.setState({ products: [...newProducts] });
  }

  handleReset = () => {
    this.setState({ products: [] });
  }

  handleAdd = () => {
    let products = [...this.state.products];
    let id = products.length === 0 ? 0 : products[products.length - 1].id + 1;
    const newProduct = { id, count: 0 }
    products[products.length] = newProduct;
    this.setState({ products });
    // console.log(products.length);
  }

  render() {
    return (
      <div className="App">
        <Nav products_count={this.state.products.length} onReset={this.handleReset} onAdd={this.handleAdd} />
        <div className="container">
          <div className="row mt-3">
            <Products products={this.state.products} onUpdate={this.handleUpdate} onDelete={this.handleDelete} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
