/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(!transactions.length){
    return [];
  }
  return transactions.reduce((acc, curr) => {
    const itemPresent = acc.find((item) => item.category === curr.category);
    if(itemPresent){
      itemPresent.totalSpent += curr.price;
    }
    else{
      acc.push({category : curr.category, totalSpent : curr.price})
    }
    return acc;
  },[])
}

module.exports = calculateTotalSpentByCategory;
