

name = document.cookie.split(';')[0].split('=')[1]

document.getElementById("name-input").value = name






function nameSave(name){
    document.cookie = "name="+name
}