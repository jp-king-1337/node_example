const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "name",
        message: "Please enter your name."
    },
    {
        name: "age",
        type: "number",
        message: "Please enter your age."
    }
]).then((answerObj) => {
    console.log(answerObj);
})