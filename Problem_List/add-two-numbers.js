
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let carryOver = 0;
    let l3 = [];
    let result = new ListNode(0, null);
    let resultRef = result;

    while(current1 || current2){
        let sum = carryOver;

        if(current1 === null){
            sum += current2.val
        }else if(current2 === null){
            sum += current1.val
        }else{
            sum += current1.val + current2.val
        }

        if(sum > 9){
            sum -= 10;
            carryOver = 1;
        }else {
            carryOver = 0;
        }

        current1 = current1?.next ?? null;
        current2 = current2?.next ?? null;

        // l3.push(sum);
        resultRef.next = new ListNode(sum, null);
        resultRef = resultRef.next;
    }

    if(carryOver > 0){
        // l3.push(carryOver);
        resultRef.next = new ListNode(carryOver, null);
    }

    // console.log(JSON.stringify(result.next));
    return result.next;
};

const l1 = new ListNode(
    9,
    new ListNode(
        9,
        new ListNode(
            9,
            new ListNode(
                9,
                new ListNode(
                    9,
                    new ListNode(
                        9,
                        new ListNode(
                            9,
                            null
                        )
                    )
                )
            )
        )
    )
)

const l2 = new ListNode(
    9,
    new ListNode(
        9,
        new ListNode(
            9,
            new ListNode(
                9,
                null
            )
        )
    )
)

addTwoNumbers(l1, l2);
