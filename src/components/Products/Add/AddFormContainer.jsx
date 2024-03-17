import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createProduct } from "../../../actions/products";
import ProductForm from "./ProductForm";

const AddFormContainer = ({ categories, dispatch }) => {
    const history = useHistory();

    const handleFormSubmit = (product) => {
        if (product) {
            dispatch(createProduct(product));
        }
        
        history.push("/");
    };

    return (
        <div>
            <h2 className="h3">Add Product</h2>
            <ProductForm categories={categories} onSubmit={handleFormSubmit} />
        </div>
    );
};

AddFormContainer.propTypes = {
    categories: PropTypes.array,
    dispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(AddFormContainer);
