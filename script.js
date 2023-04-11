// Create & Modifying an Array

var hobbies = ["swimming", "dancing", "runing", "yoga", "flying", "walking"];
console.log(hobbies.length);

hobbies.push("singing");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2, 0, "cooking", "skiing");
console.log(hobbies);

hobbies.shift();

hobbies.unshift("baking");

console.log(hobbies);

//Create a New Array & Combine Arrays

var goals= ["learn coding", "earn more money", "workout and eat better"];

var allTheThings = [...hobbies, ...goals];

console.log(allTheThings);

console.log(allTheThings.indexOf("running"));

allTheThings.splice(2, 1);

console.log(allTheThings);

// Map Over an Array

var plans = allTheThings.map(function (item) {
    return `I can't wait to start ${item}`;
});
console.log(plans);