# Context :

This was the first time I used next.js.

# Technical choices :

### Users list page

I decided to create a page in order to choose the user. In a more global project there would have some authentification to not access every one conversations.

### Redux

I decided the use Redux in order to save some information between pages. However I also choose to pass some id in the url instead of using redux for everything in order to learn how next.js works.

### Fetch

I decided to put all the api fetch in actions using redux-thunk.

I could have to them in the components but I prefere to seperate the responsabilities between the view and the fetchs.

In a more large applications, I would not be using redux-thunk to once again seperate the responsabilities. I would use another third party to do it: observables, saga... Those are a little bit to overkill for this small project.

So in order to find a balance between the size of the project and the separation of the responsabilities, I used redux-thunk.

### CSS

I decided to use the native css management of next.js. Once again the main goal was to try to experience fully next.js.

If there was no management, I would probability use styled-components.

### Typescript

I love typescript, I was happy to see that is was already init.

### Architecture

#### Types

I choose to put the types in a seperate file to have smaller files and help with the readability

#### CSS

For the CSS I prefered to group the component with its style in the same folder. I think it simplify the debug because I don't have to look everywhere for the style. To be honest I think it's just about habits. I'm use to have the component and the style in the same place.

# What is missing :

We are missing the unit tests, I'm a bit ashame of it but I really did not have the time to do them. With more time, all the components, actions and reducers would have been tested with jest. I know time is not an excuse to not do my unit tests!

It could have been nice to have an automatic scroll down in the message page when a new message is added.
