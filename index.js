function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else if (deliLine.length > 0){
    var callName = deliLine.shift()
    return `Currently serving ${callName}.`
  }
}

/*
function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else if (line.length > 0){
    var lineAsItStands = []
    for(var i = 0; i < line.length; i++){
      lineAsItStands.push(`${i+1}. ${line[i]}`)
    }
    var beginning = "The line is currently: "
    var ending = lineAsItStands.join(", ")
  return beginning + ending
  }
}
*/

/*
function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else if (line.length > 0){
    var lineAsItStands = []
    var i = 0
    while(i < line.length){
      lineAsItStands.push(`${i+1}. ${line[i]}`)
      i++
    }
    var beginning = "The line is currently: "
    var ending = lineAsItStands.join(", ")
  return beginning + ending
  }
}
*/

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else if (line.length > 0){
    var lineAsItStands = []
    var i = 0
    while(i < line.length){
      lineAsItStands.push(`${lineAsItStands.length}. ${line[i]}`)
      i++
    }
    var beginning = "The line is currently: "
    var ending = lineAsItStands.join(", ")
  return beginning + ending
  }
}