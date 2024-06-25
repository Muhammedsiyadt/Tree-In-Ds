class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BINARYSEARCH{
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

    search(data){
        return this.searchFun(this.root , data)
    }

    searchFun(root , data){
        if(root === null){
            return false
        }
        if(data < root.data){
            return this.searchFun(root.left , data)
        }else if(data > root.data){
            return this.searchFun(root.right , data)
        }else{
            return true
        }
    }

    print (cb){
        return this.printFun(this.root , cb)
    }

    printFun(root , cb){
        if(root !== null){
            this.printFun(root.left , cb)
            cb(root.data)
            this.printFun(root.right , cb)
        }
    } 
} 

const bst = new BINARYSEARCH()
bst.insert(40)
bst.insert(30)
bst.insert(10)
bst.insert(20)
bst.insert(50)
bst.insert(45)
bst.insert(100)

console.log(bst.search(50)); 

bst.print((data) => {
    console.log(data); 
})
