1. What problem does the context API help solve?
    Context APT helps solve the probelm of 'prop drilling' by sharing information information across all levels of an application.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are payloads of information that send data from your application to your store.
    Reducers are used to quickly implement functions within a component.
    The store is a place to hold all of the state that will be passed around an application
    The store is a single source of truth because it will manage, the state and the functions that use state.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state, is used throughout the application, and will be passed from compoenent to component. Component state, will exist only within a single component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk allows for the simplification of reducers, by offering the dispatch function, you are able to greatly shorten the ammount of code written to envoke a reducer function.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    I am still bad at all of them. Redux is complicated but I want to master it, because it seems very powerful. I mean, if Facebook needed to create it to manage all of the state, it must be worth the hastle.
