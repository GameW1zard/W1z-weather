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
var lihold = "Pensacola"
var latitude = ""
var longitude = ""
var iconcode = ""

function makeLocation () {geosubmit = geohold + latitude + "&lon=" + longitude + "&appid=f4033c6827b68c75bc4c8e651fc5dd75"}

function onload() {
    makeUrl()    
    
    getlocation()
    
}

function makeUrl () {submiturl = urlhold + lihold + ",USA&limit=5&appid=f4033c6827b68c75bc4c8e651fc5dd75"}

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

        today()

        forcast1()

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

function forcast1 () {


    fetch(geosubmit)

    .then(response => response.json())
    
    .then (function (response) {
        console.log(response)
        let today = dayjs()
        let daybody = $("#day1body")
        let iconcode = response.list[9].weather[0].icon
        let dayimg = $("#day1image")
        let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        let day = $("#day1")
        
        daybody.children().eq(0).text(lihold + " " + today.add(1, "day").format("DD/MM/YY"))
        $(day).children().eq(0).text("Tempurture " + response.list[4].main.temp) 
        $(day).children().eq(1).text("Wind Speed " + response.list[4].wind.speed)
        $(day).children().eq(2).text("Humidity " + response.list[4].main.humidity)
        dayimg.attr("src", iconurl)
      
        
        let daybody2 = $("#day2body")
        let iconcode2 = response.list[9].weather[0].icon
        let dayimg2 = $("#day2image")
        let iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
        let day2 = $("#day2")
        
        daybody2.children().eq(0).text(lihold + " " + today.add(2, "day").format("DD/MM/YY"))
        $(day2).children().eq(0).text("Tempurture " + response.list[12].main.temp) 
        $(day2).children().eq(1).text("Wind speed " + response.list[12].wind.speed)
        $(day2).children().eq(2).text("Humidity " + response.list[12].main.humidity)
        dayimg2.attr("src", iconurl2)
      
       
        let daybody3 = $("#day3body")
        let iconcode3 = response.list[9].weather[0].icon
        let dayimg3 = $("#day3image")
        let iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
        let day3 = $("#day3")
        
        daybody3.children().eq(0).text(lihold + " " + today.add(3, "day").format("DD/MM/YY"))
        $(day3).children().eq(0).text("Tempurture " + response.list[20].main.temp) 
        $(day3).children().eq(1).text("Wind Speed " + response.list[20].wind.speed)
        $(day3).children().eq(2).text("Humidity " + response.list[20].main.humidity)
        dayimg3.attr("src", iconurl3)

        
        let daybody4 = $("#day4body")
        let iconcode4 = response.list[9].weather[0].icon
        let dayimg4 = $("#day4image")
        let iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
        let day4 = $("#day4")
        
        daybody4.children().eq(0).text(lihold + " " + today.add(4, "day").format("DD/MM/YY"))
        $(day4).children().eq(0).text("Tempurture " + response.list[28].main.temp) 
        $(day4).children().eq(1).text("wind speed " + response.list[28].wind.speed)
        $(day4).children().eq(2).text("Humidity " + response.list[28].main.humidity)
        dayimg4.attr("src", iconurl4)

       
        let daybody5 = $("#day5body")
        let iconcode5 = response.list[9].weather[0].icon
        let dayimg5 = $("#day5image")
        let iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png";
        let day5 = $("#day5")
        
        daybody5.children().eq(0).text(lihold + " " + today.add(4, "day").format("DD/MM/YY"))
        $(day5).children().eq(0).text("Tempurture " + response.list[36].main.temp) 
        $(day5).children().eq(1).text("wind speed " + response.list[36].wind.speed)
        $(day5).children().eq(2).text("Humidity " + response.list[36].main.humidity)
        dayimg5.attr("src", iconurl5)

    })
}

// function forcast2 () {


//     fetch(geosubmit)

//     .then(response => response.json())
    
//     .then (function (response) {
//         console.log(response)
//         let today2 = dayjs()
//         let daybody2 = $("#day2body")
//         let iconcode2 = response.list[9].weather[0].icon
//         let dayimg2 = $("#day2image")
//         let iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
//         let day2 = $("#day2")
        
//         daybody2.children().eq(0).text(lihold + " " + today2.add(2, "day").format("DD/MM/YY"))
//         $(day2).children().eq(0).text("Tempurture " + response.list[12].main.temp) 
//         $(day2).children().eq(1).text("Tempurture " + response.list[12].wind.speed)
//         $(day2).children().eq(2).text("Tempurture " + response.list[12].main.humidity)
//         dayimg2.attr("src", iconurl2)
      


//     })
// }

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



ul.on("click", "li", function (event) {lihold = $(this).text(), submiturl = urlhold + lihold + ",USA&limit=5&appid=f4033c6827b68c75bc4c8e651fc5dd75", onload()})


$(function () {onload()})




//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f4033c6827b68c75bc4c8e651fc5dd75

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{US}&limit={5}&appid={f4033c6827b68c75bc4c8e651fc5dd75}

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=f4033c6827b68c75bc4c8e651fc5dd75



//8 17 26 35


