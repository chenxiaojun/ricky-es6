let node_list = document.getElementsByTagName("body")[0].childNodes;
console.log(node_list);

let ele_list = [];
let attr_list = [];
let context_list = [];

for(let node of node_list) {
    console.log(node.nodeType);

    if (node.nodeType === 1) ele_list.push(node);
    if (node.nodeType === 2) attr_list.push(node);
    if (node.nodeType === 3) context_list.push(node);
}
console.log(ele_list);  // [h1, p, p, ul#purchase]
console.log(attr_list); // []
console.log(context_list); // [text, text, text, text, text]
