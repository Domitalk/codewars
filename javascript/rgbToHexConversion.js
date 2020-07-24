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
    let dividedBySixteen = (minMaxNumber / 16)
    console.log("this is dividedBySixteen", dividedBySixteen)
    let arrayOfSplitString = dividedBySixteen.toString().split('.')
    console.log("this is arryOfSplitString", arrayOfSplitString)
    let stringNumberOne = hexDex[arrayOfSplitString[0]]
    console.log("this is stringNumberOne", stringNumberOne)
    let stringNumberTwo = '0'
    console.log("the decimal value", arrayOfSplitString[1])
    if (arrayOfSplitString[1]) {
        let stringHashKey = (parseFloat("." + arrayOfSplitString[1]) * 16).toString().substring(0, 2)
        console.log("this is the decimal times 16", stringHashKey)
        stringNumberTwo = hexDex[stringHashKey]
        // let concatStringNumberTwo = arrayOfSplitString[1].length > 2 ? hexDex[arrayOfSplitString[1].substring(0, 1)] : hexDex[arrayOfSplitString[1]]
        // stringNumberTwo = (parseInt(concatStringNumberTwo) * 16).toString().substring(0, 1)
        // console.log("the number before hex conversion", arrayOfSplitString[1].substring(0, 1))
    }
    // let stringNumberTwo = arrayOfSplitString[1].length > 2 ? hexDex[arrayOfSplitString[1].substring(0, 1)] : hexDex[arrayOfSplitString[1]]
    console.log("this is stringNumberTwo", stringNumberTwo)
    console.log("returned string", stringNumberOne + stringNumberTwo)
    return (stringNumberOne + stringNumberTwo); 
  }
  
  
  rgb(-2,217,104)