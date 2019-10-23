$(document).ready(function () {

    let tvShows = ["Madmen", "Doctor Who", "30 Rock", "Barry", "Marvelous Mrs Maisel", "black mirror"]
    console.log(tvShows);

    let l = tvShows.length;

    for (let a = 0; a < 2; a++) {

        for (let i = 0; i < l; i++) {
            // globally replace blank spaces with "" in order to join the name of shows more
            // more thank 1 word long.
            // put in  request for each show in the array.
            let show = tvShows[i].replace(/ /g, "")
            let queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&tag=" + show + '"';
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(queryURL)
                console.log(response)
            })

        }
    }

    $("#addNewMovie").on("click", function (event) {
        //  prevent page from resetting when the search btn is clicked 
        event.preventDefault()
        // extract the vule of the search input 
        // if the show already exist in the array, alert user
        // otherwise push it to array of shows  
        let newShow = $("#searchbar").val().trim()
        if (tvShows.includes(newShow)) {
            alert("show already created")
        } else {
            tvShows.push(newShow);
            console.log(tvShows);
        }

        // create a loop to make multiple request for each show in array (put this on the on)

        // let queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&tag=" + show + '"';
        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // })

        // newShow = document.getElementById("searchbar");
        // $(newShow).value()

        // let newShow = $("#searchbar").val().trim()


    })

    // for (let i = 0; i < 5; i++) {
    //     tvShows.forEach(

    //     )

    // }



})