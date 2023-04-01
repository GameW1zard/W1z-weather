var cityinput = $("#city")
var searchbtn = $("#searchbutton")
var li = $(".History-item")
var ul = $("#history")
var todayul = $("#todayul")
const urlhold = "http://api.openweathermap.org/geo/1.0/direct?q="
const geohold = "https://api.openweathermap.org/data/2.5/forecast?lat="
const dailyhold = "https://api.openweathermap.org/data/2.5/weather?lat="
var todayurl = ""
var submiturl = ""
var geosubmit = ""
var lihold = ""
var latitude = ""
var longitude = ""
var iconcode = ""
function makeUrl () {submiturl = urlhold + lihold + ",USA&limit=5&appid=f4033c6827b68c75bc4c8e651fc5dd75"}
function makeLocation () {geosubmit = geohold + latitude + "&lon=" + longitude + "&appid=f4033c6827b68c75bc4c8e651fc5dd75"}

searchbtn.on("click", function () {
    
    var createli = $(document.createElement('li'))
    
    createli.attr("class", "History-item list-group-item bg-primary border-dark")
    
    createli.append(cityinput.val())
    
    console.log(cityinput.val());

    ul.append(createli)

    lihold = cityinput.val()

    makeUrl()

    getlocation()

    today()

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

        todayurl = dailyhold + latitude + "&lon=" + longitude + "&appid=f4033c6827b68c75bc4c8e651fc5dd75&units=imperial"

        forcast()

        today()

    })
    
    

}

function today () {

    fetch(todayurl)

    .then(response => response.json())
    
    .then (function (response) {
        var iconurl =""
        var iconcode = response.weather[0].icon
        var imgtoday = $("#imgtoday")
        let today = dayjs().format("DD/MM/YY")
        let todaybody = $("#todaybody")
        //today card
        $(todaybody).children().eq(0).text(lihold + " " + today)
        $(todayul).children().eq(0).text("Tempurture " + response.main.temp)
        $(todayul).children().eq(1).text("Humidity " + response.main.humidity)
        $(todayul).children().eq(2).text("Wind speed " + response.wind.speed)

        console.log("icon " + iconcode)

        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        imgtoday.attr("src", iconurl)
        //end today card
        console.log(response)

    })


}

function forcast () {


    fetch(geosubmit)

    .then(response => response.json())
    
    .then (function (response) {
        console.log(response)
        let iconcode = response.list[9].weather[0].icon
        let day = $("#day1image")
        let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        day.attr("src", iconurl)
      


    })
}


//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f4033c6827b68c75bc4c8e651fc5dd75

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{US}&limit={5}&appid={f4033c6827b68c75bc4c8e651fc5dd75}

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=f4033c6827b68c75bc4c8e651fc5dd75

ul.on("click", "li", function (event) {lihold = $(this).text(), submiturl = urlhold + lihold + ",USA&limit=5&appid=f4033c6827b68c75bc4c8e651fc5dd75", getlocation()})
function now () {}

//8 17 26 35



