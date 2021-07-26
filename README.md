# NOTES

- Node express app
- Utilizes docker to run same testing that CI/CD would in order to sanity check that tests pass in a known state.


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

# OTHER THINGS I WOULD DO