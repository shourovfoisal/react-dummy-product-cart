import React from 'react';
import Product from './Product';

class Products extends React.Component {

    render() {

        const { products, onUpdate, onDelete } = this.props;

        return (
            <React.Fragment>
                {
                    products.map(product => {
                        return (
                            <div className="col-lg-3 col-sm-6 d-flex justify-content-center justify-content-lg-start mt-4 mt-lg-0" key={product.id}>
                                <Product product={product} onUpdate={onUpdate} onDelete={onDelete} />
                            </div>
                        )
                    })
                }
            </React.Fragment>
        );
    }

}


export default Products;