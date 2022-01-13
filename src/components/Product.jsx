import React from 'react'

const Product = (props) => {

    const { id, count } = props.product;
    const { onUpdate, onDelete } = props;

    const formatCount = (count) => {
        let countBadgeProperties = {};
        countBadgeProperties.badgeClass = count === 0 ? 'warning' : 'success';
        countBadgeProperties.badgeText = count === 0 ? 'Zero' : count;
        return countBadgeProperties;
    }

    return (
        <div>

            <p>Product {id}</p>
            <button className='btn btn-sm btn-danger' style={{ marginBottom: '15px' }} onClick={() => onDelete(props.product)}>Delete</button>

            <div style={{ marginBottom: '15px' }}>

                <span className={'badge bg-' + formatCount(count).badgeClass} style={{ margin: '0 20px 0 20px' }}>{formatCount(count).badgeText}</span>

                <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={() => onUpdate(props.product, 1)}>+</button>

                <button className='btn btn-warning' onClick={() => onUpdate(props.product, -1)}>-</button>

            </div>
        </div>
    )
}

export default Product