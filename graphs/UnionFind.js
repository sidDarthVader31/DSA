//example of union find 
//
//
//


class UnionFind {
  constructor(n){
    this.parent = Array(n).fill(0).map((_, i) => i);
  }

  find(x){
    while(x != this.parent[x]){
      x = this.parent[x];
    }
    return x;
  }
  union(x,y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if(rootX!= rootY){
      this.parent[rootY]= rootX;
    }
  }

  printParent(){
    console.log(this.parent)
  }

}


let uf = new UnionFind(6);

uf.union(0,1);
uf.union(1,2);
uf.union(1,3);
uf.union(2,3);

uf.union(4,5)


console.log(`find 1:`, uf.find(3));
uf.printParent()



class  DSU {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_,i)=>i);
    this.rank = new Array(n).fill(1);
  }
  find(u) {
    if(this.parent[u]!=u){
      this.parent[u]=this.find(this.parent[u]);
    }
    return this.parent[u];
  }
  union(u,v) {
    let rootU = this.find(u);
    let rootV = this.find(v);
    if(rootU == rootV) return false;
    if(this.rank[rootU]< this.rank[rootV]){
      this.parent[rootU]= rootV;
    }
    else if (this.rank[rootU]> this.rank[rootV]){
      this.rank[rootV] = rootU;
    }
    else {
      this.parent[rootU] = rootV;
      this.rank[rootV]++;
    }
    return true;
  }
}
