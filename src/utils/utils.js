export function findAndPatchObject(mas, find, patch) {
  let newMas = [];
  for (let i = 0; i < mas.length; i++) {

    let isMatch = true;
    for (let key in find) {
      if (mas[i][key] !== find[key] || find[key] === undefined) {
        isMatch = false;
        break;
      }
    }

    if (!isMatch) newMas.push(mas[i]);
    else newMas.push({ ...mas[i], ...patch });
  }

  return newMas;
};

export function makeErrorsObject(errorsMas){
  let errorObject={};
  for (let i=0; i<errorsMas.length; i++){
    let [,value, key] = errorsMas[i].match(/(.*?)\((.*?)\)/);
    key = key.split('->').map(key => key[0].toLowerCase()+key.slice(1));
    if (key.length===1){
      errorObject[key]=value;
    }
    else {
      let path = errorObject;
      for (let j=0; j<key.length-1; j++){
        if (!path[key[j]]) path[key[j]] = {};
        path = path[key[j]];
      }
      path[key[key.length-1]] = value;
    }
  }

  return errorObject;
}