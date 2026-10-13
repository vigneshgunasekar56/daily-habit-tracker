# Daily Habit Tracker

## About the App

Daily Habit Tracker is a simple web app that helps users build good habits and track their daily progress.

### What Can You Do With This App?

Users can:
- Add new habits they want to develop.
- Mark habits as completed for the current day.
- Unmark habits if they change their minds.
- View their current streak of consecutive days.
- Edit the names of existing habits.
- Delete habits they no longer want to track.
- Save their habits and progress so they remain available after refreshing the page.

## How the App Works

The app displays a list of habits. Each habit has a name, a completion status for the current day, and a streak showing how many consecutive days the habit has been completed.

When a user adds a habit, the app creates a habit object containing a unique ID, the habit name, and an array of completed dates.

When a user marks a habit as completed, the current date is added to its `doneDates` array. If the habit is already completed for that day, clicking it again removes the date.

The app calculates the streak by checking completed dates, starting with today. If the habit has not been completed today, it checks from yesterday instead. It then counts consecutive completed days.

## How Data Is Saved

The app uses the browser's `localStorage` to save habits and their completion history.

The app stores its data under the key `habitTrackerData`.

When a habit is added, edited, completed, or deleted, the app converts the current habit list into a JSON string using `JSON.stringify()` and saves it to `localStorage`.

When the app starts, the `loadHabits()` function retrieves the saved data using `localStorage.getItem()` and converts the JSON string back into a JavaScript array using `JSON.parse()`.

This means the habits and their completion history remain saved when the page is refreshed or the browser is closed and reopened in the same browser profile.

The data is stored locally in the browser, not in a remote database. Clearing the browser's site data may remove the saved information.

## Git Basics: Repository and Commit

### What Is a Repository?

A repository, often called a repo, is a place where a project's files and their version history are stored. It contains the application's code, documentation, and other project files.

For this project, the repository contains the Daily Habit Tracker application, including its HTML, CSS, JavaScript, and README file.

### What Is a Commit?

A commit is a saved snapshot of changes made to a project in Git. It records the changes at a particular point in time and usually includes a message describing what was changed.

For example, a commit message for this project could be:

`Add habit tracking and localStorage support`

Commits help developers track changes, review earlier versions, and understand how a project has developed.

## Technologies Used

- HTML
- CSS
- JavaScript
- Browser localStorage
- Git and GitHub

What to say out loud

1. What does the app do?

"My app is called Daily Habit Tracker. It allows users to add habits they want to develop. Users can mark habits as completed for the day, see their streaks, edit habit names, and delete habits they no longer need."

2. How does the app save data?

"My app uses the browser's localStorage to save habits and their progress. Each habit has an ID, a name, and an array of completed dates.

Whenever a user adds, edits, completes, or deletes a habit, the app saves the updated data to localStorage as a JSON string using JSON.stringify().

When the app starts, it retrieves the saved data using localStorage.getItem() and converts it back into a JavaScript array using JSON.parse().

This means the habits and their progress remain saved when the page is refreshed, as long as the browser's stored data is not cleared."