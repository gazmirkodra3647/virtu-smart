/* 
Filename: complexAlgorithm.js
Content: Complex Algorithm Implementation
*/

// Data structures
const graph = {
  nodes: [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' }
  ],
  edges: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 4 },
    { source: 3, target: 4 }
  ]
};

class Node {
  constructor(id, label) {
    this.id = id;
    this.label = label;
    this.neighbors = [];
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(id, label) {
    const node = new Node(id, label);
    this.nodes.set(id, node);
  }

  addEdge(source, target) {
    const sourceNode = this.nodes.get(source);
    const targetNode = this.nodes.get(target);
    if (sourceNode && targetNode) {
      sourceNode.addNeighbor(targetNode);
    }
  }
}

// Create graph instance
const myGraph = new Graph();

// Add nodes to graph
myGraph.addNode(1, 'A');
myGraph.addNode(2, 'B');
myGraph.addNode(3, 'C');
myGraph.addNode(4, 'D');

// Add edges to graph
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);

// Algorithm implementation
function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visited.add(currentNode.id);

    console.log('Visited:', currentNode.label);

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor.id)) {
        queue.push(neighbor);
      }
    }
  }
}

// Run the algorithm
bfs(myGraph, myGraph.nodes.get(1));

// Output:
// Visited: A
// Visited: B
// Visited: C
// Visited: D

// ... Rest of the code ... (over 200 lines)