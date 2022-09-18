# Free to Share

## To Install

 1. In the terminal make sure you are in the project's root directory
 2. Run `yarn`
 3. Run `cp .env.example .env`

## Assumptions made

  1. Third-party packages are allowed to be used.
  2. Reformat attributes from search results to more readable as the attributes from the API do not flow well with the car object. When a developer reads the code, the code should flow from the object to its attributes. For example, it is more challenging to read `car.car` where the attribute car is the make of the vehicle, whereas `car.make` is better since the developer does not need to remember the car attribute is the make of the car. Another example is `car.car_model_year`. While this is better, it still has the prefix `car_`, which is still harder to read as the developer needs to remove the prefix to understand what the attribute does, so a much better would be `car.model_year` or `car.year`.
  3. I will not have as many tests as I usually would have since this is my first project working with React-Native and the testing framework is different from web React. Furthermore, time constraints force me to make this sacrifice to me the deadline.
  4. I can only test on the web; as a simple put, my mac computer is too old to run the iOS simulator, and Andriod Studio barely runs on the application.
