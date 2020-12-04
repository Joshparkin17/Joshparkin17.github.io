function nightmode() {
            var element = document.body
            element.classList.toggle("dark-mode")
            document.getElementById("home").style.background = "white";

        }
        
        function quiz()  {
            var checkbox = document.getElementById("answer");
            var text = document.getElementById("text");
            var wrongtext =document.getElementById("wtext");
          var wronganswer = document.getElementById("incorrect1");
            var wronganswer2 = document.getElementById("incorrect2");
            var img = document.getElementById("correctimage")
            if (checkbox.checked == true){
               text.style.display = "block"
                 img.style.display ="block";
            } else if(wronganswer.checked == true ||wronganswer2.checked == true) {
                text.style.display="none"
                 wrongtext.style.display = "block"
               img.style.display ="none"
            } else{
                text.style.display="none"
                wrongtext.style.display="none"
                img.style.display ="none"
            }
            
 
        }