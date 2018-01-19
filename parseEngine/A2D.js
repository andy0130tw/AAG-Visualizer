var fs = require('fs');
const util = require('util');

var aagFile  = process.argv[2];
var font = `fontname=\"Courier\"`;

function splitLine(input){
  return input.split(/\r?\n/)
}

// `digraph G {
//   {
//      rank = same;
//      node [color=red;shape=box];
//      PI1,PI2,PI3;
//   }
//   {
//      rank = same;
//      node [color=blue;shape=box]
//      PO1,PO2;
//   }
//   {
//      node [color=black;shape=invtrapezium]
//      AIG1;
//   }
//   PI1;
//   PI2;
//   PI3;
//   PI1->AIG1 [arrowhead=odot];
//   PI2->AIG1 [arrowhead=none];
//   AIG1->PO1 [arrowhead=none];
//   PI3->PO1 [arrowhead=none];
//   PI3->PO2 [arrowhead=none];
// }
// `
function convertToDot(gateList){
  let digraph = `digraph G {\n`;
  //set layout
  
  //const
  digraph += `{\n`;
  digraph += `node [color=pink;shape=box;` + font + `];\n `;
  digraph += `0;\n`;
  digraph += `}\n`;

  //pi
  digraph += `{\n`;
  digraph += `rank = same;\n`;
  digraph += `node [color="#8a0918";shape=box;` + font + `];\n`;
  let hasPI = 0;
  for(let i = 0; i < gateList.length; i++){
    if(gateList[i].type === 'PI'){
      hasPI = 1;
      digraph += `${gateList[i].id},`;  
    }
  }
  if(hasPI === 1)
    digraph = digraph.slice(0, -1); // delete last comma
  digraph += `;\n`;
  digraph += `}\n`;

  //po
  digraph += `{\n`;
  digraph += `rank = same;\n`;
  digraph += `node [color="#accfcc";shape=box;` + font + `];\n`;
  let hasPO = 0;
  for(let i = 0; i < gateList.length; i++){
    if(gateList[i].type === 'PO'){
      hasPO = 1;
      digraph += `${gateList[i].id},`;  
    }
  }
  if(hasPO === 1)
    digraph = digraph.slice(0, -1); // delete last comma
  digraph += `;\n`;
  digraph += `}\n`;

  //aig
  digraph += `{\n`;
  digraph += `node [color="#5a5241";shape=invtrapezium;` + font + `];\n`;
  let hasAIG = 0;
  for(let i = 0; i < gateList.length; i++){
    if(gateList[i].type === 'AIG'){
      hasAIG = 1;
      digraph += `${gateList[i].id},`;  
    }
  }
  if(hasAIG === 1)
    digraph = digraph.slice(0, -1); // delete last comma
  digraph += `;\n`;
  digraph += `}\n`;

  //undef
  digraph += `node [color="#468a66";shape=box;` + font + `];\n`;
  //start linking
  for(let i = 0; i < gateList.length; i++){
    if(gateList[i].fanin != undefined){
      let link = ``;
      //PI1->AIG1 [arrowhead=odot];
      for(let j = 0; j < gateList[i].fanin.length; j++){
        link += gateList[i].fanin[j].id;
        link += `->`;
        link += gateList[i].id;
        if(gateList[i].fanin[j].inv === 0) link += ` [color="#5a5241";arrowhead=none];\n`
        else link += ` [color="#5a5241";arrowhead=odot];\n`
      }
      digraph += link;
    }
  }

  digraph += `}\n`;

  fs.writeFile(process.argv[3],digraph,()=>{});
  // console.log(digraph);
}
function cirRead(){
  let ctx = fs.readFileSync(aagFile,'utf8');
  let line = splitLine(ctx);
  let miloa = [];
  let gateList = [];
  //HEADER
  let myReg = /\d+/g;
  for(let i = 0; i < 5; i++){
    let arr = myReg.exec(line[0]);
    miloa.push(Number(arr[0]));
  }
  console.log(line.length);
  for(let i = 1; i < line.length; i++){
      //PI
      let myReg = /\d+/g;
      let idArr = [],arr = [];
      
      while ((arr = myReg.exec(line[i])) !== null) {
        idArr.push(arr[0]);
      }

      if(i >= 1 && i < 1+miloa[1]){
        let pi = {};
        pi.type = "PI";
        pi.id = Math.floor(idArr[0] / 2);
        gateList.push(pi);
      }
      //PO
      if(i >= 1+miloa[1] && i < 1+miloa[1]+miloa[3]){
        let po = {};
        let poId = i - miloa[1] + miloa[0];
        po.type = "PO";
        po.id = poId;
        po.fanin = [{id:Math.floor(idArr[0] / 2), inv:idArr[0] % 2}];
        gateList.push(po);
      }
      //AIG
      if(i >= 1+miloa[1]+miloa[3] && i < 1+miloa[1]+miloa[3]+miloa[4]){
        let aig = {};
        aig.type = "AIG";
        aig.id = idArr[0] / 2;
        aig.fanin = [{id:Math.floor(idArr[1] / 2), inv:idArr[1] % 2}, {id:Math.floor(idArr[2] / 2), inv:idArr[2] % 2}];
        gateList.push(aig);
      }
      //over
      if(i >= miloa[1]+miloa[3]+miloa[4]) break;
  }

  // console.log(util.inspect(gateList,false, null))
  // console.log(miloa);
  convertToDot(gateList);
}

cirRead();