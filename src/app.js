const path = require("path");
const express = require('express');//return a function.
const hbs = require('hbs');

const app = express();//takes no argument.


//Define path for express config.
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

//tell express which templating engine is being used or installed.
//Setup handlebars engine and views locations.
app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve.
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
        helpText: 'You can contact us at 8678091410',
        title:'Help',
        name:'Rajan Jha'
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

