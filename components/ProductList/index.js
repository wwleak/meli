import React, { setState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

import ProductItem from '../ProductItem';

const ProductList = props => {
    const { items, onItemSelect } = props;

    const onProductSelect = ({id}) => {
        onItemSelect(id);
    }

    return (
        <React.Fragment>
            <div className="products">
                {items && items.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        product={item} 
                        onProductSelect={() => onProductSelect(item)} 
                    />
                ))}
            </div>
        </React.Fragment>
    );
};

ProductList.propTypes = {
    items: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    title: PropTypes.string,
                    condition: PropTypes.string,
                    free_shipping: PropTypes.bool,
                    picture: PropTypes.string,
                    price: PropTypes.shape({
                        amount: PropTypes.number,
                        currency: PropTypes.string,
                        decimals: PropTypes.string
                    })

                }).isRequired
            ).isRequired
}

export default ProductList;