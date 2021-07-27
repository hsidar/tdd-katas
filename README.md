# REQUIREMENTS

Feature: Publishing
   Scenario: Alice publishes messages to her personal timeline.   
      Given Alice has published "I love the weather today."
      When Alice views her timeline
      Then Alice sees:
         "I love the weather today."
      
Feature: Timeline
   Scenario: Alice views Bob's timeline.
      Given Bob has published "Darn! We lost!"
      And Bob has published "Good game though."
      When Alice views Bob's timeline
      Then Alice sees:
         Good game though. (1 minute ago)
         Darn! We lost! (2 minute ago)
      
Feature: Following
   Scenario: Charlie can follow Alice and Bob, and he views an aggregated list of all timelines.
      Given Alice has published "I love the weather today."
      And Bob has published "Darn! We lost!"
      And Bob has published "Good game though."
      And Charlie has published "I'm in New York today! Anyone wants to have a coffee?"
      When Charlie follows Alice
      And Charlie follows Bob
      And Charlie views his wall
      Then Charlie sees:
         Charlie - I'm in New York today! Anyone wants to have a coffee? (15 seconds ago)     
         Bob - Good game though. (1 minute ago)     
         Bob - Damn! We lost! (2 minutes ago)     
         Alice - I love the weather today (5 minutes ago)

# NOTES

- Node express app
- Utilizes docker to run same testing environment that CI/CD would in order to sanity check that tests pass in a known state.
- Architecture follows 2 main patterns:
  - endpoint gets things through services that get data through repositories
  - most modules are served through an index.js
- Business logic should be localized mainly to services
- Folderizing everything keeps things from getting too cluttered if you were to, say, add tests to every js module or if you wanted to abstract out a large, but necessary function but keep it in context.

# HOW TO BUILD AND RUN:

## Docker:

Running with docker requires docker cli to be installed and docker to be running on your machine.

From root directory of project

```
docker build -t <whatever name pleases you>
docker run <whatever name pleased you>
```

## Node

From root directory of project

```
npm install
npm test
```

# SCHEMA

User
id : integer
username: varchar
avatar: url
createdAt: timestamp
updatedAt: timestamp

-- if on no-sql DB --
followedUsers integer[]

Messages
id: integer
userId: integer
message: varchar
createdAt: timestamp
updatedAt: timestamp

-- if on relational DB --
Follows
id: integer
followingUserId: integer
followedUserId: integer
