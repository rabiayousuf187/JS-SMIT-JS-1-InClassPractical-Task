console.log("Form Submit");

function enter(id){
    document.getElementById(id).style.border = "1px solid blue";
    document.getElementById(id).style.boxShadow= "none";
}

function exit(id){
    document.getElementById(id).style.borderColor = "#dee2e6";
}

function submit(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;

    console.log("Email = ",email);
    console.log("password = ",password);
    console.log("city = ",city);
    console.log("country = ",country);
    
    if( email !== "" && password !== "" && city !== "" && country !== ""){
        document.getElementById("msg-success").style.display = "block";
        
        console.log("Form is Valid");
        
    }
    else{
        document.getElementById("alert").style.display = "block";
        console.log("some feild left blank!");

    }


}