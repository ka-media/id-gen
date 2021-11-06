function randomNum() {

          const randomNumber = Math.floor(Math.random() * 789);

          //return Math.floor(Math.random() * 0123456789);

             if (randomNumber !== 0 && name !== " ") {

               name = prompt('Enter name of member here');
               id = "KAGRAF/";

               document.getElementById('member').innerHTML = name + '\n' + id + randomNumber * 0123456;

              }

         }

         function reset() {

              document.getElementById('member').remove();

         }

         function print() {
              if(window.print() === true) {
                   document.getElementById('btn').remove();
                   document.getElementById('reset-btn').remove();
                   document.getElementById('pri').remove();
              }
         }