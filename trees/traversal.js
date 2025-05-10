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


//a more sophisticated approach - 
//this allows us to see all the nodes at any particular
//level
//

const bfs = (root) => {
  let currentNode = root;
  let list = [];
  let queue = [];
  let currList = []; // list of currentItems at a particular level

  queue.push(currentNode);
  queue.push(null)
  while(queue.length >0){
    currentNode = queue.shift();
    if(currentNode){
      currList.add(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
    }
    else{
      //we have reached towards the end of the level 
      list.push(currList);
      currList = [];
      if(queue.length) {
        queue.add(null)
      }
    }
  }
  return null;
}
