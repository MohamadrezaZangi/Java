//1.Create an array for your favorite sport with 5 item
const favoriteSport = ["swim", "football", "walk", "basketball", "tennis"];
console.log(favoriteSport);

//5. Create a new list with this list
const newfavoriteSport = [...favoriteSport];

//2.add new string “i love” to the beginning of the array
favoriteSport.unshift("i love");
console.log(favoriteSport);

//3.convert this array to string using word “and”
const favoriteSportjoin = favoriteSport.join(" and ");
console.log(favoriteSportjoin);

//4.remove last item of the list
favoriteSport.pop();
console.log(favoriteSport);

//and remove the first two sport from new list
console.log(newfavoriteSport.slice(2));

//6. Define two variable to hold first item and the rest separately in each one in row
const towArr = [newfavoriteSport.slice(2), newfavoriteSport.slice(0, 2)];
console.log(towArr);
