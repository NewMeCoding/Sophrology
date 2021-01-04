 function trySophrologySession() {
            let name = prompt("What is your name?");
            let age = prompt("How old are you?");
            let emailAdress = prompt("What is your email adress?");
            let city = prompt("In which city do you live?");

            if (age >= 18) {
                alert("Dear " + name + ", we've just sent you an email with the nearest sophrology centers in " + city + ".");
                let h2 = document.querySelector("h2");
                h2.innerHTML = `Thanks for subscribing ${name}! You will soon find your inner peace 😉`;
            } else {
                alert(`Sorry ${name}, you cannot try any sophrology session yet.`);
            }
            
        }

        let tryButton = document.querySelector("button");
        tryButton.addEventListener("click", trySophrologySession);