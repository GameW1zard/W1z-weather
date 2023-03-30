var cityinput = $("#city")
var searchbtn = $("#searchbutton")
var li = $(".History-item")
var ul = $("#history")
const urlhold = "http://api.openweathermap.org/geo/1.0/direct?q="
const geohold = "https://api.openweathermap.org/data/2.5/forecast?lat="
var submiturl = ""
var geosubmit = ""
var lihold = ""

function makeUrl () {submiturl = urlhold + cityinput.val() + ",USA&limit=5&appid=f4033c6827b68c75bc4c8e651fc5dd75"}
function makeLocation () {geosubmit = geohold + latitude + "&lon=" + longitude + "&appid=f4033c6827b68c75bc4c8e651fc5dd75"}

searchbtn.on("click", function () {
    
    var createli = $(document.createElement('li'))
    
    createli.attr("class", "History-item list-group-item bg-primary border-dark")
    
    createli.append(cityinput.val())
    
    console.log(cityinput.val());

    ul.append(createli)

    makeUrl()

    getlocation()

})

function getlocation () {

    fetch(submiturl)

    .then(response => response.json())
    
    .then (function (response) {

        console.log(response);

        console.log(response[0].lat + " " + response[0].lon);

        let latitude = response[0].lat
        let longitude = response[0].lon

        geosubmit = geohold + latitude + "&lon=" + longitude + "&cnt=40&appid=f4033c6827b68c75bc4c8e651fc5dd75&units=imperial"

        forcast()
    })
    
    

}

function forcast () {


    fetch(geosubmit)

    .then(response => response.json())
    
    .then (function (response) {
        
       console.log(response)


    })





}


//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f4033c6827b68c75bc4c8e651fc5dd75

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{US}&limit={5}&appid={f4033c6827b68c75bc4c8e651fc5dd75}


ul.on("click", "li", function (event) {lihold = $(this).text(), submiturl = urlhold + lihold + ",USA&limit=5&appid=f4033c6827b68c75bc4c8e651fc5dd75", getlocation()})


