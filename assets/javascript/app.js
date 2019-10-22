$(document).ready(function () {


    let queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&limit=5";
    // queryURL.done(function (data) {
    //     console.log("success got data", data);
    // });

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL)
        console.log(response)

    })




})