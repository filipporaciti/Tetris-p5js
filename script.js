

name = document.cookie.split(';')[0].split('=')[1]

document.getElementById("name-input").value = name


refreshClassifica()


function refreshClassifica(){
    
    fetch('http://93.48.224.122:8080/visualizza_classifica')
        .then((response) => response.json())
        .then((data) => {
            data = data['data']
            for(let i=1; i<11; i++){
                let testoAdd = ''
                if(i <= data.length){
                    testoAdd = data[i-1]['nome'] + ' - ' + data[i-1]['score']
                }else{
                    testoAdd = '???'
                }
                document.getElementById('pos-'+i.toString()).innerHTML = testoAdd

            }
        })
}




function nameSave(name){
    document.cookie = "name="+name
}