$(document).ready(function () {

    let tvShows = ["Madmen", "Doctor Who", "30 Rock", "Barry"]

    let queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&tag=" + tvShows + "&limit=4";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL)
        console.log(response)



    })






})