// let arr = [1,"*" , 5 , "+" , 7 , "*" , 10, "/" , 2,"+",2]

// function test (a){
//   let r = []

//   for(let i = 1 ; i < arr.length ;i+=2){

//   }

// }
// console.log(test(arr))

// function maxSum(root) {
//   if(root == null) return 0
//   let main = root
//   let counter = root.value
//   let c = root.value
//   let n = 0
//   while(root.right != null){
//     n++
//     if(n>1){
//       counter+= root.left.value
//     }
//     else{
//       counter+= root.right.value
//     }
//     root = root.right
//   }
//   while(main.left != null){
//     n++
//     if(n>1){
//       c+= main.right.value
//     }
//     else{
//       c+= main.left.value
//     }
//     main = main.left

//   }

//   return c>counter ?c : counter ; // TODO: implementation

// }
// function largestCrossSum(matrix) {
//   // your code here
//   let row =0
//   let column = 0
//   for(let i = 0 ; i < matrix.length ; i ++){
//     matrix[i][i]
//   }
//   matrix.forEach(e=>{
//     const x = e.reduce((a,b)=>a+b)
//     x>row ? row = x  : x
//   })
//   return row
// }
// console.log(
//   largestCrossSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
const axios = require("axios");
async function getAuthorHistory(author) {
  
  const authorBaseUrl =
    "https://jsonmock.hackerrank.com/api/article_users?username=";
  const articleBaseUrl = "https://jsonmock.hackerrank.com/api/articles?author=";
  let page = "&page=";
  let present_page = "1";
  let historyArr = [];
  
  let authorDetails = await axios(authorBaseUrl + author + page + present_page);
  let articleDetails = await axios(
    articleBaseUrl + author + page + present_page
  );
  console.log(authorDetails.data)
  let loopPage =
    authorDetails.data.total_pages >= articleDetails.data.total_pages
      ? authorDetails.data.total_pages
      : articleDetails.data.total_pages;
      
  for (let i = 0; i < loopPage; i++) {
    authorDetails.data.data.forEach((e) => {
      if (e.about) {
        historyArr.push(e.about);
      }
    });
    articleDetails.data.data.forEach((e) => {
      if (e.title) {
        historyArr.push(e.title);
      } else if (e.story_title) {
        historyArr.push(e.title);
      }
    });
    present_page = (Number(present_page) + 1).toString(); 
    authorDetails = await axios(authorBaseUrl + author + page + present_page)
 
    articleDetails = await axios(authorBaseUrl + author + page + present_page)
  }
  
  return historyArr.filter((e) => e);
}

console.log(getAuthorHistory("coloneltcb"));
