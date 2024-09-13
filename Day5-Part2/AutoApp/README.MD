# UI for Automobile Network

UI can be set up by multiple ways using different frameworks and approaches. Here we are using express and handlebars to create UI.

---

Here we are using using express-generator to create a sample boiler plate code for our project to work with.

To install express generator use this command

```bash
npm install -g express-generator 
```

Now create a folder using express generator called autoapp with handlebars as the view engine.

```bash
express AutoApp --view=hbs
```

This will create a folder called AutoApp with the default boilerplate with the view engine as hbs

Handlebars is a popular templating engine for JavaScript that allows you to create dynamic HTML content. It provides a simple syntax for embedding data into your HTML templates, making it easier to build web applications with reusable and maintainable code.

Go inside the AutoApp folder with this command

```bash
cd AutoApp
```

--- 

Now we are going to create the frontend for our application using handlebars

**Go to the views and copy the index.hbs layout.hbs and error.hbs**

---

Now our frontend is ready we have to add a logic for our frontend to work so we are adding a js file. For that create new file inside the following following folder **./public/javascript/main.js**

Add the code for main.js

---

Now go to the routes folder, here only we will write the logic for the seperate routes.

**Create a file called index.js and users.js**

Here only we are adding the logic for index.js and users.js. (Same code as invoke and queryTxn)

---

**Now finally copy the code for app.js** where it will import the other files and start the application

---

Now the complete application can also be done by copying KBA-Automobile-CompleteApp