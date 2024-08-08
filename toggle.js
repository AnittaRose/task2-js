let checkbox = document.getElementById('checkbox').onclick = function(){
    console.log('checkbox');
   if( document.body.style.backgroundColor === 'black'){
        document.body.style.backgroundColor = 'white'


    }else{
        document.body.style.backgroundColor = 'black'
    }


    let text = document.getElementById('text');

        if( text.style.color === 'white'){
            text.style.color = 'black'
        }else{
            text.style.color = 'white'
        }
}
                      


