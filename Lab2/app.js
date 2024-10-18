// propmp - will take input

//confirm - confirmation

function welcomemsg()
{
    let user_name = prompt("Enter your Name")
    console.log("Entered name is:",user_name)
    let confirmation = confirm(`Do you ${user_name} agree to our terms&conditions ?`)
    if (confirmation==true)
    {
        alert(`Welcome to our app ${user_name}`)
     }
   else
         alert("You didn't agree to our terms&conditions")
    
}
welcomemsg()

function add()
{
    var a=Number(prompt("enter the 1st no."))
    var b = Number(prompt("enter the 2nd number"))
    var c = a+b
    alert(`addition is: ${c}`);
    
}
add()