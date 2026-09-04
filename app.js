const myName = "Bayona";
const myCourse = "CITE 006A";
const mySection = "EMCDAT21S1";

function getGreeting(name) {
    return "Hello there, " + name + "! Welcome to the team.";
}

function getName(name) {
    return "My name is " + name;
}

function getCourseInfo(_course, _section) {   
    return "My course number is " + _course + " and my section is " + _section;
}

const http = require("http");

const server = http.createServer((req, res) => {
    res.end(getGreeting(myName) +"\n" + getName(myName) + "\n" + getCourseInfo(myCourse, mySection));
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
