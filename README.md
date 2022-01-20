# Visit-log
A simple node server running on docker that tracks visits


# Application
The application is a simple node application that hosts a simple server which returns the number of times a person has visited it. Within the project exists a redis data store that keeps the record of visits to be shown.


# SetUp
Docker set up is defined in: /set-up-docker.sh


Once docker is installed run:
    docker-compose up


and open on localhost:4001
