// basic traversal algorithms for graphs/trees
//
//
//


const breadthFirstSearch = (root) =>{
  let currentNode = root;
  let list = [];//contains the list of nodes in bfs order
  let queue = []; // a queue to identify the order of traversal for child nodes 
  queue.push(currentNode);
  while(queue.length >0){
    currentNode = queue.shift(); //get first element from queue - FIFO 
    list.push(currentNode.value);

    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right);
    }
  }
  return list;
}
