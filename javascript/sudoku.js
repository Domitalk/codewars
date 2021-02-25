function validSolution(board){
    //TODO
    let shouldContinue = true; 
    
    const isOneToNine = (arr) => {
      const newArr = arr.sort(); 
      for (let i = 0; i < 9; i++) {
        if (newArr[i] !== (i + 1)) {
          return false; 
        };
      }; 
      return true; 
    }
    
  //   check rows
  //     return false; 
    for (let i = 0; i < 9; i++) {
      if (shouldContinue) {
        shouldContinue = isOneToNine(board[i])
      } else {
        return false; 
      }
    }
    
  //   check columns 
  //     return false; 
    for (let i = 0; i < 9; i++) {
      if (shouldContinue) {
        let colArr = []
        for (let r = 0; i < 9; i++) {
          colArr.push(board[r][i])
        }
        shouldContinue = isOneToNine(colArr)
      }
    }
    
  //   check 3x3 grid 
  //     return false; 
  //  x-axis 
    for (let r = 0; r < 8; r += 3) {
      if (shouldContinue) {
  //  y-axis 
        for (let i = 0; i < 8; i += 3) {
          if (shouldContinue) {
            let gridArr = [
              board[r][i], board[r][i + 1], board[r][i + 2],
              board[r + 1][i], board[r + 1][i + 1], board[r + 1][i + 2],
              board[r + 2][i], board[r + 2][i + 1], board[r + 2][i + 2]
            ]
  //           console.log(board)
  //           gridArr.push(board[xAxis][yAxis])
  //           gridArr.push(board[xAxis][yAxis + 1])
  //           gridArr.push(board[xAxis][yAxis + 2])
            
  //           gridArr.push(board[xAxis + 1][yAxis])
  //           gridArr.push(board[xAxis + 1][yAxis + 1])
  //           gridArr.push(board[xAxis + 1][yAxis + 2])
            
  //           gridArr.push(board[xAxis + 2][yAxis])
  //           gridArr.push(board[xAxis + 2][yAxis + 1])
  //           gridArr.push(board[xAxis + 2][yAxis + 2])
    
            shouldContinue = isOneToNine(gridArr)
          } else {
            return false; 
          }
        }
      } else { 
        return false; 
      }
    }
    console.log(shouldContinue)
  //   return true; 
    return shouldContinue; 
    
  }

validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
])