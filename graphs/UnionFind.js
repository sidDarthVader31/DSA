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
}
