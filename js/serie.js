var main = document.querySelectorAll('.main', '.center')[0];

fetch('https://api.themoviedb.org/3/tv/popular?api_key=41565a1f50edfb3a733f4d787472c625&language=en-US&page=1')
.then(response => response.json())
.then(data=>{
    //console.log(data);
    data.results.map((i,j)=>{
        if(j > 21)
            return;
        if(j == 0){
            main.innerHTML+=`
                <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j == 1){
                main.innerHTML+=`
                    <h2>Assista as melhores séries</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`"/></div>
                `;
            }else{
                main.innerHTML+=`
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`"/></div>
                `;
            }
        }
    })
});

