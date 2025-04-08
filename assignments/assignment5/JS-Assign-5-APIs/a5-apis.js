window.onload = function() {

    var torontoBtn = document.getElementById("Toronto");
    var mumbaiBtn = document.getElementById("Mumbai");
    var output = document.getElementById("output");
    var outIcon = document.getElementById("icon");
    var outError = document.getElementById("error");
    var outLocation = document.getElementById("location");
    var outTemp = document.getElementById("temperature");
    var outConditions = document.getElementById("conditions");

    // My open weather API Key is: 9e82c1839075fcbb5fba24e4e990296b

    function clearOutput() {
        outLocation.innerHTML = "";
        outTemp.innerHTML = "";
        outConditions.innerHTML = "";
        outError.innerHTML = "";
    }

    function torontoWeather() {

        clearOutput();

        var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=9e82c1839075fcbb5fba24e4e990296b&units=metric";

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var DATA = xhr.response;
                    console.log(DATA);
                    output.style.display = "block";
                    outIcon.innerHTML = DATA.weather[0].icon;
                    outLocation.innerHTML = DATA.name;
                    outTemp.innerHTML = Math.round(DATA.main.temp) + '&deg;C';

                    // Making the first letter uppercase: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
                    outConditions.innerHTML = DATA.weather[0].description.charAt(0).toUpperCase() + DATA.weather[0].description.slice(1) + '.';
                } else {
                    output.style.display = "block";
                    outError.innerHTML = "API call was unsuccessful";
                    console.log(xhr.status);
                }
            }
        }
    }

    function mumbaiWeather() {

        clearOutput();

        var url = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=9e82c1839075fcbb5fba24e4e990296b&units=metric";

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var DATA = xhr.response;
                    console.log(DATA);
                    output.style.display = "block";
                    outIcon.innerHTML = DATA.weather[0].icon;
                    outLocation.innerHTML = DATA.name;
                    outTemp.innerHTML = Math.round(DATA.main.temp) + '&deg;C';

                    // Making the first letter uppercase: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
                    outConditions.innerHTML = DATA.weather[0].description.charAt(0).toUpperCase() + DATA.weather[0].description.slice(1) + '.';
                } else {
                    var DATA = xhr.response;
                    console.log(DATA);
                    output.style.display = "block";
                    outError.innerHTML = "API call was unsuccessful";
                    console.log(xhr.status);
                }
            }
        }
    }

    torontoBtn.onclick = torontoWeather;
    mumbaiBtn.onclick = mumbaiWeather;

}