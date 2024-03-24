import '../Styles/StartPage.css';
import { observer } from "mobx-react";
import { startPageStore } from "../Stores/StartPageStore";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AddPlayer from './Components/StartPage/AddPlayer';
import { globalStatesStore } from '../Stores/GlobalStatesStore';
import PlayersBar from './Components/StartPage/PlayersBar';
import GameRuleBar from './Components/StartPage/GameRuleBar';

const StartPage = observer(() => {
    const player1Ref = useRef<HTMLInputElement>(null);
    const player2Ref = useRef<HTMLInputElement>(null);
    const sizeRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        startPageStore.SetPreviousState(sizeRef, player1Ref, player2Ref);

        // Required to change nav menu when changing the route in the browser.
        globalStatesStore.SetPreviousState();
        globalStatesStore.GoToStartPage();
    }, []);

    return (
        <>
            <PlayersBar player1Ref={player1Ref} player2Ref={player2Ref} />
            <GameRuleBar player1Ref={player1Ref} player2Ref={player2Ref} sizeRef={sizeRef} />
        </>);
})

export default StartPage;