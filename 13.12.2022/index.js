function twoSums(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length + 1; j++) {
            if ((nums[i] + nums[j]) === target) {
                return ([i, j])
            }
        }
    }
}

console.log(twoSums([2, 7, 11, 15], 9))