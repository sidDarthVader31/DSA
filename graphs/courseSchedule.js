
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
        let edges = graph[v];
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


