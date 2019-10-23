$(document).ready(function () {

    let tvShows = ["Madmen", "Doctor Who", "30 Rock", "Barry"]

    // let queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&tag=" + tvShows + "&limit=4";

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(queryURL)
    //     console.log(response)
    // })

    let l = tvShows.length

    for (let i = 0; i < l; i++) {
        show = tvShows[i];
    }

    $("#addNewMovie").on("click", function (event) {
        event.preventDefault()
        let queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&tag=" + show + '"';
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        // newShow = document.getElementById("searchbar");
        // $(newShow).value()

        let newShow = $("#searchbar").val().trim()
        tvShows.push(newShow);
        console.log(newShow);
        console.log(tvShows);

    })

    // for (let i = 0; i < 5; i++) {
    //     tvShows.forEach(

    //     )

    // }



})