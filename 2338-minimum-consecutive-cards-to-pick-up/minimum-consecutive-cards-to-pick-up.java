class Solution {
    public int minimumCardPickup(int[] cards) {
        Map<Integer, Integer> record = new HashMap();
        int minLen = Integer.MAX_VALUE;
        
       for(int i=0;i<cards.length;i++){
         if(record.containsKey(cards[i])){
             minLen = Math.min(minLen, i-record.get(cards[i])+1);
         }
          record.put(cards[i],i);
       }
         return (minLen == Integer.MAX_VALUE) ? -1 : minLen;
    }
}