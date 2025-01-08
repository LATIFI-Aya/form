
function showSecondForm(event) {
   event.preventDefault(); 

   
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const phone = document.getElementById('phone').value;
   const age = document.getElementById('age').value;
   const university = document.getElementById('university').value;

   
   document.getElementById('form1').style.display = 'none';
   document.getElementById('form2').style.display = 'block';

   
   document.getElementById('name2').value = name;
   document.getElementById('email2').value = email;
   document.getElementById('phone2').value = phone;
   document.getElementById('age2').value = age;
   document.getElementById('university2').value = university;
}






















/*
   event.preventDefault();

   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const phone = document.getElementById('phone').value;
   const age = document.getElementById('age').value;
   const university = document.getElementById('university').value;

   localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('age', age);
    localStorage.setItem('university', university);

    window.location.href = 'form2.html';
   }

   const name = document.getElementById('name');
   const email = document.getElementById('email');
   const form = document.getElementById('form');
   const errorElement = document.getElementById('error');

   form.addEventListener('submit', (e) => {
      let messages = [];
      if (name.value === '' || name.value == null) {
          messages.push('Name is required');
      }
      if (email.value.length <= 6) {
          messages.push('Email must be longer than 6 characters');
      }
      if (messages.length > 0) {
          e.preventDefault();
          errorElement.innerText = messages.join(', ');
      }
  });

  window.onload = function() {
   const name = localStorage.getItem('name');
   const email = localStorage.getItem('email');
   const phone = localStorage.getItem('phone');
   const age = localStorage.getItem('age');
   const university = localStorage.getItem('university');

   document.getElementById('name').value = name;
   document.getElementById('email').value = email;
   document.getElementById('phone').value = phone;
   document.getElementById('age').value = age;
   document.getElementById('university').value = university;
};
*/

/*var buttonafficher= document.getElementById('submit');
var cacherDiv= document.getElementById('cachediv');
buttonafficher.onclick=function afficher_cache_div(){
cacherDiv.style.display='block'
};
const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

Form.addEventListener('submit', (e)=>{
   let messages = []
   if (name.value === '' || name.value == null){
      messages.push('Name is required')
   }
   if(email.value.lenght <= 6){
      messages.push('email must be longer than 6 characteres')
   }
   if (messages.length > 0){
      e.preventDefault()
      errorElement.innerText = messages.join(',')
   }
      
})
   */



/* function validateform(){
 //  var name = document.getElementById("name").Value;
// var email = document.getElementById("email").Value;
    var phone = document.getElementById("phone").Value;
    var university = document.getElementById("university").Value;
    var resume = document.getElementById("resume").Value;

     if (name ===""|| email===""|| phone===""|| university===""|| resume===""){
        alert("All fields are required.")
        return false;
     }*/
   //   var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   //   if (!emailPattern.test(email)){
   //      alert("Please enter a valid email adresss");
   //      return false;
   //   }
/*var phonePattern = /^[0-9]{10}$/;
     if (!phonePattern.test(phone)){
        alert("Please enter a valid phone number (10 digits)");
        return false;
     }
     alert("your application has been submitted successfully");
     return true;
    
} 
     */    