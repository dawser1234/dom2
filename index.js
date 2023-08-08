let plus = document.querySelectorAll(".plus");
let moins = document.querySelectorAll(".moins");
let qte = document.querySelectorAll(".counter");
let heart=document.querySelectorAll(".heart")
let remove=document.querySelectorAll(".remove")
let price=document.querySelectorAll(".price")
let prixtotal=document.querySelectorAll(".pricetotal")

let pt = document.querySelector("#pt")

for (let i = 0; i<qte.length;i++)
{
    function calcul(){
        let some = 0 ;
        for (let i = 0; i<qte.length;i++)
        {
            prixtotal[i].value=Number(qte[i].innerHTML) * Number(price[i].innerHTML)
            some +=Number(qte[i].innerHTML) * Number(price[i].innerHTML)
        }
       
        console.log(some)
        pt.value= some
        

    }
    plus[i].addEventListener("click",function() {
       qte[i].innerHTML++; 
       calcul();
       
    });
}

for (let i = 0; i<qte.length;i++)
{
    

    moins[i].addEventListener("click",function() {
        if (qte[i].innerHTML>0)
        
       qte[i].innerHTML--; 
        calcul()
    
    })
    heart[i].addEventListener("click",function(){
        if (heart[i].style.color!="red")
        {
            heart[i].style.color="red"
        }
        else
        {
            heart[i].style.color="black"
        }
    }) 
    remove[i].addEventListener("click",function(event){
        event.target.parentElement.parentElement.remove()
        qte[i].innerHTML=0;
        calcul()

    })
}



