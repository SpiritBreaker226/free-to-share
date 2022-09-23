# Free to Share

## To Install

 1. In the terminal make sure you are in the project's root directory
 2. Run `yarn`
 3. Run `cp .env.example .env`

## Platform Statuses

- iOS is what the app is tested on
- Android, not tested. Sorry, I don't have an Android device, and my Mac cannot run Andriod Studios
- The web cannot run since the Realm database does not run in browsers, and browser databases have too many requirements to get running that it

## Assumptions made

  1. Third-party packages are allowed to be used.
  2. For Search, when it says 'Simple text matching,' ~~I will assume that means not using wild characters. Instead, the user must enter the car's correct spelling and full name.~~ I will assume this is for the car's make, where the user can only type out the car's make.
  3. For Search, the year will use a single slider, so the user will not be able to do a range.


### Why a Database Instead of API?

  For the browsing requirement, ~~I will assume that means that the cars should be loaded; however, since the Car API sends 1000 cars and there is no way to limit it; this will slow the loading of the page if this affects performance too much this will change to they need to search to limit the number of cars.~~ I will show the first 25 cars from the Cars API since Cars API sends too many vehicles. Furthermore, going to treat the first load of cars as a cache where we can search through it without having to access the API.

  There are some benefits from doing this; we can do mix filtering where the APIs can only do a single filter. So, for example, if the user wants all 1994 cars that are purple from Ford, that will not be possible with the API as they only send a single filter. At the same time, the cache finds each item in a smaller and smaller section.

  Another benefit is that we will not need to get data over the internet too often, as there is a chance that the API endpoint is down. Or the user is no longer online, which will make our application useless until it is back up.

## Notes

  1. I will not have as many tests as I usually would have since this is my first project working with React-Native and the testing framework is different from web React. Furthermore, time constraints force me to make this sacrifice to me the deadline.
  2. ~~I can only test on the web; as a simple put, my mac computer is too old to run the iOS simulator~~ After doing some more research found out how to use the iOS simulator and was able to run the application on it.
  3. For Andriod, Andriod Studio barely runs on the application, so we will not be able to test for it.
  4. The year slider is minimized to 1908 when Ford first introduced the Model T.

### Why Channge API Attributes?

  Reformat attributes from search results to more readable as the attributes from the API do not flow well with the car object. When a developer reads the code, the code should flow from the object to its attributes. For example, it is more challenging to read `car.car` where the attribute car is the make of the vehicle, whereas `car.make` is better since the developer does not need to remember the car attribute is the make of the car.

  Another example is `car.car_model_year`. While this is better, it still has the prefix `car_`, which is still harder to read as the developer needs to remove the prefix to understand what the attribute does, so a much better would be `car.model_year` or `car.year`.
