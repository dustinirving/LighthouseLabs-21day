//Challenge 1

  const doorToDoor = (volunteers, neighbourhoods) => {
    // Code here!
  
    // Remember to return a value

    // Want to see what's going on inside your function? You can use console.log() to debug and print variables to the console below.
    
    console.log(volunteers)
    console.log(neighbourhoods)
    
    var a= (neighbourhoods.length)/(volunteers.length)
    
    return a
  }

//Challenge 2

const interviewAnswer = (topic) => {
    // Code here!
  
    // Remember to return a value!
    console.log(topic)
    if (topic === "arts funding"){
      return("We'll have to get creative!")
    } else if (topic === "economy"){
      return("Time is money.")
    } else if (topic === "transportation"){
      return("It's going to be a long road, so we better get moving.")
    } else {
      return("QUACK!")
    }
    
  }

  //Challenge 3

  // Remember, the possible candidates are: Tim, Sally, and Beth (in that order)
const castVote = (name, votes) => {
    // Code here!
  
    // Remember to return a value!
    
    if (name == 'Tim'){
      votes[0]=votes[0]+1
      return votes
    } else if (name === 'Sally'){
        votes[1]=votes[1]+1
        return votes
    } else if (name === 'Beth'){
        votes[2]=votes[2]+1
        return votes
    } else{
      return "Not a Valid Input"
    }
  }

  //Challenge 4


const registerToVote = (name, unregisteredVoters) => {
    console.log(name)
    console.log(unregisteredVoters)
    // Code here!
  
    // Remember to return a value!
    let mailingList = []
    
    for (let i = 0; i <= unregisteredVoters.length-1; i++) {
      if (name !== (unregisteredVoters[i])){
        mailingList.push(unregisteredVoters[i])
      } 
    } 
    console.log(mailingList)
    return mailingList
  }

  //Challenge 5


const chooseStations = (stations) => {
    // Code here!
  
    // Remember to return a value!
    let goodStations = []
    for (let i = 0; i <= stations.length-1; i++){
      if ((stations[i][1] >= 20) && (stations[i][2]=='school'||stations[i][2]=='community centre')){
        goodStations.push(stations[i][0])
      }
    }
    return goodStations
  }
  
  //Challenge 6


const voterTurnout = (voter_signatures, voter_ids) => {
  // Code here!
  if (voter_signatures.length !== voter_ids.length){
    return false;
  }
  for (let i =0; i < voter_signatures.length; i++){
    if (voter_signatures[i] !== voter_ids[i]) return "FRAUD!";
  }  
  return "All clear, we can count the votes!";
}


  //Challenge 7


const termTopics = (interviews) => {
  // Code here!

  // Remember to return an array!
  a=0
  b=0
  c=0
  
  for (let i=0; i < interviews.length; i++){
    if (interviews[i] === 'smart city'){
      a = a + 1
    }
    else if (interviews[i] === 'arts funding'){
      b = b + 1
    }
    else if (interviews[i] === 'transportation'){
      c = c + 1
    }
  }
  return [a,b,c]
}


  //Challenge 8


const smartGarbage = (trash, bins) => {
  // Code here!
  if (trash == 'waste'){
    bins.waste=bins.waste+1
  }
  else if (trash === 'recycling'){
    bins.recycling=bins.recycling+1
  }
  else if (trash === 'compost'){
    bins.compost=bins.compost+1
  }
console.log(bins)
return (bins);

}


  //Challenge 9


const carPassing = (cars, speed) => {
  // Code here!
  var cars2 = { time : Date.now(), speed : speed}
  console.log(cars2)
  console.log(cars)
  cars.push(cars2)
  return cars
}


  //Challenge 10


const whereCanIPark = (spots, vehicle) => {
  // Code here!
  console.log(spots)
  if (vehicle === 'regular')
    for (let x =0; x < spots.length; x++){
      for (let y=0; y < spots.length; y++){
        if (spots[x][y] === 'R' ){
          console.log(y,x)
          return [y,x]
        } 
      }
    }
    
  else if (vehicle === 'small')
    for (let x =0; x < spots.length; x++){
      for (let y=0; y < spots.length; y++){
        if (spots[x][y] === 'R'||spots[x][y] === 'S' ){
          console.log(y,x)
          return [y,x]
        }
      }
    }
  
  else if (vehicle === 'motorcycle')
    for (let x =0; x < spots.length; x++){
      for (let y=0; y < spots.length; y++){
        if (spots[x][y] === 'R'||spots[x][y] === 'S'||spots[x][y] === 'M' ){
          console.log(y,x)
          return [y,x]
        }
      }
    }
  return false;
}

  //Challenge 11


const busTimes = buses => {
  // Code here!
  console.log(buses)
  var busesv2 = Object.assign({}, buses);
  console.log(busesv2)
  for (const bus in busesv2){
    busesv2[bus] = busesv2[bus].distance/busesv2[bus].speed
  }
  return busesv2
}


  //Challenge 12


const checkAir = function (samples, threshold) {
  // Code here!
  ds = 0
  for (i=0; i < samples.length; i ++){
    if (samples[i]=== 'dirty'){
      ds = ds + 1
    }
  }
  if (ds/(samples.length) >= threshold){
    return "Polluted"
  } else{
    return "Clean"
  }
}


  //Challenge 13

  // Tip: Work on one of these functions at a time.

const lightsOn = function(lights) {
  // Code here!
  for (i=0; i < lights.length; i++){
    if (lights[i].on === false){
      lights[i].on = true
    }
  }
  return lights;
}

const lightsOff = function(lights) {
  // Code here!
  for (i=0; i < lights.length; i++){
    if (lights[i].on === true){
      lights[i].on = false
    }
  }
  return lights;
}

const toggleLights = function(lights, lightsAreOn) {
  // Code here!
  if (lightsAreOn === true){
     return lightsOff(lights);
  }
  else if (lightsAreOn === false){
    return lightsOn(lights);
  }
}


  //Challenge 14


const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  // Code here!
  console.log(numberOfPeople)
  console.log(distanceTraveled)
  let ticketprice = 1.00 + (distanceTraveled*0.25)
  if (numberOfPeople >= 30){
    ticketprice = ticketprice + 0.25
  }
  console.log("$" + ticketprice.toFixed(2));
  return ("$" + ticketprice.toFixed(2));
}


  //Challenge 15


const finalPosition = (moves) => {
  // Code here!
  let position = [0,0]
  for (i=0; i < moves.length; i++){
    if (moves[i] === "north"){
      position[1] = position[1] + 1
    }
    else if (moves[i] === "south"){
      position[1] = position[1] - 1
    }
    else if (moves[i] === "east"){
      position[0] = position[0] + 1
    }
    else if (moves[i] === "west"){
      position[0] = position[0] - 1
    }
  }
  return position
}


//Challenge 16


const festivalColours = color1 => {
  // code here!
  let a = [0,0]
  a[0]=color1+150
  a[1]=color1+210
  return a
  
}

//Challenge 17


const judgeVegetable = (vegetables, metric) => {
  // Code here
  let bestveggie=vegetables[0]
  var highest = 0;
  var index;
  for (i= 0; i < vegetables.length; i ++){
       if (vegetables[i][metric] > highest){
         highest = vegetables[i][metric];
         index = i;
       }

    // else if (metric === 'plumpness'){
    //     if (vegetables[i].plumpness>bestveggie.plumpness){
    //       vegetables[i]= bestveggie
    //   }
    // }
  }
  return vegetables[index].submitter
}

//Challenge 18



const countTickets = (tickets) => {
  // Code here!
  var totaltickets = {red: 0, green: 0, blue: 0}
  for (i=0; i < tickets.length; i++){
    if (tickets[i] === "red"){
      totaltickets.red = totaltickets.red +1
    } else if (tickets[i] === "green"){
      totaltickets .green = totaltickets .green + 1
    } else if (tickets[i] === "blue"){
      totaltickets.blue = totaltickets.blue + 1
    }
  }
  return totaltickets
}

const bestOdds = (tickets, raffleEntries) => {
  // Code here!
  console.log(tickets)
  console.log(raffleEntries)
  console.log(countTickets(tickets).red)
  a = countTickets(tickets)
  if (a.red/raffleEntries.red > a.green/raffleEntries.green && a.red/raffleEntries.red > a.blue/raffleEntries.blue){
    return "You have the best odds of winning the red raffle."
  } else if (a.green/raffleEntries.green > a.red/raffleEntries.red && a.green/raffleEntries.green > a.blue/raffleEntries.blue){
    return "You have the best odds of winning the green raffle."
  }else if (a.blue/raffleEntries.blue > a.red/raffleEntries.red && a.blue/raffleEntries.blue > a.green/raffleEntries.green){
    return "You have the best odds of winning the blue raffle."
  }
}


//Challenge 19


const pumpkinSpice = money => {
  pspice = [0,0,0,0]
  while (money >= 5){
    pspice[0] = pspice[0] + 1
    pspice[3] = pspice[3] + 30
    money = money - 5
  }
  while (money >= 3){
    pspice[1] = pspice[1] + 1
    pspice[3] = pspice[3] + 15
    money = money - 3
  }
  while (money >= 1){
    pspice[2] = pspice[2] + 1
    pspice[3] = pspice[3] + 3
    money = money - 1
  }
  return pspice
}


//Challenge 20


// Use the value below whenever you need the value of Pi

const PI = 3.14159 

const sphereVolume = function (radius) {
  return (4/3)*PI*radius*radius*radius;

}

const coneVolume = function (radius, height) {
  return PI * radius * radius * (height/3);

}

const prismVolume = function (height, width, depth) {
  return height*width*depth;

}

const totalVolume = function (solids) {
  let volume = 0
  for (const solid of solids){
    if (solid.type === "sphere"){
      volume += sphereVolume(solid.radius)
    } else if (solid.type === "cone"){
      volume += coneVolume(solid.radius,solid.height)
    } else if (solid.type === "prism"){
      volume += prismVolume(solid.height,solid.width,solid.depth)
    }
  }
  return volume
}

//Challenge 21


// const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  // const bakeryAB = bakeryA.concat(bakeryB)
  // for (const recipe of recipes){
  //   for (i=0; i < recipe.ingredients.length; i++){
  //     console.log(recipe.ingredients[i])
  //     if (bakeryAB.includes(recipe.ingredients[i]) && bakeryAB.includes(recipe.ingredients[i+1])){
  //       return recipe.name
  //     }
  //   }
  // }
  
  const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    for (let recipe of recipes) {
      const a = ~bakeryA.indexOf(recipe.ingredients[0])
      const b = ~bakeryA.indexOf(recipe.ingredients[1])
      const c = ~bakeryB.indexOf(recipe.ingredients[0])
      const d = ~bakeryB.indexOf(recipe.ingredients[1])
      
      if ((a || b)  && (c || d)) {
        return recipe.name;
      }
    }
  }