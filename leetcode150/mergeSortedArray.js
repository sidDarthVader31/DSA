/**
 * link; https://leetcode.com/problems/merge-sorted-array/
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0;
    let j =0;
    let right = m;
    while(i< nums1.length && j < n ){
        if(nums1[i]==0){
            nums1[i] = nums2[j]
            i++;
            j++
        }
        else if(nums1[i]<=nums2[j]){
            i++;
        }
        else {
            nums1[right] = nums1[i];
            nums1[i]= nums2[j];
            j++;
            i++;
            right++
        }
    }
    // for(let c1 = j;c1< n;c1++){
    //     nums1[right] = nums2[c1];
    //     right++;
    // }                       
};
