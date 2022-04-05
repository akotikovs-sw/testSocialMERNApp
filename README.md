## Hello this MERN stack application will connect FE as React and ExpressJs as Backend. As database this project is using mysql, which runs in the container via docker-compose file.

> #### ***Please make sure that docker is installed on your machine, before run the project***

### Project installation locally

#### 1. Create a folder on Desktop `mkdir social`
#### 2. Clone repository in this `social` folder `git clone git@github.com:akotikovs-sw/testSocialMERNApp.git .`
#### 3. Go to frontend folder and run `yarn`
#### 4. Go to backend folder and run `yarn`

<br>

### Run project locally

#### 0. From `social folder` run `docker-compose up -d`
#### 1. Go to the frontend container and run `yarn start`. Will be automatically opened browser on `localhost:3000`, where you will see the posts, and a form to create a post.
#### 2. Go to the backend container and run `yarn start`. Will be running the server on `localhost:5000`.

<br>

## Troubleshooting

### Most likely you will catch the error with  mysql and backend. Run `docker inspect -f "{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}" $(docker ps -aq)` and copy ip address.
### Now open index.js from beckend root folder and change line 19 with your copied ip address.