/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    let uf = new UnionFind(n);
        let extraEdges = 0;
    for(const[a,b] of connections){
        const flag = uf.union(a,b);
        if(!flag){
            extraEdges++;
        }
    }
    let connected = new Set();
    for(let i=0;i<n;i++){
        let node = uf.find(i)
        connected.add(node);
    }
    return extraEdges >= connected.size-1 ? connected.size-1 : -1;
};          

class  UnionFind {
    constructor(n){
        this.parent = new Array(n).fill(0).map((_,i)=> i);
        this.rank = new Array(n).fill(1);
    }
    find(x){
        if(x!= this.parent[x]){
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    union(x,y){
        let x1 = this.find(x);
        let y1 = this.find(y);
        if(x1 == y1)return false;
        if(this.rank[x1]> this.rank[y1]){
            this.parent[y1]= x1;
        }
        else if(this.rank[x1]< this.rank[y1]){
            this.parent[x1]= y1;
        }
        else{
            this.parent[y1]= x1;
            this.rank[x1]++;
        }
        return true;
    }
    getParent(){
        return this.parent;
    }
}



