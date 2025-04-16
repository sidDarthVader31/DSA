//link : https://leetcode.com/problems/min-stack/description/

class MinStack {
    private stack: {val: number, min: number}[];
    private secondMin: number;
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        let min = this.getMin();
        if(min == null || min > val){
            min = val;
        }
        this.stack.push({val, min: min});
       
    }

    pop(): void {
       const num = this.stack.pop();
    }

    top(): number {  
      return this.stack[this.stack.length-1].val; 
    }

    getMin(): number {
        return this.stack[this.stack.length-1]?.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
