import getSteps from "../GeneratingSteps/GenerateSteps"

function start(v, e, si, ei, w, source, sink ){
  var graph = new getSteps(v,e,si,ei,w,source, sink);
  graph.constructAdjList(v,e,si,ei,w);
  graph.bfs(source, sink);
  var visualizingSteps = graph.allSteps;
  console.log(visualizingSteps);
}

export default start;