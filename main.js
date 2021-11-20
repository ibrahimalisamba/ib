let searchbox=document.getElementById("searchbox");
let buttton=document.getElementById("searchbtn");
let result=document.getElementById("result");


buttton.addEventListener( "click",function(e){
        
            fetch(`http://numbersapi.com/${searchbox.value}?json`)
               .then(function(res) {
                     return res.json ();
                } )
            .then(function(data ){
                result.innerText=data.text;
            });



    }
)
 