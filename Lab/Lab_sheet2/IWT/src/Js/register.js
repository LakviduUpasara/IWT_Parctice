function cheakpasswored(){


    if (document.getElementById("pwd").value!= document.getElementById("cmpwd").value){

        alert ("Passwored Mismached")
        return false ;
    }
    else{
        alert("success")
        return true ;
    }

}

function enabalebutton(){


    if (document.getElementById("checkbox").checked){
        document.getElementById("submitbtn").disabled = false ;
    }
    else
    {
        document.getElementById("submitbtn").disabled = true ;

    }

   
}