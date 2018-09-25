const express = require('express');
const app = express();
const PORT = 8086;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('routes.js')(app);
var toDoList = JSON.parse
const render = function(input) {
    $.get()
}

render(toDoList);

app.listen(PORT, function(){
    console.log(`app is now listening on port ${PORT}!`);
})