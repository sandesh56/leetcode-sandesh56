class Solution {
    public int minimumCardPickup(int[] cards) {
        Map<Integer, Integer> record = new HashMap();
        int minLen = Integer.MAX_VALUE;
        int count = 0;

       for(int i=0;i<cards.length;i++){
         if(record.containsKey(cards[i])){
             minLen = Math.min(minLen, i-record.get(cards[i])+1);
             count++;
         }
          record.put(cards[i],i);
       }
        return count > 0 ? minLen : -1;
    }
}