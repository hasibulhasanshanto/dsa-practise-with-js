/**
 * Algorithm : Binary Search
 * Time complexity O(logn)
 *
 * The search algorithm works by divide and conquer
 */
const arr = [-1,0,3,5,9,12];
const target = 9;

var binaySearch = function(nums, target) {
    let left = 0;    
    let right = nums.length -1;
    
    while(left <= right){
        const mid = left + Math.floor((right-left)/2);
        
        if(nums[mid] === target){
           return mid;
        } else if(nums[mid] < target){
             left = mid + 1;     
        } else {
            right = mid - 1;
        }
    }
    // if we can't find the target
    return -1;    
};

console.log(binaySearch(arr, target));
  