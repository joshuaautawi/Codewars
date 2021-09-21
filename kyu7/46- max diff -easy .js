function maxDiff(list) {
    return list.length ==0 ? 0 : (list.sort((a,b)=>b-a))[0] - (list.sort((a,b)=>b-a))[list.length-1];
  };
  
  