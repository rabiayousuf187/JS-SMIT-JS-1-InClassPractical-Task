console.log("Form Submit");

function enter(id){
    document.getElementById(id).style.border = "1px solid blue";
    document.getElementById(id).style.boxShadow= "none";
}

function exit(id){
    document.getElementById(id).style.borderColor = "#dee2e6";
}

function submit(){
    let user = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let city = document.getElementById("city").value;


    console.log("Email = ",email);
    console.log("password = ",password);
    console.log("city = ",city);
    console.log("country = ",country);
    
    // if( true){
    if( user !== "" && email !== "" && password !== "" && city !== "" ){

        if( city === "Karachi" || city === "Lahore" || city === "Islamabad" || city === "Multan" || city === "Hyderabad" ||city === "Peshawar" )
        {
            document.getElementById("country").value;
            country.value = "Pakistan";
        }
        console.log("Form is Valid");
        document.getElementById("alert").style.display = "none";
        document.getElementById("msg-success").style.display = "block";
        let head = document.getElementById("heading").getElementsByTagName("h1");
        head[0].style.display = "none";
        setTimeout( ()=>{ 
            document.getElementById("banner").style.display = "none"; 
            document.getElementById("form").style.display = "none"; 
            document.getElementById("sub-btn").style.display = "none";
            document.getElementById("msg-success").style.display = "none";
            document.getElementById("body").className = "body"; 
            
        }, 500);
        setTimeout( ()=> {
            head[0].style.display = "block";
            head[0].className += " head-change";
            head[0].innerHTML = "Hi, " + user;
        } , 500);
            setTimeout( ()=> {
                head[0].innerHTML = "Welcome to the Tech Show"
            } , 4000)
            setTimeout( ()=> {
                head[0].innerHTML = "Have Fun!";
            } , 6000);
        
        
        
    }
    else{
        document.getElementById("alert").style.display = "block";
        console.log("some feild left blank!");

    }


}