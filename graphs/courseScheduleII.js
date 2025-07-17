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
