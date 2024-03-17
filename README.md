# Front-End Assessment
Repository created for People Spheres.

## Comments and Suggestions

### General Suggestions
- The idea to use `Update` for both adding and updating is good, as it helps share logic between components. However, it might be more effective to abstract the `ProductForm` one layer up into a `Products` component if it's used in multiple places.
- Due to significant differences, I decided to create the `ProductForm` again to easily see the differences and facilitate discussion.
- Validators could be moved up one level since they are relevant for both adding and updating.
- Introduce selectors with memoization (e.g., using Reselect) for more efficient state querying.
- Some structural changes

### Specific Changes
- Fix validations in the Update component (can submit empty values etc).
- Implement the `touched` logic in the Update component.
- Note that IDs are numbers in mock data but are strings in the reducer creation. Conversion to number is risky due to potential overflow.
- Share common components and forms to avoid duplication.
- Ensure ID comparisons account for different types (string vs. number).

### Visual and UX Improvements
- Cards have different sizes depending on the categories, which should be fixed for consistency.
- The header is missing in the Update Form.
- Navigation back to the home or previous page should be consistent across the application (e.g., Home button or Submit and Cancel buttons, or even a navbar).
- Consider adding a prompt for deletion operations (using a modal or similar UI element) to confirm the user's intention.

### Tests

I have added some unit tests for the logic functions. For the components themselves to run tests involving JSX with Jest, we'll need to configure Babel to transform JSX syntax into plain JavaScript. 

Wasn't sure if I should install new libs and configurations so here is a basic outline for Add Product:

- Test if component renders
- Test input value changes
- Test if features is change once rating is at least REQ_RATING_FOR_FEATURED constant
- Test validation field appears
- Test on submit
- Test on cancel
