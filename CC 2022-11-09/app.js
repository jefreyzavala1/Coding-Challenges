// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"
function arrayDiff(a, b) {
  
    let obj = {};
      //"1":[1]
      //"2":[2,2,2,2]
      let array = [];
      for(let i = 0; i < a.length;i++){
        if(obj[a[i]]){
        obj[a[i]].push(a[i])
      }else{
        obj[a[i]] = [a[i]]
      }
      }
    console.log(obj)
      //look through b and remove such property from a
      for (let i = 0; i < b.length;i++){
        if(obj[b[i]]){
          delete obj[b[i]]
        }
      }
    //  let numbers = Object.values(obj);
    
    // console.log(numbers); // [4,93,10]
    //   return numbers
      for(const property in obj){
        array.push(...obj[property])
      }
      return array
    }
    