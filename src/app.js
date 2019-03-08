const express = require('express');//return a function.


const app = express();//takes no argument.

//set up server.
//send back html as response.
app.get('/', (req, res)=> {//app.com
    res.send("<h1>Weather</h1>");//send res back to userAgent.
});//takes two args.

app.get('/help',(req, res)=>{///help
    //array of obj or obj as a reponse.
    res.send([{
        name:'Andrew',
        age:27
    },{
        name: "rajan", age: 27
    }]);
});

app.get('/about',(req,res)=>{///about
    res.send("<h1>About</h1>");
});

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

