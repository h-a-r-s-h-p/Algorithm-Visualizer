import React from 'react'

export default function PlotGraph(props) {
  var vertexCount = props.graph.vertexCount;
  vertexCount = parseInt(vertexCount);
  console.log("type of vertexCount is : "+ typeof vertexCount)
  var edgeCount = props.graph.edgeCount;
  edgeCount = parseInt(edgeCount)

  var startingVertices = props.graph.startingVertices.split(" ");

  var endingVertices = props.graph.endingVertices.split(" ");

  var weights = props.graph.weights.split(" ");

  var nodesArray = new Array();
  for(var i=0 ; i<vertexCount;i++){
    nodesArray[i]={
      id: i,
      label: i.toString(),
    }
  }
  var nodes = new vis.dat

  return (
    <div id = "graph">Graph</div>
  )
}
