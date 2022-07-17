// function fetchItems(): string[] {
//   var items = ["a", "b", "c"];
//   return items;
// }

// const result = fetchItems();

// console.log(result);

function fetchItems(): Promise<string[]> {
  var items: string[] = ["a", "b", "c"];
  return new Promise(function (resolve, reject) {
    resolve(items);
  });
}

fetchItems();
