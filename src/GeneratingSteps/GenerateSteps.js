class Graph{
    constructor(input){
        this.numberOfVertices=input.vertexCount;
        this.numberOfEdges = input.edgeCount;
        this.startingVertices = input.startingVertices.map(str => {
            return parseInt(str);
          });
        // console.log("startingVertices inside generate steps = "+ this.startingVertices);
        this.endingVertices = input.endingVertices.map(str => {
            return parseInt(str);
          });
        // console.log("endingVertices inside generate steps = "+ this.endingVertices);
        this.weight=input.weights.map(str => {
            return parseInt(str);
          });
        this.source = input.source;
        this.sink = input.sink; 
        this.adjList = {};
        this.allSteps = [];
        for(var i =0;i<this.numberOfVertices;i++){
            this.allSteps[i] = [];
        }
    }

    constructAdjList(){
        for(var i=0;i<this.numberOfVertices;i++){
            this.adjList[i]=[];
        }
        for(i=0;i<this.numberOfEdges;i++){
            var obj = this.createObject1(this.endingVertices[i],this.weight[i]);
            // console.log(`object = ${obj.vertex} ${obj.weight}`);
            this.adjList[this.startingVertices[i]].push(obj);
        }
        
        // console.table(this.adjList);


        // for(var key in this.adjList){
        //     console.log(`adjList[${key}] :`)
        //     for( i=0;i<this.adjList[key].length;i++){
        //         console.log(`[${this.adjList[key][i].vertex},${this.adjList[key][i].weight}] `);
        //     }
        // }
    }

    createObject1(endingVertex, weight){
        return(
            {
                vertex : endingVertex,
                weight : weight
            }
        );
    }


    bfs(){
        var queue = [];
        queue.push(this.source);
        var visited = new Array(this.numberOfVertices);
        for(var i =0; i< this.numberOfVertices; i++){
            visited[i] = false;
        }
        visited[this.source] = true;
        var flag=0;
        var allStepsIndex = 0;
        while(queue.length!==0){
            if(flag===1) break;
            var curr = queue[0];
            // console.log("curr = "+ curr);
            var step = [];
            step.push(curr);
            queue.shift();
            var adjacentNodes = this.adjList[curr];
            // console.log("adjacentNodes = "+ adjacentNodes);
            for(i=0; i<adjacentNodes.length; i++){
                if(adjacentNodes[i].weight===0) continue;
                if(adjacentNodes[i].vertex===this.sink){
                    flag=1;
                    break;
                } 
                if(!visited[adjacentNodes[i].vertex]){
                    queue.push(adjacentNodes[i].vertex);
                    step.push(adjacentNodes[i].vertex);
                }
            }
            this.allSteps[ allStepsIndex++ ]=step;
        }
        
        // for(i=0;i<this.numberOfVertices;i++){
        //     console.log(this.allSteps[i]);
        // }
        return this.allSteps;
    }

}

export default Graph;