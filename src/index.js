import Viz from 'viz.js';
import parser from './parser.js';
import './scss/index.scss'

// function handleFileSelected(event) {
//    var input = document.getElementById('input');
//    var reader = new FileReader();
//    reader.onload = function(){
//      var text = reader.result;
//      var digraph = parser(text);
//      const image = Viz(digraph, { format: "svg" });
//      document.getElementById("image").innerHTML = image;
//    };
//   //  reader.onprogress = function(){
//   //   // console.log(input.files);
//   //   console.log('reading');
//   //   if(!/.aag/g.test(input.files[0])) {
//   //     console.log('error');
//   //     reader.abort();
//   //   } 
//   //   document.getElementById("image").innerHTML = 'reading...';
//   //  }

//   //  reader.onabort = function(){
//   //   document.getElementById("image").innerHTML = 'error...';
//   //  }
//    reader.readAsText(input.files[0]);
// };

// document.getElementById('btn').addEventListener('click', handleFileSelected);


// document.getElementById("image").innerHTML = image;

var digraph = `digraph G {
{
node [color=pink;shape=box;fontname="Courier"];
 0;
}
{
rank = same;
node [color="#8a0918";shape=box;fontname="Courier"];
1,2,3;
}
{
rank = same;
node [color="#accfcc";shape=box;fontname="Courier"];
9,10;
}
{
node [color="#5a5241";shape=invtrapezium;fontname="Courier"];
4,5,6,7;
}
node [color="#468a66";shape=box;fontname="Courier"];
6->9 [color="#5a5241";arrowhead=odot];
7->10 [color="#5a5241";arrowhead=none];
1->4 [color="#5a5241";arrowhead=none];
8->4 [color="#5a5241";arrowhead=none];
8->5 [color="#5a5241";arrowhead=none];
1->5 [color="#5a5241";arrowhead=none];
4->6 [color="#5a5241";arrowhead=none];
2->6 [color="#5a5241";arrowhead=none];
2->7 [color="#5a5241";arrowhead=none];
5->7 [color="#5a5241";arrowhead=none];
}



`;
const image = Viz(digraph, { format: "png-image-element" });
document.getElementById("image").appendChild(image);