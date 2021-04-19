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
