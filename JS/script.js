function myFunction() {
     
    var username=document.getElementById("name");
    var dob=document.getElementById("dob");
    if(username.value=="")
    {
        //alert("Enter your name");
        username.style.border="2px solid red";
        document.getElementById("demo").style.visibility="visible";
        return false;
        // document.getElementById("demo").innerHTML = "Please enter your name"; 
    }
    else if(dob.value=="")
    {
       // alert("Enter your date of birth");
       dob.style.border="2px solid red";
       document.getElementById("demo1").style.visibility="visible";
        return false;
        // document.getElementById("demo1").innerHTML = "Please select your Date Of Birth"; 
    }
    else if(number.value=="")
    {
       // alert("Enter your contact number");
       number.style.border="2px solid red";
       document.getElementById("demo2").style.visibility="visible";
        return false;
        // document.getElementById("demo2").innerHTML = "Please enter your mobile number"; 
    }
    else{
        true;
    }
    /* document.getElementById("demo").innerHTML = "Please enter your name";  */

  }
  var a= document.getElementsByClassName("display-inline");
  console.log(a);
  var b= document.querySelectorAll(".display-inline");
  console.log(b);

  function isInputNumber(evt)
  {
      var mobnum=String.fromCharCode(evt.which);
      if(!(/[0-9]/.test(mobnum)))
      {
          evt.preventDefault();
      }
  }

  function isInputUserName(evt)
  {
      var uname=String.fromCharCode(evt.which);
      if(!(/[a-zA-z]/.test(uname)))
      {
          evt.preventDefault();
      }
  }