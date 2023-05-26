const searchAllSubstrs = (arrStrs) => {
  const allSubstrs = new Set();
  const hash = new Map();

  const search = (str) => {
    if (str.length === 0) return;
    if (hash.has(str)) return;
    hash.set(str, true)
    allSubstrs.add(str);
    search(str.slice(0, str.length - 1));
    search(str.slice(1, str.length));
    search(str.slice(1, -1));
  }
  arrStrs.forEach(str => search(str))
  return allSubstrs;
}

const strs = ['chicken', 'beef', 'roast', 'chicken', 'ham', 'blam', 'sam','maam', 'blam', 'dam', 'wam']

console.log(searchAllSubstrs(strs))