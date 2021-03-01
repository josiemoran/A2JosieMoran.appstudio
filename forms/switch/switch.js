//In this section of code we are defining the variables as well as creating the prompts that allow the consumer to enter their necessary information.
let name = prompt("What is your first name?")
let state = prompt("Do you live in NE or FL?")
let temp = prompt("What is the temperature?")

//In this section this variable contains all of the messages that are possible when consumers are entering their data. But as opposed to hard coding it is using index elements so it can apply to their specific input.
let message = [`${name}, wear a warm coat, hat, scarf and gloves.`, `${name}, wear a warm coat but you won't need a hat, scarf or gloves.`, `${name}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`, `${name}, wear a warm coat, hat and gloves. Maybe a scarf too.`]

//In this section of the code, we are using a switch that creates 4 cases that replace the if... else statements and you are still using the determinants to see what they should wear, but in this case its from the switches. The data thats inputted will connect to the cases and deliver you a message.
switch (true) {
    case state == 'NE' && temp < 32 : 
        console.log(message[0])
        break;
    case state == 'NE' && temp >= 32 && temp <= 50 :
        console.log(message[1])
        break;
    case state == 'FL' &&  temp >= 32 && temp <= 50 :
        console.log(message[2])
        break;
    case state == 'FL' && temp >= 50 && temp <= 70 :
        console.log(message[3])
        break;
    }
