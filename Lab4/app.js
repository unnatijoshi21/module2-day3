function validateForm()
{
    var username =document.getElementById('username').value
    var password = document.getElementById('password').value

    if (username!="" && password !="")
    {
        if (username.length >=5 && password.length >=8)
        {
            alert("Login Successful!")
        }
        else
            alert("Unsuccessful login, username>5 &password>8")
    
    }
    else
        alert("please enter username & password")
}