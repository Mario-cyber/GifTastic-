$(document).ready(function () {

    let tvShows = []
    console.log(tvShows);
    let newShow;

    // for (let a = 0; a < 10; a++) {

    //     for (let i = 0; i < l; i++) {
    // globally replace blank spaces with "" in order to join the name of shows more
    // more thank 1 word long.
    // put in  request for each show in the array.
    //         let show = tvShows[i].replace(/ /g, "")
    //         let queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&tag=" + show + '"';
    //         $.ajax({
    //             url: queryURL,
    //             method: "GET"
    //         }).then(function (response) {
    //             console.log(queryURL)
    //             console.log(response)
    //         })

    //     }
    // }

    $("#addNewMovie").on("click", function (event) {
        //  prevent page from resetting when the search btn is clicked 
        event.preventDefault()
        // extract the vule of the search input 
        // if the show already exist in the array or no input is given, alert user
        // otherwise push it to array of shows  
        newShow = $("#searchbar").val().trim().toLowerCase()
        if (!newShow.length) {
            alert("please enter a tv show")
        } else if (tvShows.includes(newShow)) {
            alert("show already created")
        } else {
            console.log("newShow: " + newShow)
            tvShows.push(newShow)
            $("#searchbar").val("")
            // try to clear the value of the search bar once the item has been added 
            // $(".form-control").clear()
            let newBtn = $("<button>")
            newBtn.attr("id", newShow).text(newShow)
            newBtn.attr("class", "showBtn1")
            newBtn.attr("value", newShow)
            $(".buttons-appear-here").prepend(newBtn)
            console.log(tvShows);

            $(".showBtn1").on("click", function () {
                console.log('hello', this)
                let show = this.id;
                // do something with replace
                // show.replace(/ /g, "")
                console.log(show)
                for (let a = 0; a < 10; a++) {
                    // console.log('show 2', show)
                    let queryURL = "https://api.giphy.com/v1/gifs/random?&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&rating=&tag=" + show + '"';
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).then(function (response) {
                        // obtain data from response 
                        let result = response.data;
                        console.log(result)
                        // create a div to store our GIFs
                        let gifDiv = $("<div>");
                        // create an image tag to store the GIF 
                        let gifImage = $("<img>")
                        // set an attribute of source yo out image tag
                        gifImage.attr("src", result.images.original.url)
                        // append image onto gifDiv
                        gifDiv.append(gifImage)
                        // prepend gifDive onto HTML 
                        $("#gifs-appear-here").prepend(gifDiv)
                        console.log(queryURL)
                        console.log(response)
                    })

                }
            })
        }
    })

    // get the ID of the show btn converted
    // pass it into the request 
    // get a response & do somethign with it 
    $(".showBtn1").on("click", function () {
        console.log(this.id)
        // console.log(event)
        // let show = $(".showBtn").val().trim()
        let show = $(".showBtn").prop("textContent")
        // let show = $(".showBtn").val().trim()
        // globally replace blank spaces with "" in order to join the name of shows more
        // more thank 1 word long.
        // console.log('show 1', newShow)
        show.replace(/ /g, "")
        // console.log(show)

        // for (let a = 0; a < 9; a++) {
        //     // console.log('show 2', show)
        //     let queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=bGj6DeJcRbOsxXYoAoQNgYUmJE7TDgDB&tag=" + newShow + '"';
        //     $.ajax({
        //         url: queryURL,
        //         method: "GET"
        //     }).then(function (response) {


        //         // obtain data from response 

        //         var result = response.data;

        //         // create a div to store our GIFs

        //         let gifDiv = $("<div>");

        //         // create a p-tag to store the rating of the GIF

        //         let p = $("<p>").text("Rating: " + result.rating)

        //         // create an image tag to store the GIF 

        //         let gifImage = $("<img>")

        //         // set an attribute of source yo out image tag

        //         gifImage.attr("src", result.images.fixed_height.url)

        //         // append p-tag wihth rating onto gifDiv

        //         gifDiv.append(p)

        //         // prepend gifDive onto HTML 

        //         $("#gifs-appear-here").prepend(gifDiv)




        //         console.log(queryURL)
        //         console.log(response)
        //     })

        // }


    })

})