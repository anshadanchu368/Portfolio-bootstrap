let links = document.querySelectorAll(".card-link");

links.forEach(link => {
    link.addEventListener("click", (event) => {
        let confirmation = confirm("Are you sure you want to leave this page?");
        if (!confirmation) {
            event.preventDefault(); 
        }
    });
});

 let cards=document.getElementsByClassName("card-body");

//  below code is for styke effect on card body
 Array.from(cards).forEach((card)=>{
   
   card.addEventListener("mouseenter",(event)=>{
     console.log(event);
     event.target.style.backgroundColor="black";
     event.target.style.color="white";
    });
    
    card.addEventListener("mouseleave",(event)=>{
      console.log(event);
      event.target.style.backgroundColor="";
      event.target.style.color="black";
    });
 })





 let validation =  (e)=>{

  e.preventDefault();

   let name=document.getElementById("name");
   let email=document.getElementById("email");
   let message=document.getElementById("message");


   if(name.value.trim()=="" || email.value.trim()=="" || message.value.trim()==""){
    alert("please fill in this form")
   }else{
     event.target.submit();
     alert("send succesfully"+name.value+" "+email.value+" "+message.value);
   }
  }
   
   let form = document.querySelector('.contact-form form');

  form.addEventListener('submit', validation);

