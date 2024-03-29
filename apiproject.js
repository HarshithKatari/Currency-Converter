const url="https://api.exchangeratesapi.io/latest?base=${frm}&symbols=${to}";
const dropdowns=document.querySelectorAll(".dropdown select");
// for(let code in countryList){
//     console.log(code,countryList[code]);
// }
const btn=document.querySelector("button");
let from,to;
for(let select of dropdowns){
    for(curr in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=curr;
        newOption.value=curr;
        select.append(newOption);
        if(select.name==="from" && curr==="USD"){
            newOption.selected="selected"
        }
        if(select.name==="to" && curr==="INR"){
            newOption.selected="selected"
        }
        
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
    })
    const updateFlag=(ele)=>{
        let currCode=ele.value;
        let countryCode=countryList[currCode];
        let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
        // let img=ele.parentElement.querySelector("img");
        let img;
        if(ele.name==="from"){
        img=document.querySelector(".flag1 img");
        from=currCode;
        }
        else{
            img=document.querySelector(".flag2 img");
            to=currCode;
        }
        img.src=newsrc;
    }
}
btn.addEventListener("click",async (evt)=>{
let amount=document.querySelector(".amount").value;
if(amount=="" ||amount<0){
    amount="1";
}
const f=from.toLowerCase();
const t=to.toLowerCase();
console.log(from,to);
const base=`https://api.exchangeratesapi.io/latest?base=${f}&symbols=${t}`;
let response=await fetch(base);
console.log(response);
let data=await response.json();
console.log(data);
let finalamount=data[t.toLowerCase().value]*amount;
document.getElementsByClassName(".mainmsg h1").innerText=`${amount}${f}=${finalamount}${t}`;


})
