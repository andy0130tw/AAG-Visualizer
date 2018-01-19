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
node [color=pink;shape=box;];
 0;
}
{
rank = same;
node [color=red;shape=box];
1,2,3;
}
{
rank = same;
node [color=blue;shape=box];
9,10;
}
{
node [color=black;shape=invtrapezium];
4,5,6,7;
}
node [color=green;shape=box];
6->9 [arrowhead=odot];
7->10 [arrowhead=none];
1->4 [arrowhead=none];
8->4 [arrowhead=none];
8->5 [arrowhead=none];
1->5 [arrowhead=none];
4->6 [arrowhead=none];
2->6 [arrowhead=none];
2->7 [arrowhead=none];
5->7 [arrowhead=none];
}
digraph G {
{
node [color=pink;shape=box;];
 0;
}
{
rank = same;
node [color=red;shape=box];
1,2,3;
}
{
rank = same;
node [color=blue;shape=box];
9,10;
}
{
node [color=black;shape=invtrapezium];
4,5,6,7;
}
node [color=green;shape=box];
6->9 [arrowhead=odot];
7->10 [arrowhead=none];
1->4 [arrowhead=none];
8->4 [arrowhead=none];
8->5 [arrowhead=none];
1->5 [arrowhead=none];
4->6 [arrowhead=none];
2->6 [arrowhead=none];
2->7 [arrowhead=none];
5->7 [arrowhead=none];
}
`;
const image = Viz(digraph, { format: "png-image-element" });
document.getElementById("image").appendChild(image);