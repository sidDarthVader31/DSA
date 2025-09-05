
// User function Template for javascript
class Solution {
    huffmanCodes(s, f, n) {
        if (n === 0) return [];
        const heap = new MinHeap();

        // push leaves with their input order (for stable tie-breaks)
        for (let i = 0; i < n; i++) {
            heap.push(new Node(s[i], f[i], null, null, i));
        }

        // Special case: only one symbol → code "0"
        if (heap.size() === 1) {
            return ["0"];
        }

        // Build Huffman tree
        while (heap.size() > 1) {
            const left = heap.pop();   // smaller (freq, then order)
            const right = heap.pop();  // next smaller

            // Place the earlier one on the LEFT implicitly (left popped first)
            const merged = new Node(
                null,
                left.freq + right.freq,
                left,
                right,
                Math.min(left.order, right.order) // keep earliest order in subtree
            );
            heap.push(merged);
        }

        const root = heap.pop();

        // Preorder traversal collecting codes for leaves only
        	let ans = [];
        	function preOrder(root, ans, curr) {
	          if (root === null) return;
            if (root.left === null && root.right === null) {
		          ans.push(curr);
		          return;
	          }
	        preOrder(root.left, ans, curr + '0');
	        preOrder(root.right, ans, curr + '1');
        }
        preOrder(root, ans, '')
        return ans;
    }
}

// Node carries an 'order' to resolve ties by input position
class Node {
    constructor(char, freq, left = null, right = null, order = 0) {
        this.char = char;   // null for internal nodes
        this.freq = freq;
        this.left = left;
        this.right = right;
        this.order = order; // smallest input index contained in this subtree
    }
}

class MinHeap {
    constructor() { this.h = []; }

    size() { return this.h.length; }

    push(x) {
        this.h.push(x);
        this._up(this.h.length - 1);
    }

    pop() {
        if (this.h.length === 0) return null;
        if (this.h.length === 1) return this.h.pop();
        const top = this.h[0];
        this.h[0] = this.h.pop();
        this._down(0);
        return top;
    }

    _less(i, j) {
        if (this.h[i].freq !== this.h[j].freq) return this.h[i].freq < this.h[j].freq;
        return this.h[i].order < this.h[j].order; // earlier first (stable tie-break)
    }

    _swap(i, j) { [this.h[i], this.h[j]] = [this.h[j], this.h[i]]; }

    _up(i) {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (!this._less(i, p)) break;
            this._swap(i, p);
            i = p;
        }
    }

    _down(i) {
        const n = this.h.length;
        while (true) {
            let m = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && this._less(l, m)) m = l;
            if (r < n && this._less(r, m)) m = r;
            if (m === i) break;
            this._swap(i, m);
            i = m;
        }
    }
}
