def pipe_fix(nums):
    r = []
    i = nums[0]

    while i <= nums[len(nums)-1]:
        r.append(i)
        i+=1
        
    return r
        
print(pipe_fix([1, 2, 3, 12]))