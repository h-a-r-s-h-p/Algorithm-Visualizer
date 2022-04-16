class Graph{
    constructor(v, e, si, ei, w, source, sink){
        this.numberOfVertices=v;
        this.numberOfEdges = e;
        this.startingVertices = si.map(str => {
            return parseInt(str);
          });
        // console.log("startingVertices= "+ this.startingVertices);
        this.endingVertices = ei.map(str => {
            return parseInt(str);
          });
        // console.log("endingVertices = "+ this.endingVertices);
        this.weight=w.map(str => {
            return parseInt(str);
          });
        this.source = source;
        this.sink = sink; 
        this.adjList = {};
        this.allSteps = [];
        for(var i =0;i<this.numberOfVertices;i++){
            this.allSteps[i] = [];
        }
    }

    constructAdjList(v, e, si, ei, w){
        for(var i=0;i<v;i++){
            this.adjList[i]=[];
        }
        for(i=0;i<e;i++){
            var obj = this.createObject1(ei[i],w[i]);
            // console.log(`object = ${obj.vertex} ${obj.weight}`);
            this.adjList[si[i]].push(obj);
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


    bfs(source, sink){
        var queue = [];
        queue.push(source);
        var visited = new Array(this.numberOfVertices);
        for(var i =0; i< this.numberOfVertices; i++){
            visited[i] = false;
        }
        visited[source] = true;
        var flag=0;
        var allStepsIndex = 0;
        while(queue.length!==0){
            if(flag===1) break;
            var curr = queue[0];
            console.log("curr = "+ curr);
            var step = [];
            step.push(curr);
            queue.shift();
            var adjacentNodes = this.adjList[curr];
            console.log("adjacentNodes = "+ adjacentNodes);
            for(i=0; i<adjacentNodes.length; i++){
                if(adjacentNodes[i].weight===0) continue;
                if(adjacentNodes[i].vertex===sink){
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
        
        for(i=0;i<this.numberOfVertices;i++){
            console.log(this.allSteps[i]);
        }
        return this.allSteps;
    }

}

export default Graph;