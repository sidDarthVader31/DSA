/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
      const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);
    for(const [course, pre] of prerequisites){
        graph[pre].push(course);
        inDegree[course]++
    }
    const queue = [];
    for(let i=0;i< inDegree.length;i++){
        if(inDegree[i] ==0){
            queue.push(i)
        }
   }
    const output = [];
    const visited = new Set();
    while(queue.length >0){
        const vertex = queue.shift();
        if(visited.has(vertex)){
            continue;
        }
        visited.add(vertex)
        output.push(vertex);
        for(const out of graph[vertex]){
            inDegree[out] = inDegree[out]-1
            if(inDegree[out]<=0){
                inDegree[out]=0;
                queue.push(out)
            }
        }
    }
    return output.length == numCourses ?  output : []
};


// solution using dfs 
const courseScheduleII = (numCourses, prerequisites) =>{
  let graph = Array.from({length: numCourses}, ()=> []);

  for(const [course, pre] of prerequisites) {
    graph[pre].push(course);
  }

  let visited = new Array(numCourses).fill(0);

  const result = [];
  const hasCycle = false;

  const dfs = (node) =>{
    if(visited[node] == 1){
      hasCycle = true;
      return;
    }
    if(visited[node] == 2){
      return;
    }
     visited[node] = 1;

    for(const courses of graph[node]){
      dfs(courses);
    }
    visited[node] = 2;
    result.push(node);
  }
  for(let i = 0;i< numCourses;i++){
    if(visited[i]==0)dfs(i);
  }
  hasCycle == true ? []: result
}
