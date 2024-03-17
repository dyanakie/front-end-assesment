import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { isCategoriesValid, isExpirationDateValid } from "../Update/validators";
import { REQ_RATING_FOR_FEATURED } from "../../../constants/constants";
import { getMultiSelected } from "../../../utils/utils";

const requiredFields = ["name", "brand", "rating", "featured", "itemsInStock", "receiptDate", "expirationDate"];

const ProductForm = ({ categories, onSubmit }) => {
    const [product, setProduct] = useState({
        name: "",
        brand: "",
        rating: "",
        featured: false,
        itemsInStock: "",
        categories: [],
        receiptDate: "",
        expirationDate: "",
    });
    const [touched, setTouched] = useState({
        name: false,
        brand: false,
        rating: false,
        itemsInStock: false,
        categories: false,
        receiptDate: false,
        expirationDate: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "rating") {
            setProduct({ ...product, rating: value, featured: value >= REQ_RATING_FOR_FEATURED });
        } else {
            setProduct({
                ...product,
                [name]: type === "checkbox" ? checked : value,
            });
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        for (let key of requiredFields) {
            if (!product[key] && key !== "featured") {
                alert(`Please fill in the ${key} field.`);
                return;
            }
        }

        if (product.categories.length === 0) {
            alert("Please select at least one category.");
            return;
        }

        if (!isExpirationDateValid(product.expirationDate)) {
            alert("Expiration date must be at least 30 days in the future.");
            return;
        }

        onSubmit(product);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Product name"
                    value={product.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.name && !product.name}
                />
                {touched.name && !product.name && <FormFeedback>Name is required.</FormFeedback>}
            </FormGroup>

            <FormGroup>
                <Label for="brand">Brand</Label>
                <Input
                    type="text"
                    name="brand"
                    id="brand"
                    placeholder="Brand"
                    value={product.brand}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.brand && !product.brand}
                />
                {touched.brand && !product.brand && <FormFeedback>Brand is required.</FormFeedback>}
            </FormGroup>

            <FormGroup>
                <Label for="rating">Rating</Label>
                <Input
                    type="select"
                    name="rating"
                    id="rating"
                    value={product.rating}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.rating && !product.rating}
                >
                    <option value="">Select a rating</option>
                    {[...Array(11).keys()].map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </Input>
                {touched.rating && !product.rating && <FormFeedback>Rating is required.</FormFeedback>}
            </FormGroup>

            <FormGroup>
                <Label for="itemsInStock">Items In Stock</Label>
                <Input
                    type="number"
                    name="itemsInStock"
                    id="itemsInStock"
                    placeholder="Items in stock"
                    value={product.itemsInStock}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.itemsInStock && !product.itemsInStock}
                />
                {touched.itemsInStock && !product.itemsInStock && (
                    <FormFeedback>Items in stock is required.</FormFeedback>
                )}
            </FormGroup>
            <FormGroup>
                <Label for="categories">Categories</Label>
                <Input
                    type="select"
                    name="categories"
                    id="categories"
                    multiple
                    value={product.categories}
                    onChange={({ target }) => setProduct({ ...product, categories: getMultiSelected(target) })}
                    onBlur={handleBlur}
                    invalid={touched.categories && !isCategoriesValid(product.categories)}
                >
                    {categories.map(({ id, name }) => (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    ))}
                </Input>
                {touched.categories && product.categories.length === 0 && (
                    <FormFeedback>At least one category or maximum 5 is required.</FormFeedback>
                )}
            </FormGroup>

            <FormGroup>
                <Label for="receiptDate">Receipt Date</Label>
                <Input
                    type="date"
                    name="receiptDate"
                    id="receiptDate"
                    value={product.receiptDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.receiptDate && !product.receiptDate}
                />
                {touched.receiptDate && !product.receiptDate && <FormFeedback>Receipt date is required.</FormFeedback>}
            </FormGroup>

            <FormGroup>
                <Label for="expirationDate">Expiration Date</Label>
                <Input
                    type="date"
                    name="expirationDate"
                    id="expirationDate"
                    value={product.expirationDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={
                        touched.expirationDate &&
                        (!product.expirationDate || !isExpirationDateValid(product.expirationDate))
                    }
                />
                {touched.expirationDate &&
                    (!product.expirationDate || !isExpirationDateValid(product.expirationDate)) && (
                        <FormFeedback>
                            Expiration date is required and must be at least 30 days in the future.
                        </FormFeedback>
                    )}
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input
                        type="checkbox"
                        name="featured"
                        id="featured"
                        checked={product.featured}
                        onChange={handleChange}
                    />
                    Featured
                </Label>
            </FormGroup>

            <div className="d-flex justify-content-end">
                <Button outline color="secondary" type="button" onClick={() => onSubmit(null)} className="mr-2">
                    Cancel
                </Button>
                <Button color="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
};

ProductForm.propTypes = {
    categories: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
