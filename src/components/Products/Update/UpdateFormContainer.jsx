import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProductById} from '../../../reducers/products';
import {ProductForm} from './ProductForm';
import {Link} from 'react-router-dom';
import { updateProduct } from '../../../actions/products';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const UpdateFormContainer = ({categories, dispatch, product}) => {
    const history = useHistory();
    if (!product) {
        return null;
    }

    const handleFormSubmit = (product) => {
        if (product) {
            dispatch(updateProduct(product.id, product));
        }
        
        history.push("/");
    };

    return (
        <>
            <Link to='/'>Home</Link>
            <ProductForm
                onUpdate={handleFormSubmit}
                product={product}
                categories={categories}
            />
        </>
    );
};

UpdateFormContainer.propTypes = {
    product: PropTypes.object,
    categories: PropTypes.array,
    history: PropTypes.object,
};

const mapStateToProps = (state, {productId}) => ({
    product: getProductById(state, productId),
    categories: state.categories,
});

export default connect(mapStateToProps)(UpdateFormContainer);
