const list1 = [1, 3, 5, 6];
const list2 = [2, 4, 6, 8];

function zipList(l1, l2) {
  const combine = [];
  for (let i = 0; i < list1.length; i++) {
    combine.push(l1[i]);
    combine.push(l2[i]);
  }
  return combine;
}
console.log(zipList(list1, list2));

function zipListTheSimpleWay(l1, l2) {
  return _.flatten(_.zip(l1, l2));
}
console.log(zipListTheSimpleWay(list1, list2));
