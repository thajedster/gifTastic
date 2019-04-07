var topics = ["cat", "dog", "mouse", "horse", "moose", "goose", "snake", "shark", "turtle", "lion", "tiger", "koala", "eagle", "goat"];

function renderButtons() {

    $("#buttons").empty();

    for (i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("mx-2 btn btn-primary mt-1 animal-btn");
        a.attr("data-name", topics[i]);
        a.append(topics[i]);
        $("#buttons").append(a);
    };
};

function renderGifs() {
    var q = $(this).attr("data-name");
    console.log(q);
    var limit = 10;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=6oTFSZMolB64DOk1sLggtoKI8iTykLFY&q=" + q + "&limit=10&offset=0&rating=PG-13&lang=en";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].url);

        for (i = 0; i < limit; i++) {
            var imgURL = response.data[i].images.original.url;
            var giphy = $("<img>").attr("src", imgURL);
            $("#gifs").append(giphy);
        };
    });

};

$("#add-topic").on("click", function (event) {

    event.preventDefault();

    var userChoice = $("#topic-input").val();
    topics.push(userChoice);

    renderButtons();
});

// Adding a click event listener to all elements with an class "animal-btn"
$(document).on("click", ".animal-btn", renderGifs);


renderButtons();