function sumStrings(a,b) {   
    // 1. reverse both numbers so we can work from the back 
    let aArr = a.split("").reverse()
    let bArr = b.split("").reverse()
    console.log(aArr)
    console.log(bArr)
    // 2. make both lengths the same by adding '0'
    //   a. find the shorter 
    //   b. find the difference 
    //   c. difference.times do shorter.push('0')
    if (aArr.length > bArr.length) {
      // a is longer 
      const differenceBetween = aArr.length - bArr.length
      for(let i = 1; i <= differenceBetween; i++) {
        bArr.push('0')
      } 
    } else if (aArr.length < bArr.length) {
      // b is longer 
      const differenceBetween = bArr.length - aArr.length
      for(let i = 1; i <= differenceBetween; i++) {
        aArr.push('0')
      }
    }
    // 3. create variables let tempString = '', let carryOver = 0
    let tempString = ''
    let carryOver = 0
    // 4. iterate 
    //   a. add the two numbers, add the carry (carry starts 0, also reverts to 0 after this)
    //     i. if length > 1, add second digit to tempString and change carry to 1 
    for (let i = 0; i < aArr.length; i++) {
      const sumOfTwo = parseInt(aArr[i]) + parseInt(bArr[i]) + carryOver
      carryOver = 0
      if (sumOfTwo > 9) {
        carryOver = 1
        tempString += sumOfTwo.toString()[1]
      } else {
        tempString += sumOfTwo.toString()
      }
    }
    // 5. if carryOver > 0, add one last '1' to the tempString
    if (carryOver > 0) {
      tempString += '1'
    }
    const lastSplit = tempString.split("")
    // 6. iterate  
    let indexZero = lastSplit.length - 1 
    while (lastSplit[indexZero] == '0') {
      lastSplit.pop()
      indexZero--
    }
    // 7. return 
    return lastSplit.reverse().join('')
    
    
  //   const aInt = a.length > 0 ? parseInt(a) : 0
  //   const bInt = b.length > 0 ? parseInt(b) : 0
  //   const intSum = aInt + bInt
  //   const stringSum = intSum.toString()
    
  //   return stringSum
  }

  Test.assertEquals(sumStrings('123','456'),'579')