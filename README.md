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

Here is a helpful reminder of the git process when creating, adding to, committing and pushing branches. Refer to this whenever needed, as working in a team environment with branches really helps keep everyones code organized and makes the project much more manageable.

```
1. Start on a clean branch

  1.1 Check which branch you're on `git branch`

  1.2 Start on develop branch, `git checkout develop`

  1.3 Do a `git pull` to get the latest copy of develop

  1.4 Create your new branch to code your story, `git checkout -b <branchname>` (Title your branch name the title of the story you're working on, replace spaces with -)

  1.5 Now you're on your own branch. Type `git branch` to see you're on your new branch

  1.6 Now write your code ✏️
```

```
2. You're done writing code, time to add your files and commit message to your branch

  2.1 Type `git status` to see the status of the files you've worked on. (these should be red, because you havent added them yet)

  2.2 To add these files, type `git add .` to add all files

  2.3 Type `git status` again, you will now see the files are green, which indicates they have been added to your branch

  2.4 Now make your commit message that says specifically what code you changed in this story. `git commit -m "your commit message here"`
```  

```
3. You're ready to push your branch up to github

  3.1 Next, push your code up to the repository, with a `git push origin <branchname>`

  3.2 Once your branch is pushed up, navigate to our repo, and you can see branch under "Your recently pushed branches:". Click on Compare & pull request

  3.3 ❗Choose the base branch `development` as that will be the branch that you merge your branch into. (the development branch will be merged into master daily TODO: determine when we want builds to master branch to happen ❓)

  3.4 On the right hand side, add reviewers to review your pull request. Then click "Create Pull Request"

  3.5 Once your pull request is approved and merged, it will be 🙌built out into master🙌 during the next build to production. (TODO: determine when we want builds to maste branch to happen ❓)
```

### Find a bug or want to add an issue? 🕵️

- Document what the issue is, if you can find the root problem, write whatever you have down
- Go to the Issues tab, create a new issue
- Assign it to yourself if you want to work on that issue, or leave it blank and someone else can assign themselves to it if they want to take on the challenge
- Add a label to it. Most are going to be bugs or enhancement
- [See bucky talk about this in more detail](https://www.youtube.com/watch?v=YshvUGgF_3o)