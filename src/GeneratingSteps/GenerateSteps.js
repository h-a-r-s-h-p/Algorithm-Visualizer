class Graph {
    constructor(input) {
        this.numberOfVertices = input.vertexCount;
        this.numberOfEdges = input.edgeCount;
        this.startingVertices = input.startingVertices.map(str => {
            return parseInt(str);
        });
        // console.log("startingVertices inside generate steps = "+ this.startingVertices);
        this.endingVertices = input.endingVertices.map(str => {
            return parseInt(str);
        });
        // console.log("endingVertices inside generate steps = "+ this.endingVertices);
        this.weight = input.weights.map(str => {
            return parseInt(str);
        });
        this.source = input.source;
        this.sink = input.sink;
        this.adjList = {};
        this.allSteps = {
            bfsdfs: [],
            path: []
        };
    }

    constructAdjList() {
        for (var i = 0; i < this.numberOfVertices; i++) {
            this.adjList[i] = [];
        }
        for (i = 0; i < this.numberOfEdges; i++) {
            var obj1 = this.createObject1(this.endingVertices[i], this.weight[i]);
            var obj2 = this.createObject1(this.startingVertices[i], 0);
            // console.log(`object = ${obj.vertex} ${obj.weight}`);
            this.adjList[this.startingVertices[i]].push(obj1);
            this.adjList[this.endingVertices[i]].push(obj2);
        }

    }

    createObject1(endingVertex, weight) {
        return (
            {
                vertex: endingVertex,
                weight: weight
            }
        );
    }


    bfs() {
        var queue = [];
        var parent = []
        for (var i = 0; i < this.numberOfVertices; i++) {
            parent[i] = -1;
        }
        queue.push(this.source);
        var visited = new Array(this.numberOfVertices);
        for (i = 0; i < this.numberOfVertices; i++) {
            visited[i] = false;
        }
        visited[this.source] = true;
        var flag = 0;
        while (queue.length !== 0) {
            if (flag === 1) break;
            var curr = queue[0];
            // console.log("curr = "+ curr);
            var step = [];
            step.push(curr);
            queue.shift();
            var adjacentNodes = this.adjList[curr];
            // console.log("adjacentNodes = ");
            // for( var k=0;k<adjacentNodes.length;k++){
            //     console.log(`${adjacentNodes[k].vertex}, ${adjacentNodes[k].weight}`);
            // }
            for (i = 0; i < adjacentNodes.length; i++) {
                if (adjacentNodes[i].weight === 0) continue;
                if (adjacentNodes[i].vertex === this.sink) {
                    parent[adjacentNodes[i].vertex] = curr;
                    step.push(this.sink);
                    flag = 1;
                    break;
                }
                if (!visited[adjacentNodes[i].vertex]) {
                    parent[adjacentNodes[i].vertex] = curr;
                    queue.push(adjacentNodes[i].vertex);
                    step.push(adjacentNodes[i].vertex);
                }
            }
            this.allSteps.bfsdfs.push(step);

        }
        var currVertex = this.sink;
        while (currVertex !== -1) {
            this.allSteps.path.push(currVertex);
            currVertex = parent[currVertex];
        }

    }

}

export default Graph;