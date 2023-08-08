class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        // Create a new node with the given value
        const newNode = new Node(value);

        // If the list is empty, the new node becomes the head
        if (!this.head) {
            this.head = newNode;
        } else {
            // If the list is not empty, link the new node to the current head
            newNode.next = this.head;
            this.head = newNode;
        }

        // Return the new head node
        return this.head;
    }
}

// Test the implementation
const SLL1 = new SLL();
console.log(SLL1.addFront(18)); // Output: Node { data: 18, next: null }
console.log(SLL1.addFront(5));  // Output: Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Output: Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }


class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this.head;
    }

    removeFront() {
        // If the list is empty, return null
        if (!this.head) {
            return null;
        }

        // If the list is not empty, remove the current head node
        const removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null; // Remove the link from the removed node

        return this.head;
    }
    front() {
        // If the list is empty, return null
        if (!this.head) {
            return null;
        }

        // Otherwise, return the value of the head node
        return this.head.data;
    }

}
console.log(SLL1.removeFront()); // Output: Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()); // Output: Node { data: 18, next: null }
console.log(SLL1.removeFront()); // Output: null (the list is empty now)





    
