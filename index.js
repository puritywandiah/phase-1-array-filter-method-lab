// Code your solution here
function findMatching (names, strings){
    return names.filter (function(name) {return name .toLOwerCase()=== strings.lowerCase()})
}

function fuzzyMatch(names, string){
    return names.filter(function(name) {
      return name.slice(0,2).toLowerCase() === string.toLowerCase();
    })
  }

  function matchName(drivers, name){
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase()
    )
  }