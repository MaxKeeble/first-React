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