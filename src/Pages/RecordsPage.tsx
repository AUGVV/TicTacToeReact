import '../Styles/RecordsPage.css';
import { observer } from "mobx-react";
import RecordField from "../Components/RecordField";
import { recordsStore } from "../Stores/RecordsStore";
import { useEffect } from 'react';
import { globalStatesStore } from '../Stores/GlobalStatesStore';

const Records = observer(() => {
    let records = new Array();
    for (let i = 0; i < recordsStore.RecordList.length; i++) {
        records.push(<RecordField key={i} index={i+1} record={recordsStore.RecordList[i]} />);
    }

    useEffect(() => {
        recordsStore.GetRecordList();

        // Required to change nav menu when changing the route in the browser.
        globalStatesStore.SetPreviousState();
        globalStatesStore.GoToRecordsPage();
    }, []);

    return (<>
        <ul>
            {records}
        </ul>
    </>);
})

export default Records;