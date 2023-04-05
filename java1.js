var buttonsubmit=document.getElementById("submit")
buttonsubmit.addEventListener("click",submit)
 function submit(e){
   e.preventDefault()
   var emailaddress=document.getElementById("emailaddress")
   var name=document.getElementById("name")
   var password=document.getElementById("password")
   var submit=document.getElementById("submit")
   var erorr=document.getElementById("erorr")
   var erorr1=document.getElementById("erorr1")
   var erorr2=document.getElementById("erorr2")
    if (name.value=="") {
      erorr1.textContent="please enter your name"
    }
    if (emailaddress.value==""){
    erorr.textContent="Please enter your email"
    }
    if (password.value=="") {
            erorr2.textContent="please enter your password"
          
              
        
    }
   }
  