/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let uf = new UnionFind(n);
    for(let i = 0;i< n;i++){
        for(let j = i+1;j<n;j++){
            if(isConnected[i][j]){
                uf.union(i,j);
            }
        }
    }
    let provinces = new Set();
    for(let i = 0;i<n;i++){
        provinces.add(uf.find(i));
    }
    return provinces.size;
}


class UnionFind {
    constructor(n){
        this.parent = new Array(n).fill(0).map((_,i)=> i);
    }
    find(x){
        while(x != this.parent[x]){
            x = this.parent[x];
        }
        return x;
    }
    union(x,y) {
        let rootX = this.find(x);
        let rootY= this.find(y);
        if(rootY != rootX){
            this.parent[rootY] = rootX;
        }
    }
}
