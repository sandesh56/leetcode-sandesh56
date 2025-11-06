/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
   // must be sequence. 
   // sliding window --> [ ]
   // brute force --> high memory usage since, checking the sets of sequence. 

   const len = s.length;
   const win = 10;

   // early return
   if(len<win) return [];

   const seen = new Set();
   const dup = new Set();

   for(let i=0;i<=len-win;i++){
    const seq = s.slice(i,i+win);
    if(seen.has(seq)){
        dup.add(seq);
    }else{
        seen.add(seq);
    }
   }

   return  [...dup]
};