/**
 * create by tangcheng
 */
function Flare(args){
	/*
	 * margin : {top: 20, right: 20, bottom: 20, left: 120}
	 * width: 960
	 * height: 800
	 * rootContainer: d3.select("body").append("svg")
	 * data:{
	 * 	  name:"t1"
	 *    children:[{
	 * 	      name:"t2"
	 *    },{
	 * 	      name:"t7"
	 *    }]
	 * }
	 */
	
	var fe = {};
	if (args) for (arg in args) {
        fe[arg] = args[arg];
    }
	fe.i = 0;
	fe.collapse = function(d){
	    if (d.children) {
	    	d._children = d.children;
	    	d._children.forEach(fe.collapse);
	    	d.children = null;
	    }
	};
	fe.render = function(args) {
		if (args) for (arg in args) {
	        fe[arg] = args[arg];
	    }
		if(fe.root){
			return;
		}
		var margin = fe.margin || {top: 10, right: 100, bottom: 10, left: 200},
			    width = (fe.width || 960) - margin.right - margin.left,
			    height = (fe.height || 800) - margin.top - margin.bottom;
	    fe.margin = margin;
			
		fe.duration = (fe.duration || 750);
		
		fe.tree = d3.layout.tree()
		    .size([height, width]);
		
		fe.diagonal = d3.svg.diagonal()
		    .projection(function(d) { return [d.y, d.x]; });
		
		
		fe.rootContainer = (fe.rootContainer || d3.select("body").append("svg"))
		    .attr("width", width + margin.right + margin.left)
		    .attr("height", height + margin.top + margin.bottom)
		    .attr("class", "flare")
		  	.append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		
//			d3.select(self.frameElement).style("height", "800px");
		
	//	d3.json("flare.json", function(error, flare) {
	//	if (error) throw error;
	//	fe.root = flare;
		fe.root = fe.data;
		fe.root.x0 = height / 2;
		fe.root.y0 = 0;
		
		fe.root.children.forEach(fe.collapse);
		
		fe.update(fe.root);
		
	//	});
	};
	fe.update = function(source){
	  // Compute the new tree layout.
	  var nodes = fe.tree.nodes(fe.root).reverse(),
	      links = fe.tree.links(nodes);
	
	  // Normalize for fixed-depth.
	  nodes.forEach(function(d) { d.y = d.depth * 150; });
	
	  // Update the nodes…
	  var node = fe.rootContainer.selectAll("g.flarenode")
	      .data(nodes, function(d) { 
	      	return d.id || (d.id = ++fe.i);
	      });
	
	  // Enter any new nodes at the parent's previous position.
	  var nodeEnter = node.enter().append("g")
	      .attr("class", "flarenode")
	      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
	      .on("click", fe.nodeClick);
	
	  nodeEnter.append("circle")
	      .attr("r", 1e-6)
	      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
	
	  nodeEnter.append("text")
	      .attr("x", function(d) { return d.children || d._children ? 0: 10; })
	      .attr("dy", function(d) { return d.children || d._children ? "-.95em" : ".35em"; })
	      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
	      .text(function(d) { return d.name; })
	      .style("fill-opacity", 1e-6);
	
	  // Transition nodes to their new position.
	  var nodeUpdate = node.transition()
	      .duration(fe.duration)
	      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
	
	  nodeUpdate.select("circle")
	      .attr("r", 5.5)
	      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
	
	  nodeUpdate.select("text")
	      .style("fill-opacity", 1);
	
	  // Transition exiting nodes to the parent's new position.
	  var nodeExit = node.exit().transition()
	      .duration(fe.duration)
	      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
	      .remove();
	
	  nodeExit.select("circle")
	      .attr("r", 1e-6);
	
	  nodeExit.select("text")
	      .style("fill-opacity", 1e-6);
	
	  // Update the links…
	  var link = fe.rootContainer.selectAll("path.flareline")
	      .data(links, function(d) { return d.target.id; });
	
	  // Enter any new links at the parent's previous position.
	  link.enter().insert("path", "g")
	      .attr("class", "flareline")
	      .attr("d", function(d) {
	        var o = {x: source.x0, y: source.y0};
	        return fe.diagonal({source: o, target: o});
	      });
	
	  // Transition links to their new position.
	  link.transition()
	      .duration(fe.duration)
	      .attr("d", fe.diagonal);
	
	  // Transition exiting nodes to the parent's new position.
	  link.exit().transition()
	      .duration(fe.duration)
	      .attr("d", function(d) {
	        var o = {x: source.x, y: source.y};
	        return fe.diagonal({source: o, target: o});
	      })
	      .remove();
	
	  // Stash the old positions for transition.
	  nodes.forEach(function(d) {
	    d.x0 = d.x;
	    d.y0 = d.y;
	  });
	};
	fe.nodeClick = function(d){// Toggle children on click.
		if (d.children) {
		    d._children = d.children;
		    d.children = null;
	    } else {
		    d.children = d._children;
		    d._children = null;
		}
		fe.update(d);
	};
	
	return fe;
}