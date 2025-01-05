function validateform(){
    var name = document.getElementById("name").Value;
    var email = document.getElementById("email").Value;
    var phone = document.getElementById("phone").Value;
    var university = document.getElementById("university").Value;
    var resume = document.getElementById("resume").Value;

     if (name ===""|| email===""|| phone===""|| university===""|| resume===""){
        alert("All fields are required.")
        return false;
     }
     var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if (!emailPattern.test(email)){
        alert("Please enter a valid email adresss");
        return false;
     }
     var phonePattern = /^[0-9]{10}$/;
     if (!phonePattern.test(phone)){
        alert("Please enter a valid phone number (10 digits)");
        return false;
     }
     alert("your application has been submitted successfully");
     return true;
    
}     