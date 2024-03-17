# Front-End Assessment
Repository created for People Spheres.

## Comments and Suggestions

### General Suggestions
- The idea to use `Update` for both adding and updating is good, as it helps share logic between components. However, it might be more effective to abstract the `ProductForm` one layer up into a `Products` component if it's used in multiple places.
- Due to significant differences, I decided to create the `AddForm` again to easily see the differences and facilitate discussion.
- Validators could be moved up one level since they are relevant for both adding and updating.
- Introduce selectors with memoization (e.g., using Reselect) for more efficient state querying.

### Specific Changes
- Fix validations in the Update component.
- Implement the `touched` logic in the Update component.
- Note that IDs are numbers in mock data but are strings in the reducer creation. Conversion to number is risky due to potential overflow.
- Share common components and forms to avoid duplication.
- In actions, it is not `productId` but `product` itself, which affects reducer logic as well. Also, ensure ID comparisons account for different types (string vs. number).

### Visual and UX Improvements
- Cards have different sizes depending on the categories, which should be fixed for consistency.
- The header is missing in the Update Form.
- Navigation back to the home or previous page should be consistent across the application (e.g., Home button or Submit and Cancel buttons, or even a navbar).
- Consider adding a prompt for deletion operations (using a modal or similar UI element) to confirm the user's intention.
