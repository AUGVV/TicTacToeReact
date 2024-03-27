import { observer } from "mobx-react";
import { recordsStore } from "../Stores/RecordsStore";
import { useEffect } from 'react';
import { globalStatesStore } from '../Stores/GlobalStatesStore';

import RecordField from './Components/RecordPage/RecordField';
import UlRecord from '../StyledComponents/UlRecord';

const Records = observer(() => {
    let records = new Array();
    for (let i = 0; i < recordsStore.RecordList.length; i++) {
        records.push(<RecordField key={i} index={i+1} record={recordsStore.RecordList[i]} />);
    }

    useEffect(() => {
        // Required to change nav menu when changing the route in the browser.
        globalStatesStore.InitRecordsPage();

        recordsStore.GetRecordList();
    }, []);

    return (<>
        <UlRecord>
            {records}
        </UlRecord>
    </>);
})

export default Records;