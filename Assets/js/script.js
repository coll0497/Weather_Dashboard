var tempEl = document.getElementById('#temp');



fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=b6aeb25eea7e1a2365606800b7f119f8&units=imperial&units=standard&cnt=6')


.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    tempEl = data.current.temp;
    console.log(tempEl);
    tempEl.innerHTML = data.current.temp;

  });
  
/*  console.log(tempEl.innerHTML);*/

fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + "Austin" + "&APPID=02c4d69e089dd1f4df69f5d257d967d8&units=imperial&cnt=6")


.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

/*fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=b6aeb25eea7e1a2365606800b7f119f8")

.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });*/