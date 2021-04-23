# Code Challenge

## Problem
We're rolling out a new web dashboard for cove members to be able to view a schedule of reservations across multiple rooms. You’ve been tasked to build the UI to display the schedule. The schedule should be interactive so that users can navigate it to view different days and it should be organized so that the user can distinguish between different rooms.

The data for the schedule can be found at the following endpoint:

https://cove-coding-challenge-api.herokuapp.com/reservations​

The data returned will be an array of reservation objects in the following format:
```
{
  ​"id"​:​ ​string​,
  ​"start"​:​ ​dateTime string​,
  ​"end"​:​ dateTime string​,
  ​"room"​:​ {
    ​"id"​:​ ​string​,
    ​"name"​:​ ​string​,
    ​"imageUrl"​:​ ​string
  }
}
```

## Design

These sketch images are designed with the focus on the usability and user experience of the app. The css styles are still not pretty good, but I tried to give users a good usability and user experience in the app.

![Home](https://github.com/programming-enthusiast/Cove-Code-Challenge/blob/main/design/home.png)
![Monthly Schedule](https://github.com/programming-enthusiast/Cove-Code-Challenge/blob/main/design/monthly.png)
![Daily Schedule](https://github.com/programming-enthusiast/Cove-Code-Challenge/blob/main/design/daily.png)

## Project Structure

    src
    ├── assets                   # asset files
    ├── components               # React components used in this project
    ├── contexts                 # contexts and context providers
    ├── pages                    # pages (home, monthly_schedule, daily_schedule)

## Functions
- Users can view reservations by room or month or day.
- Users can select the room to view reservations.
- Users can view reservations on a monthly calendar.
- Users can view reservations on a daily calendar.

## How to run 
```
$ git clone https://github.com/programming-enthusiast/Cove-Code-Challenge
$ yarn install
$ yarn start
```
You can now access http://localhost:3000.

## How to test this project

I introduced the snapshot testing method for this project. Snapshot tests are very useful when we want to make sure the UI does not change unexpectedly. A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match. Either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.
```
$ yarn test
```


    
