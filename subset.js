function isValidateSubsequence(array, sequence){
    var states = []
    sequence.forEach(element => {
       var result = array.some(term => term === element)
       states.push(result)
    });
    status = states.every(state => state === true)

    return status
}
var check = isValidateSubsequence([1,2,3,4,5], [2,4,5])
console.log(check)