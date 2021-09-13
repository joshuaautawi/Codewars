function oddOrEven(array) {
    //enter code here
   if(array.length==0) return 'even'
   return array.reduce((a,b)=>a+b) %2 ==0 ?'even' : 'odd'
 }