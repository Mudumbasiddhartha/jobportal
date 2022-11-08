function validate(){
    let id = document.forms["myform"]["email"].value;
    id = id.trim();
    let pass = document.forms["myform"]["password"].value;
    pass = pass.trim();
    if(id == "" ){
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = "Please enter your Email Id";
        return false;
    }
    else if(pass == ""){
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = "Please enter your password";
        return false;
    }
    else{
        // validate email using regex
        let regex = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!regex.test(id)){
            document.getElementById("error").style.color = "red";
            document.getElementById("error").innerHTML = "Please enter a valid Email Id";
             return false;
        }
    }


}