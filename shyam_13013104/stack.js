var stackControl = true;
var stack = (function(array) {
        array = [];
        //--Define the max size of the stack
        var MAX_SIZE = 5;

        function isEmpty() {
            if (array.length < 1) console.log("Stack is empty");
        };
        isEmpty();

        return {

            push: function(ele) {
                if (array.length < MAX_SIZE) {
                    array.push(ele)
                    return array;
                } else {
                    console.log("Stack Overflow")
                }
            },
            pop: function() {
                if (array.length > 1) {
                    array.pop();
                    return array;
                } else {
                    console.log("Stack Underflow");
                }
            }

        }
    })()
    // var list = 5;
    // console.log(stack(list))
if (stackControl) {
    console.log(stack.pop());
    console.log(stack.push(3));
    console.log(stack.push(2));
    console.log(stack.pop());
    console.log(stack.push(1));
    console.log(stack.pop());
    console.log(stack.push(38));
    console.log(stack.push(22));
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.push(6));
    console.log(stack.pop());
}
//End of STACK Logic

/* Defining Queue operations*/

var queue = (function(array) {
    array = [];
    var reversearray;
    //--Define the max size of the stack
    var MAX_SIZE = 5;

    function isEmpty() {
        if (array.length < 1) console.log("Queue is empty");
    };
    isEmpty();

    return {
        insert: function(ele) {
            if (array.length < MAX_SIZE) {
                array.push(ele)
                reversearray = array.reverse();
                return reversearray;
            } else {
                console.log("Queue Overflow")
            }
        },
        delete: function() {
            if (array.length > 1) {
                //reversearray = array.reverse();
                array.pop();
                return array;
            } else {
                console.log("Queue Underflow");
            }
        }
    }



})()

console.log(queue.insert(5))
console.log(queue.insert(3))
console.log(queue.delete(3))