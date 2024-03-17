# front-end-assesment
Repo made for People Spheres

## COMMENTS AND SUGGESTIONS

I see the idea was to use Update from both Add and Update, it is totally good idea to share logic, but I believe Product Form
should be abstracted one layer up into Products if its used. Also too many changes so I decided to Create Add Form again so we can
easily see the differences and discuss them.

Changed Product Form in Update only so it could work.

-- Fix validations in Update
-- Implement touched in Update
-- ids are numbers in mock data but are strings in reducer create (conversion to number risky because of overflow)
-- Share common components and forms
-- validators could be moved up 1 level as it is relevant for both add and update
-- selectors can be introduced with memoization => Reselect for example
-- in actions update it is not productId but product => reflects in reducers => also compare of id with whole product ref


Visual
-- Cards will have different sizes depending on categories => should fix that
-- Missing Header in Update Form
-- Should be consistent to navigate back (Home button or Submit and Cancel button which I suggest) or navbar
-- Deletion can have prompt (modal or otherwise)
