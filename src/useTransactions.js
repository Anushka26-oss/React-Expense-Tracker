//the name of all the hooks starts with "use"
import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

//transactionsPerType will filter out the unnecessary transaction for the time like if we are summing up the total transactions of type Income it will remove all the transactions of type Expense
//then we will get the total of Income or Expense

//next we are mapping through transactions per type for each transaction we need to find a category it belongs to 
//then we are incrementing the amount in that particular category

const useTransactions = (title) => {
    resetCategories(); //because we have to reset the amount of each specific category to zero.
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((t) => t.type === title);
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);

    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)

        if (category) category.amount += t.amount;
    });
    //filter out the categories which has amount < 0 so that they doesn't come up in chart
    const filteredCategories = categories.filter((sc) => sc.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels: filteredCategories.map((c) => c.type),
    }

    return { total, chartData };

}

export default useTransactions;
