function rgb(r, g, b){
    return (convertToHex(r) + convertToHex(g) + convertToHex(b))
  }
    
  const convertToHex = (rawNumber) => {
    const hexDex = {
        "0" : "0",
        "1" : "1",
        "2" : "2", 
        "3" : "3",
        "4" : "4",
        "5" : "5",
        "6" : "6",
        "7" : "7",
        "8" : "8", 
        "9" : "9",
        "10" : "A", 
        "11" : "B",
        "12" : "C",
        "13" : "D", 
        "14" : "E",
        "15" : "F"
    }
    let minMaxNumber;
    if(rawNumber > 255) {
        minMaxNumber = 255
    } else if(rawNumber < 0) {
        minMaxNumber = 0
    } else {
        minMaxNumber = rawNumber
    }
    let dividedBySixteen = (rawNumber / 16)
    console.log("this is the rgb number divided by 16", dividedBySixteen)
    let arrayOfSplitString = dividedBySixteen.toString().split('.')
    console.log("I made it into a string because I want to seperate the decimal value", arrayOfSplitString)
    let stringNumberOne = hexDex[arrayOfSplitString[0]]
    console.log("this is just the first hexadec value we don't really need to do anything", stringNumberOne)
    let stringNumberTwo = '0'
    console.log("the decimal value", arrayOfSplitString[1])
    if (arrayOfSplitString[1]) {
        let stringHashKey = (parseFloat("." + arrayOfSplitString[1]) * 16).toString().substring(0, 2)
        console.log("this is the decimal times 16", stringHashKey)
        stringNumberTwo = hexDex[stringHashKey]
    }
    console.log("this is stringNumberTwo", stringNumberTwo)
    console.log("returned string", stringNumberOne + stringNumberTwo)
    return (stringNumberOne + stringNumberTwo); 
  }
  
  
//   rgb(-2,217,104)


//   (0, 0, 0) => '#000000'
//   (100, 0, 255) => '#6400ff'
//   (255, 255, 255) => '#ffffff'

