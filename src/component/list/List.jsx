import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import convertTampToKeyValue from "../../controller/convertTampToKeyValue.js";
import filterBySearch from "../../controller/filterBySearch";

let timestampObject = convertTampToKeyValue();

const List = ({ rows , selectedItem, search, setDetails, setStamps}) => {
  rows = filterBySearch(rows, search)
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
          <ListRow onClick={setHero(row)} key={row.key}>
            <ListRowCell>{row["id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{getSubmittedAt(row.id)}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[selectedItem]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );

  function setHero(row){

    return()=>{
      setDetails(row.executionDetails)
      setStamps(timestampObject[row.id])
    }

  }

};
function getSubmittedAt(id){
  return timestampObject[id].orderSubmitted;
}
export default List;
