export function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// sorted array
export function binarySearch(arr, val) {
    let lo = 0, hi = arr.length - 1;
    while(lo <= hi) {
        const mid = lo + (hi - lo) / 2;
        if(arr[mid] === val) return mid;
        else if(arr[mid] > val) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return -1;
}

// Ternary Search
export function ternarySeach(arr, val) {
    let lo = 0, hi = arr.length-1;
    while(lo <= hi) {
        let partitionSize = Math.floor((hi - lo) / 3);
        let mid1 = lo + partitionSize;
        let mid2 = hi - partitionSize;
        if(arr[mid1] === val) return mid1;
        if(arr[mid2] === val) return mid2;
        if(val < arr[mid1]) hi = mid1 - 1;
        else if(val > arr[mid2]) lo = mid2 + 1;
        else {
            lo = mid1 + 1;
            hi = mid2 - 1;
        }
    }
    return -1;
}

// export { binarySearch, linearSearch, ternarySearch };
export default 10;
// module.exports = { linearSort, binarySearch, ternarySearch};