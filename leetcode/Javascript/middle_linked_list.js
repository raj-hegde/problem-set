function getlen() {
    let cnt = 0;
    let curr = head;

    while(curr !== null) {
        cnt++;
        curr = curr.next;
    }
    return cnt;
}


var middleNode = function(head) {
    
};