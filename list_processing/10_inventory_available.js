function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(possible => possible.id === inventoryItem);
}

function isItemAvailable(item, list) {
  const items = transactionsFor(item, list);
  let available = 0;

  items.forEach(line => {
    if (line.movement === 'in') {
      available += line.quantity;
    } else {
      available -= line.quantity;
    }
  });

  return available > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
