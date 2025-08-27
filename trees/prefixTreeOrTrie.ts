
// link : https://leetcode.com/problems/implement-trie-prefix-tree/description/

class Trie {
    tree : Tree;
    constructor() {
        this.tree = new Tree('');
    }

    insert(word: string): void {
        this.tree.insert(word);
    }

    search(word: string): boolean {
        return this.tree.search(word);
    }

    startsWith(prefix: string): boolean {
        return this.tree.startsWith(prefix);
    }
}

class Tree {
    value: string;
    nodes: Tree[];
    end: boolean;
    constructor(value: string) {
        this.value = value;
        this.nodes = [];
        this.end = false;
    }

    setEnd(flag: boolean) {
        this.end = flag;
    }

    insert(word: string, nodes = this.nodes, start = 0 )  {
        if(start == word.length) return;
        let char = word[start];
        for(const node of nodes) {
            if(char == node.value){
                //if found the char then push
                if(start == word.length-1){
                    node.setEnd(true);
                }
                return this.insert(word, node.nodes, start= start+1)
            }
        }
        const newNode = new Tree(char);
        if(start == word.length-1) {
            newNode.setEnd(true);
        }
        nodes.push(newNode);
        //if char not found then create a new node at that level 
        return this.insert(word, newNode.nodes,start+1);
    }

    startsWith (word, start = 0, nodes = null) {
        if(start == word.length) return false;
        if(nodes == null) nodes = this.nodes;
        let char = word[start];
        for(const node of nodes) {
            if(node.value == char){
                if(start == word.length-1){
                    return true;
                    //matched last charcter of string
                }
                return this.startsWith(word, start+1, node.nodes);
            }
        }
        return false;
    }
    search(value, start = 0, nodes = null) { 
        if(nodes == null) nodes = this.nodes;
        let char = value[start];
        for(const node of nodes) {
            if(node.value == char) {
                if(start == value.length-1 && node.end){
                    return true;
                }
                else if (start == value.length-1 && !node.end){
                    return false;
                }
                else{
                    return this.search(value, start+1, node.nodes);
                }
            }
        }
        return false;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
