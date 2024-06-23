class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(data){
        const node = new Node(data)
        if(!this.root){
            this.root = node
        }else{
            this.insertFun(this.root , node)
        }
    }

    insertFun(root , node){
        if(root.data > node.data){
            if(root.left === null){
                root.left = node
            }else{
                this.insertFun(root.left , node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertFun(root.right , node)
            }
        }
    } 

    search(data) {
        return this.searchFun(this.root , data)
    }

    searchFun(root , data){
        if (root === null) {
            return false;
        }
        if(data < root.data){
            return this.searchFun(root.left , data)
        }else if(data > root.data){
            return this.searchFun(root.right , data)
        }else{
            return true
        }
    }

    print(callback){
        this.printFun(this.root, callback)
    }

    printFun(node , callback){
        if(node !== null){
            this.printFun(node.left, callback);
            callback(node.data);
            this.printFun(node.right, callback);
        }
        
    }

}
 
// Example Usage:
const bst = new BinaryTree();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

console.log(bst.search(22)) 
console.log(bst.search(4))

bst.print((data) => { 
    console.log(data)
});