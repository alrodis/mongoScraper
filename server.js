// dependecies up top
// this is the setup - what will handle moving data back and forth
// this is what will read models and routes

var cheerio = require("cheerio");
var request = require("request");


request("http://www.nytimes.com", function(error, response, html) {
    //loading html into cheerio and saving it as a variable
    var $ = cheerio.load(html);
    //an empty array to save the data that we scrape
    var results = [];
    //selecting each element in the html body from which you want information
    $("h2.story-heading").each(function(i, element) {

        var link = $(element).children().attr("href");
        var title = $(element).children().text();
        var summary = $("#summary").siblings("summary").text();

        //save these results in an object that we'll push into the results array defined earlier
        results.push({
            title: title,
            link: link,
            summary: summary
        });
    });
    console.log(results);
});


// <ul id="fruits">
//   <li class="apple">Apple</li>
//   <li class="orange">Orange</li>
//   <li class="pear">Pear</li>
// </ul>