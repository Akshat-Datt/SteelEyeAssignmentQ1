# EXPLANATION

> Soultions to given problems are as follows in respective manner

1. Displayed the total number of orders, by fetching the length of results array from data.json file.
2. For merging both json files, first made key value pairs of id and timestamps for all elements of results array of timeStamps.json file in a controller function, and using those pairs, fetched the orderSubmitted passing down the respective row id's during the iteration.
3. Passed down the selected currency from the dropdown menu as a prop to List.jsx and used that prop to fetch the respective data from data.json.
4. The "searchText" state is passed as a prop to List.jsx, where it is further passed to a controller function, along with the array of rows. This function filter the rows, and keeps only those whose id's proove to be a match with the searched one.
5. The only console error faced was, "Each children in list should have a unique key", and it was solved buy providing it using the "key" keyword.
6. For the pupose of populating the cards with respective data, "setSelectedOrderDetails" and "setSelectedOrderTimeStamps" are passed down as props to List.jsx. List.jsx uses them in a fucntion which is further sent down as prop to ListRow.jsx where that function is triggered using an onClick event.

