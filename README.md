Lets create our template plugin using the twilio CLI

```
twilio flex:plugins:create raise-hand --install --typescript`
```

I like to leave the default CustomTaskList component that the template comes with in the folder structure until we have completed development of our component. This often comes in handy to refer back to.

My idea for this feature is to give the agent a button to press that will 'raise their hand' so with that lets create our first custom component which will add this functionality

we can create the following files/folders:
components
```
|src
    |- components
        |- worker-hand
            |- worker-hand.tsx
            |- worker-hand.styles.ts
            |- worker-hand.container.ts
    |- states
        |- worker-hand.ts
```

we can now put all of the boilerplate code into these files, I wont include all of that here, but you can see from [this commit](https://test.com) what I did.

With that, we can now add our first pieces of functional code to the component. This is going to be the state of the workers hand, we could add this state at a component level, however I decided to add this to the redux store. This is so that we can easily extend our components functionality by interacting with the component state from other areas within flex (such as the [Flex Actions Framework](https://www.twilio.com/docs/flex/developer/ui/actions))