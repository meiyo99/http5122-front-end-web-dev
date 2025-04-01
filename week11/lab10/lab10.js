window.onload = function() {
    var out_location = document.getElementById("location");
    var out_temp = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");

    // My open weather API Key is: 9e82c1839075fcbb5fba24e4e990296b

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
                out_location.innerHTML = DATA.name;
                out_temp.innerHTML = Math.round(DATA.main.temp) + '&deg;C';

                // Making the first letter uppercase: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
                out_conditions.innerHTML = DATA.weather[0].description.charAt(0).toUpperCase() + DATA.weather[0].description.slice(1) + '.';
            } else {
                out_location.innerHTML = "API call was unsuccessful";
                console.log(xhr.status);
            }
        }
    }

}