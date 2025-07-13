/**
 * link : https://leetcode.com/problems/keys-and-rooms/description/
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let seen = new Set();
    return dfs(0,rooms, seen, rooms.length)
};

const dfs = (vertex, rooms, seen) =>{
    seen.add(vertex);
    if(seen.size == rooms.length){
        return true;
    }
    const list = rooms[vertex];
    for(let i = 0;i< list.length;i++){
        let node = list[i];
        if(node && !seen.has(node) && dfs(node, rooms, seen, )){
            return true;
        }
    }
    return false;
}
