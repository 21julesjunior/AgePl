function Calculate() {
    let age = document.getElementById('age').value
    let ha = age * 365

    document.getElementById("test").innerHTML = "You have spent " + ha + " days on this earth !";
}
