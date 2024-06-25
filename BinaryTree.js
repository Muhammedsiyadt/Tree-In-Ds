class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    } 

    insert(data){ 
        const node = new Node(data)
        if(!this.root){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    } 

    insertNode(root, node){
        if(root.data < node.data){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left , node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }

    search(root , data){
        if(root === null){
            return false
        }
        if(root.data === data){
            return true
        }else if(data < root.data){
            return this.search(root.left , data)
        }else{
            return this.search(root.right, data)
        }
    } 

    remove(data){
        return this.removeNode(this.root, data) 
    }

    removeNode(root, data){
        if(data < root.data){
            root.left = this.removeNode(root.left, data)
        }else if(data > root.data){
            root.right = this.removeNode(root.right, data)
        }else{
            if(root.left === null && root.right === null){
                root = null
                return root
            }

            if(root.left === null){
                return root.right
            }else if (root.left === null){
                return root.left  
            }
            const temp = this.findMin(node.right)
            root.data = temp.data
            root.right = this.removeNode(root.right, temp.data)
            return root
        }
    }

    findMin(root){
        if(!root.left){
            return root
        }else{
            return this.findMin(root.left)
        }
    } 

    findMax(root) {
        if (!root.right) {
          return root.data;
        } else {
          return this.findMax(root.right);
        }
      }

    count(root){
        if(!root){
            return 0
        }
        return this.count(root.left) + this.count(root.right) + 1 
    }

    height(root){
        if(!root){
            return 0
        }
        return Math.max(this.height(root.left) , this.height(root.right)) + 1
    }

    bfs(){
        const result = []
        const queue = []

        if(this.root != null){
            queue.push(this.root)
        }
        while(queue.length > 0){
            const node = queue.shift()
            result.push(node.data)

            if(node.left != null){
                queue.push(node.left)
            }
            if(node.right != null){
                queue.push(node.right)
            }
        }
        return result
    }

    inOrder(root){
        if(root){
            console.log(root.left);
            console.log(root.data);
            console.log(root.right);
        }
    }

    preOrder(root){
        if(root){
            console.log(root.data);
            console.log(root.left);
            console.log(root.right);
        }
    }

    postOrder(root){
        if(root){
            console.log(root.left);
            console.log(root.right);
            console.log(root.data); 
        }
    }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(9)   
bst.insert(15)
bst.insert(1)
bst.insert(19)
bst.insert(4)

// console.log('In Order...');
// bst.inOrder(bst.root) 
// console.log('In Order...');
// bst.preOrder(bst.root) 
// console.log('In Order...');
// bst.postOrder(bst.root) 

// console.log("minimum element :", bst.findMin(bst.root));
// console.log("maximum element :", bst.findMax(bst.root));
// console.log("count : ",bst.count(bst.root));
// console.log("max height : ",bst.height(bst.root));

console.log(bst.bfs());  