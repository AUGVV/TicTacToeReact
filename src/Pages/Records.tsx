import { observer } from "mobx-react";
import { recordsStore } from "../Stores/RecordsStore";

const Records = observer(() => {
    let records = new Array();
    for (let i = 0; i < recordsStore.RecordList.length; i++) {
        records.push(i);
    }

    return (<>
        {records}
    </>);
})

export default Records;