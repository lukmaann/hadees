var hadees={
    0:"Deen asaan hai",
    1:"Jannat ki chabi namaz hai",
    2:"Jo dhoka de oo hum musalmano me se nahi",
    3:"Baat karne se pehle salam karo",
    4:"hamesha sach baat karo"
}

document.getElementById("change").addEventListener('click',()=>{
    var ran=Math.floor( Math.random()*5)
    
    document.getElementById("hadees").innerText=hadees[ran]

    

});