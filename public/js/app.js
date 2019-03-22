console.log("client side js file");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

//listener for dearch form submit evt
weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();    
    const location = search.value;
    
    //fetch address.
    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error);
            }else {
            console.log(data); 
            }
        });
    })
    console.log(location);
});