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




//No of provinces with union find + rank 
//
//
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
        this.rank = new Array(n).fill(1);
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
        if(rootY == rootX) return;

        if(this.rank[rootX]< this.rank[rootY]){
            this.parent[rootX]= rootY;
        }
        else if(this.rank[rootX] > this.rank[rootY]){
            this.parent[rootY] = rootX;
        }
        else {
            this.parent[rootY]= rootX;
            this.rank[rootX]++;
        }
    }
}
