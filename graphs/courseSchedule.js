
/**
 * link: https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    for(const [course, pre] of prerequisites){
        graph[pre].push(course);
    }
    for(let v=0;v<numCourses;v++){
        let queue = [];
        let seen = {};
        for(let i = 0;i< graph[v].length;i++){
            queue.push(graph[v][i]);
        }
        while(queue.length >0){
            const current = queue.shift();
            seen[current] = true;
            if(current ==v){
                return false;
            }
            const list = graph[current];
            for(let j=0;j<list.length;j++){
                let next = list[j]
                if(!seen[next]){
                    queue.push(next)
                }
            }
        }
    }
    return true;
};


/**
 * desc: solved using topological sort
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
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
    return output.length == numCourses;
};


