import '../Styles/RecordsPage.css';
import { observer } from "mobx-react";
import RecordField from "../Component/RecordField";
import { recordsStore } from "../Stores/RecordsStore";
import { useEffect } from 'react';

const Records = observer(() => {
    let records = new Array();
    for (let i = 0; i < recordsStore.RecordList.length; i++) {
        records.push(<RecordField index={i+1} record={recordsStore.RecordList[i]} />);
    }

    useEffect(() => {
        recordsStore.InitRecordList();
    }, []);

    return (<>
        <ul>
            {records}
        </ul>
    </>);
})

export default Records;