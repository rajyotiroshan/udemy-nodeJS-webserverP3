const path = require("path");
const express = require('express');//return a function.
const hbs = require('hbs');
//console.log(__dirname);
//console.log(path.join(__dirname,"../public"));
const app = express();//takes no argument.

/**
 * Define path for Express Config. 
 */
const publicDirectory = path.join(__dirname, "../public");
//customize views directory.
const viewsPath = path.join(__dirname, '../templates/views');
//path for partials
const partialsPath = path.join(__dirname,'../templates/partials')

/**
 *   Setup handlebars engine and views location.
 */
//tell express which templating engine is being used or installed.
app.set('view engine','hbs');
//tell express to use above path for views.
app.set('views',viewsPath);
//regiter partial for hbs
hbs.registerPartials(partialsPath);

//Setup static dir to serve.
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
        message: 'You can contact us at 8678091410'
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

