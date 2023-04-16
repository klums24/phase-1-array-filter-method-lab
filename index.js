// Code your solution here

//array of drivers
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//findMatching
//This function takes an array of drivers' names and a string as arguments
//and returns the matching list of drivers 
//The function should be case insensitive
function findMatching(collection, cb){
    const newList = collection.filter(element => element.toLowerCase() === cb.toLowerCase());
    return newList;
};

console.log(findMatching(["Bobby", "Joe", "Anna", "bobby"], "Bobby"));

//fuzzyMatch
//This function takes an array of drivers' names and a string as arguments for querying the array 
//and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(collection, cb){
    let stringLength = cb.length;
    const newList = collection.filter(element => element.slice(0, stringLength).toLowerCase() === cb.toLowerCase());
    return newList;
};

console.log(fuzzyMatch(["Bobby", "Joe", "Anna", "bobby"], "boB"));

//matchName
//This function takes an array of driver objects and a string as arguments. 
//Each driver object has two properties: name and hometown. 
//The function should return each element 
//whose name property matches the provided string argument.
function matchName(collection, cb){
    const newArray = [];
    
    for (const user of collection){
        if (user.name === cb) {
            newArray.push(user);
        }
    }

    return newArray;
};

console.log(matchName([
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ], "Sally"));