function addNumber()
{
    console.log("------------------")
    var OneNumber = parseInt(document.getElementById('numOne').value)
    var TwoNumber = parseInt(document.getElementById('numTwo').value)
    var addition = OneNumber+TwoNumber
    document.getElementById('result').innerHTML = "The sum is "+ addition
    // console.log(OneNumber+TwoNumber);
    
}
function multiplyNumber()
{
    console.log("------------------")
    var ThreeNumber = parseInt(document.getElementById('numThree').value)
    var FourNumber = parseInt(document.getElementById('numFour').value)
    var multiplication = ThreeNumber*FourNumber
    document.getElementById('result2').innerHTML = "The multiplication is "+ multiplication
    // console.log(OneNumber+TwoNumber);
    
}