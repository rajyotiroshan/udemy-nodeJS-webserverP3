const path = require("path");
const express = require('express');//return a function.
console.log(__dirname);
console.log(path.join(__dirname,"../public"));

const app = express();//takes no argument.
const publicDirectory = path.join(__dirname, "../public");
//tell express which templating engine is being used or installed.
app.set('view engine','hbs');
app.use(express.static(publicDirectory));

app.get('',(req, res)=> {
    res.render('index', {
        title: 'Weather',
        name: 'Rajan jha'
    });
});



/* app.get('/help',(req, res)=>{///help
    //array of obj or obj as a reponse.
    res.send([{
        name:'Andrew',
        age:27
    },{
        name: "rajan", age: 27
    }]);
});
*/
app.get('/about',(req,res)=>{///about
    res.render('about', {
        title: 'About Me',
        name: 'Rajan jha'
    });
}); 

app.get('/help',(req, res)=>{
    res.render('help',{
        message: 'You contact us at 8678091410'
    });
})

app.get('/weather',(req,res)=>{///weather
    res.send({
        location: "new Delhi",
        forecast: "It is showing"
    });
});



//start server up.
app.listen(3000, ()=>{
    //runs when server is up and running.
    console.log("Server is up on port 3000.");
});//takes in listening port.

