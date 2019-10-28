$(document).ready(function () {

    let tvShows = []
    console.log(tvShows);
    let newShow;

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
            newBtn.attr("class", "showBtn")
            newBtn.attr("value", newShow)
            $(".buttons-appear-here").prepend(newBtn)
            console.log(tvShows);

            $(".showBtn").on("click", function () {
                event.preventDefault()
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
                        // console.log(result)
                        // create a div to store our GIFs
                        let gifDiv = $("<div>");
                        // create an image tag to store the GIF 
                        let gifImage = $("<img>")
                        // set an attribute of source to the image tag
                        // gifImage.attr("src", result.images.original.url)
                        gifImage.attr("src", result.images.original_still.url)
                        // store both the original_still and orginal urls's into data types 
                        gifImage.attr("data-move", result.images.original.url)
                        gifImage.attr("data-pause", result.images.original_still.url)
                        // set a "state attribute" to recognize wether image is paused or not (thanks to Lisa Michael for showing me this approach)
                        gifImage.attr("data-state", "paused")
                        // give the GIFs a common class
                        gifImage.attr("class", "gif")
                        // append image onto gifDiv
                        gifDiv.append(gifImage)
                        // prepend gifDive onto HTML 
                        $("#gifs-appear-here").prepend(gifDiv)
                        // console.log(queryURL)
                        // console.log(response)

                        // set another on click function in order to change the stae of you GIFs
                        $(".gif").on("click", function () {
                            // set on click function for individual GIFs and retrieve and decalsre their "state", "move", and "pause" data
                            let state = $(this).attr("data-state");
                            let movingGif = $(this).attr("data-move");
                            let pausedGif = $(this).attr("data-pause");

                            console.log(state)
                            console.log(movingGif)
                            console.log(pausedGif)

                            if (state === "paused") {
                                $(this).attr("src", movingGif);
                                $(this).attr("data-state", "moving");
                            } else if (state === "moving") {
                                $(this).attr("src", pausedGif);
                                $(this).attr("data-state", "paused");
                            }


                        })
                    })

                }
            })

        }
    })

    // $(".gif").on("click", function () {

    //     src = $(this).attr("src");
    //     console.log("this should be a link" + src)

    // })

})