import * as categoriesActions from '../actions/categories';

export const categories = (state = [], action) => {
    switch (action.type) {
        case categoriesActions.RECEIVE_CATEGORIES:
            return [
                ...action.categories,
            ];
        default:
            return state;
    }
};

export const getCategoriesById = state =>
    state.categories.reduce(
        (acc, category) => ({
            ...acc,
            [category.id]: category
        }),
        {}
    );
