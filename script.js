


name = document.cookie.split(';')[0].split('=')[1]

document.getElementById("name-input").value = name

windowChangeStyle()

refreshClassifica()

function addClassifica(score){
    name = document.cookie.split(';')[0].split('=')[1]


    let data = {'nome': name, 'score': parseInt(score)}

    
    fetch('http://93.48.224.122:8080/add_score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => refreshClassifica())
        

}


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

onresize = (event) => {
    windowChangeStyle()
};


function windowChangeStyle(){
    let width = window.innerWidth
    console.log(width)
    if(width < 1100){
        canvasY = 260
        document.getElementById('id-score').className = 'score-short';
        document.getElementById('id-classifica').className = 'classifica-short';
        document.getElementById('id-all-item').className = '';
        document.getElementById('id-info-window').style.display = '';

    }else{
        canvasY = 100
        document.getElementById('id-score').className = 'col-4';
        document.getElementById('id-classifica').className = 'col-4 float-end';
        document.getElementById('id-all-item').className = 'row';
        document.getElementById('id-info-window').style.display = 'none';
    }
}