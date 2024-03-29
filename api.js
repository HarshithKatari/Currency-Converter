const URL="https://cat-fact.herokuapp.com/facts/HARSHITH";
// const getData=async ()=>{
//     let response=await fetch(URL);
//     console.log(response);
//     let data=await response.json();
//     console.log(data);
//     console.log(data[Math.floor(Math.random()*5)].text)
    
//     document.getElementById("fact").innerText=data[Math.floor(Math.random()*5)].text;
// }

//PROMISE CHAINS
function getData(){
    fetch(URL).then((response)=>{
        console.log(response);
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}