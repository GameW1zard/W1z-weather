var cityinput = $("#city")
var searchbtn = $("#searchbutton")
var li = $(".History-item")
var ul = $("#history")
var searchurl = "http://api.openweathermap.org/geo/1.0/direct?q=Austin,USA&limit=1&appid=f4033c6827b68c75bc4c8e651fc5dd75"





searchbtn.on("click", function () {
    
    var createli = $(document.createElement('li'))
    
    createli.attr("class", "History-item list-group-item bg-primary border-dark")
    
    createli.append(cityinput.val())
    
    console.log(cityinput.val());

    ul.append(createli)

})

function forcast () {

    fetch(searchurl)

    .then(response => response.json())
    
    .then (function (response) {

        console.log(response)



    })
    
    ;

}

//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={f4033c6827b68c75bc4c8e651fc5dd75}

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{US}&limit={5}&appid={f4033c6827b68c75bc4c8e651fc5dd75}


ul.on("click", "li", function(event){console.log($(this).text())})


forcast()
