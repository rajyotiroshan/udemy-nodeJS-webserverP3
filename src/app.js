const path = require("path");
const express = require('express');//return a function.
const hbs = require('hbs');

const request = require('request');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();//takes no argument.
const port = process.env.PORT || 3000;

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

//
/* app.get('/products',(req,res)=>{
    if(!req.query.search){//no search term
       return res.send({
            error:'No search term'
        });
    }
    console.log(req.query.search);
    res.send({
        products: []
    });
}); */

app.get('/weather',(req,res)=>{///weather
    if(!req.query.address) {//no address is provided.
        return res.send({
            error:'No Address is provided.'
        });
    }
    
    //request for forecast data.
    geocode(req.query.address, (error,{latitude, longitude, location}= {})=>{
        if(error){
            return res.send({
                error
            });
        } 
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
               return res.send({
                    error
                });
            }
            
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            });
            
        });
        
    });
});



//anypage that hasn't been match before with url /help/
app.get('/help/*', (req,res)=>{
    res.render('404', {
        title:'404',
        errorText:'This help document is not available.'
    });
});

//return response for non-existing url.
//match anything that has not been matched before.
app.get('*', (req, res)=> {
    res.render('404', {
        title:'404',
        errorText:'This page is not available',
    });
});


//start server up.
app.listen(port, ()=>{
    //runs when server is up and running.
    console.log("Server is up on port " + port + ".");
});//takes in listening port.

