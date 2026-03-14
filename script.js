function login(){

const username=document.getElementById("username").value
const password=document.getElementById("password").value

if(username==="admin" && password==="password"){
document.getElementById("loginStatus").innerText="Login successful"
}
else{
document.getElementById("loginStatus").innerText="Invalid login"
}

}


// currency list

const currencies=[
"USD","EUR","GBP","JPY","AUD","CAD","CHF","CNY","HKD",
"SGD","INR","KRW","MXN","BRL","ZAR"
]


const from=document.getElementById("fromCurrency")
const to=document.getElementById("toCurrency")

currencies.forEach(c=>{

let option1=document.createElement("option")
option1.value=c
option1.text=c

let option2=document.createElement("option")
option2.value=c
option2.text=c

from.appendChild(option1)
to.appendChild(option2)

})


// currency conversion using free API

async function convert(){

const amount=document.getElementById("amount").value
const fromCurrency=document.getElementById("fromCurrency").value
const toCurrency=document.getElementById("toCurrency").value

const url=`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`

const response=await fetch(url)
const data=await response.json()

document.getElementById("result").innerText=data.result

}