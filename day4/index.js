//XML HTTP REQUEST

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  for (var i = 0; i <= data.length; i++) {
    console.log(data[i].flags.png);
    console.log(data[i].name.common);
    console.log(data[i].region);
    console.log(data[i].subregion);
    console.log(data[i].population);
  }
};


//HOW TO COMPARE TWO JSON OBJECTS
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

var flag = true;
if (Object.keys(obj1).length == Object.keys(obj2).length) {
  for (key in obj1) {
    if (obj1[key] == obj2[key]) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
} else {
  flag = false;
}
console.log("is object equal" + flag);
