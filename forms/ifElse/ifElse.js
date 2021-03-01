//In this section of code, we are defining the variables of the name, state and temperature for the input from the consumer. This will allow the correct message to show up once the data is taken.
//This section of code not only defines the variables, but it also delivers the prompts for the consumer to enter their information.
let userName = prompt("What is your first name?")
let userState = prompt("Do you live in NE or FL?")
let userTemp = prompt("What is the temperature?")

//In this section of code, we are using if... else statements in which if the state and temperature meet these standards, the correct statement of what to wear will be provided.
//When the data from above is taken, the process determine whether it is in NE or FL, and whether the temperature is below 32, in between 32 to 50, or between 50 to 70 degrees. Once determined a message is delivered to the console.
if (userState == 'NE' && userTemp < 32) 
    console.log(`${userName}, wear a warm coat, hat, scarf and gloves.`)
 else if (userState == 'NE' && userTemp >= 32 && userTemp <= 50) 
    console.log(`${userName}, wear a warm coat but you won't need a hat, scarf or gloves.`)
 else if (userState == 'FL' && userTemp >= 32 && userTemp <= 50) 
    console.log(`${userName}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
else (userState == 'FL' &&  userTemp >= 50 && userTemp <= 70) 
    console.log(`${userName}, wear a warm coat, hat and gloves. Maybe a scarf too.`)
