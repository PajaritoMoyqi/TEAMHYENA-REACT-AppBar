
export const getRandomNum = (initialNum) => {
  return Math.floor(Math.random()*(initialNum));
}

export const getArr1toNum = (num) => {
  const initialArr = [];

  for(let i=1; i<=num; i++){
    initialArr.push(i)
  }

  return initialArr;
}
