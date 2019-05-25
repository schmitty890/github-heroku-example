# github-heroku-example

- Visit [github-heroku-example](https://github-heroku-example.herokuapp.com/) for demo.


## Purpose

See how a development process can be made easier/more streamlined for teams to collaborate with team members by utilizing githubs kanban style project board. We break tasks down into separate issues (stories), and follow a branching strategy to keep our 'production' environment in good standing at all times.


## Tech Used

<b>Built with</b>
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://www.npmjs.com/package/express)
- HTML5, CSS3, Javascript, and jQuery

# Getting Started

- Fork or clone the GitHub repo to your machine.
- In your CLI, navigate to the cloned directory. `npm install` the dependencies and run `npm start`

  `npm install`

  `npm start`

- Once started, you are able to view the project on `http://localhost:3000/`

- 🎉Happy developing!🎉


# Development 👨‍💻

The command `npm start` will automatically launch the project. Navigate to `http://localhost:3000/`


### Branching process

- Master and develop are 🔒protected branches🔒. This means we need at least 1 approval before we merge into our these branches. (having the these branches protected helps so we know for sure what is going into master and develop, and noone can accidentally push code to it and break our site).
- Develop will be the branch we create branches off of. Develop will be merged into master on a scheduled cadence decided by the team.
- This screenshot 👇 illustrates this branching process.
- Feature A and Feature B are branches where we code our tasks. Once finished with making your edits, we merge that branch into develop. At the end of everyday (or whenever the team decides), develop gets merged into master.
- Then develop is updated with the latest version of master, and the process happens all over again.

![screenshot](https://raw.githubusercontent.com/schmitty890/homestead/master/public/assets/images/branching.jpg)


### Find a bug or want to add an issue? 🕵️

- Document what the issue is, if you can find the root problem, write whatever you have down
- Go to the Issues tab, create a new issue
- Assign it to yourself if you want to work on that issue, or leave it blank and someone else can assign themselves to it if they want to take on the challenge
- Add a label to it. Most are going to be bugs or enhancement
- [See bucky talk about this in more detail](https://www.youtube.com/watch?v=YshvUGgF_3o)