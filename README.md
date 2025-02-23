# Seneca_BETT
Seneca backend technical task, Node.js, TypeScript
https://drive.google.com/file/d/1XReXrU4PJSRXEA9mRUf8kHmT1YMPCtLj/view?usp=sharing

Problem
Our learning platform needs to track a user's stats for a particular course. We do this using a stats service.


The task is to create a simplified version of this service. Your stats service needs to provide the capability to persist new stats as well as fetch aggregated stats for a course.


The stats managed by the service are exposed via an API over HTTP.
Requirements
Stats are persisted based on the completion of a learning session
Stats can be fetched for a course, which aggregates all of a user's session stats
Stats should also be fetchable for a single learning session
Stats should be persisted using a database of your choosing
The service must be easily runnable & deployable on the AWS ecosystem by the reviewer of the task
Other than Typescript being the main language, any technology can be used
The project should be submitted in the form of a code repository, hosted on Github or Gitlab
Please state any assumptions or deviations from the specification in the repository README
Your service should have some level of tests

Glossary
Course: a group of topics relating to a particular subject
Session: an instance of a user studying a topic within a course
Module: an individual piece of content shown to the user within a session


