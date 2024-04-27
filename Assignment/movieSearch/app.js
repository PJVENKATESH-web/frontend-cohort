function movieSearch(){
    //it is callback fn and it can only access its own variables or parents variables
    let api= "https://www.omdbapi.com/?apikey=84c0054a&t="
    let title =document.getElementById("title")
    let director=document.getElementById("director")
    let actors=document.getElementById("actors")
    let plot=document.getElementById("plot")
    let awards=document.getElementById("awards")
    let ratings=document.getElementById("ratings")
    let boxOffice=document.getElementById("boxOffice")
    let imdbRating=document.getElementById("imdbRating")
    let released=document.getElementById("released")
    let writer=document.getElementById("writer")



// function movieSearch(){
    let movieName= document.getElementById("movieName");
    let query=api+movieName.value;
    fetch(query).then((data) => {
        return data.json()
    }).then((data) => { 
        title.innerText = data.Title;
        director.innerText= data.Director;
        actors.innerText= data.Actors;
        plot.innerText= data.Plot;
        awards.innerText= data.Awards;
        ratings.innerText= data.Ratings;
        boxOffice.innerText= data.BoxOffice;
        imdbRating.innerText= data.imdbRating;
        released.innerText= data.DVD;
        writer.innerText= data.Writer;
        poster.src=data.Poster;
    })
}

