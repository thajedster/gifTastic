var topics = ["cat", "dog", "mouse", "horse", "moose", "goose", "snake", "shark", "turtle", "lion", "tiger", "koala", "eagle", "goat"];

function renderButtons() {

    $("#buttons").empty();

    for (i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("mx-2 btn btn-primary mt-1")
        a.append(topics[i]);
        $("#buttons").append(a);
    };
};

function renderGifs() {
    var q = $("#topic-info").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=6oTFSZMolB64DOk1sLggtoKI8iTykLFY&q=" + q + "&limit=10&offset=0&rating=PG-13&lang=en";

    $(this).on("click", function () {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

        })
    }

$("#add-topic").on("click", function (event) {

        event.preventDefault();

        var userChoice = $("#topic-input").val();
        topics.push(userChoice);

        renderButtons();
    });



    renderButtons();