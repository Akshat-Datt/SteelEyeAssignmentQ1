function filterBySearch(rows, searchQuery){
    return rows.filter(item => item.id.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);
}

export default filterBySearch;