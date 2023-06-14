// assigning the button and outputtext
let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

// generating a random number with a max of 25
let number = [Math.floor(Math.random() * 25)]
    console.log(number);

// btn waits for an event, which is click in this case and the function starts
btn.addEventListener("click", function(){
    let input = document.getElementById("userInput").value;
    if (input == number){
        output.innerHTML = "CORRECT!"
    } else if (input < number){
        output.innerHTML = "TOO LOW.."
    }; 
    if (input > number){
        output.innerHTML = "TOO HIGH.."
    }
})

