var recipes={pasta: '1 cup'};
function updateObjectWithKeyAndValue(object,key,value) {
 return Object.assign({},object,{[key]:value}); 
}
