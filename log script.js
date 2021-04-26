function btn()
        {    //username
            var uname=document.getElementById("uname").value;
            var u=/^([a-z]+)$/;
            if(u.test(uname))  //if match green not match red
            {
               
                document.getElementById("lbl").innerHTML="valid";
                 document.getElementById("lbl").style.color="green";
                document.getElementById("lbl").style.visibility="visible";
            }
            else
            {
                document.getElementById("lbl").innerHTML="Invalid";
                 document.getElementById("lbl").style.color="red";
                document.getElementById("lbl").style.visibility="visible";
            }
            //mail
            var m=document.getElementById("mail").value;
            var a= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(a.test(m))  //if match green not match red
            {
               
                document.getElementById("lbl1").innerHTML="valid";
                 document.getElementById("lbl1").style.color="green";
                document.getElementById("lbl1").style.visibility="visible";
            }
            else
            {
                document.getElementById("lbl1").innerHTML="Invalid";
                 document.getElementById("lbl1").style.color="red";
                document.getElementById("lbl1").style.visibility="visible";
            }
            //number
            var number=document.getElementById("number").value;
            var num=/^[6-9][0-9]{9}$/;
            if(num.test(number))  //if match green not match red
            {
               
                document.getElementById("lbl2").innerHTML="valid";
                 document.getElementById("lbl2").style.color="green";
                document.getElementById("lbl2").style.visibility="visible";
            }
            else
            {
                document.getElementById("lbl2").innerHTML="Invalid";
                 document.getElementById("lbl2").style.color="red";
                document.getElementById("lbl2").style.visibility="visible";
            }
            //password
            var pass=document.getElementById("password").value;
            var p=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if(p.test(pass))  //if match green not match red
            {
               
                document.getElementById("lbl3").innerHTML="valid";
                 document.getElementById("lbl3").style.color="green";
                document.getElementById("lbl3").style.visibility="visible";
            }
            else
            {
                document.getElementById("lbl3").innerHTML="Invalid";
                 document.getElementById("lbl3").style.color="red";
                document.getElementById("lbl3").style.visibility="visible";
            }

            var conf=document.getElementById("Confirm").value;
            var c=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if(c.test(conf) && pass==conf)
            {
               
                    document.getElementById("lbl4").innerHTML="valid";
                     document.getElementById("lbl4").style.color="green";
                    document.getElementById("lbl4").style.visibility="visible";
            }
                else
                {
                    document.getElementById("lbl4").innerHTML="Invalid";
                     document.getElementById("lbl4").style.color="red";
                    document.getElementById("lbl4").style.visibility="visible";
                }

            
            if(uname==null || uname=="" || mail==null || mail=="" || number==null || number=="" || pass==null || pass=="" || conf==null || conf=="")
            {
               
                alert("Boxes can't be Blank");
               
            }
            
            
                //equal
            if( u.test(uname) && a.test(m) && pass==conf && num.test(number) && pass.trim()!="" && conf.trim()!=="")
            {
                document.getElementById("lbl5").innerHTML="Validated";
                document.getElementById("lbl5").style.color="green";
               document.getElementById("lbl5").style.visibility="visible";
            }
           else
           {
               document.getElementById("lbl5").innerHTML="Not! Validate";
                document.getElementById("lbl5").style.color="red";
               document.getElementById("lbl5").style.visibility="visible";
           }
       
        }



