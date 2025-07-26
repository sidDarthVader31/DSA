/**
 * link : https://leetcode.com/problems/satisfiability-of-equality-equations/description/
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const uf = new UnionFind()
    for(const equation of equations){
        let condition = equation.substring(1,3);
        const a = equation[0]
        const b = equation[3]
        if(condition == '=='){
            //connected
            uf.union(a,b);
        }
    }
    for(const equation of equations){
        let condition = equation.substring(1,3);
        const a = equation[0]
        const b = equation[3]
        if(condition == '!='){
            if(uf.find(a)== uf.find(b)){
                return false
            }
        }
    }
   return true;
}; 

class  UnionFind {
    constructor(){
        this.parent = new Map();
        this.rank = new Map();
    }
    add(x){
        if(!this.parent.has(x)){
            this.parent.set(x,x)
            this.rank.set(x,1)
        }
    }
    find(x){
        this.add(x);
        if(x!= this.parent.get(x)){
            this.parent.set(x, this.find(this.parent.get(x)));
        }
        return this.parent.get(x);
    }
    union(x,y){
        this.add(x);
        this.add(y);
        let x1 = this.find(x);
        let y1 = this.find(y);
        if(x1 == y1)return false;
        if(this.rank.get(x1)> this.rank.get(y1)){
            this.parent.set(y1,x1);
        }
        else if(this.rank.get(x1)< this.rank.get(y1)){
            this.parent.set(x1,y1);
        }
        else{
            this.parent.set(y1,x1);
            this.rank.set(x1, this.rank.get(x1)+1);
        }
        return true;
    }
    getParent(){
        return this.parent;
    }
}
