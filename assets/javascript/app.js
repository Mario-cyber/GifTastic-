$(document).ready(function () {

    let tvShows = ["Madmen", "Doctor Who", "30 Rock", "Barry"]

    let queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&tag=cats";

    // trial API request (funtionla but gives nack the same GIFS )
    "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&limit=5";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL)
        console.log(response)



    })






})