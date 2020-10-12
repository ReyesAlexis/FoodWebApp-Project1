# HOW TO RUN
- fork this repository & create your own branch
- open vscode
- make sure Docker is running on your computer
- run 'npm run start' and open in localhost:3000

# HOW TO CONTRIBUTE
HTML:
- views/-
- .jade files are essentially html files with different syntax
- these .jade pages are rendered within the GET routes, taking in parameters for variables if needed
CSS:
- public/stylesheets/styles.css
- css is used as normal
- elements can be referenced through classes/ids from the .jade files --> for example: h1(class="h1Class")
DB:
- data/users.json
- We are using diskdb for the project
- for a 'users' db:
- db = require("diskdb");
- db.connect('./data', ['users']); --> access db
- db.users.save(json data) --> store in db
- db.users.remove({ email: x@email.com }) --> remove from db
- db.users.find() --> get all elements
- db.users.findOne({ email: x@email.com }) --> get 1 element
APP.JS:
- adding routes to the app
- var indexRouter = require('./routes/index'); 
- app.use('/', indexRouter);

# TODO
LOGIN/SIGNUP:
- add css
HOMEPAGE:
- implementation of photo voting
- create a new db instance for the images & be able to link them to user's email --> db.connect('./data', ['images']);
- create a button that allows a user to add their own image (can be a separate route/page)
- add css
LEADERBOARDS: 
- get all images and order them by the number of votes they have
- display on screen & add css
LOGOUT:
- button that deletes req.session.user and redirects back to /index
