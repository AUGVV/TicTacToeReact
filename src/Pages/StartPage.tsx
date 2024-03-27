import { startPageStore } from "../Stores/StartPageStore";
import { useEffect, useRef } from "react";
import { globalStatesStore } from '../Stores/GlobalStatesStore';

import PlayersBar from './Components/StartPage/PlayersBar';
import GameRuleBar from './Components/StartPage/GameRuleBar';

const StartPage = () => {
    const player1Ref = useRef<HTMLInputElement>(null);
    const player2Ref = useRef<HTMLInputElement>(null);
    const sizeRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Required to change nav menu when changing the route in the browser.
        globalStatesStore.InitStartPage();

        startPageStore.SetPreviousState(sizeRef, player1Ref, player2Ref);
    }, []);

    return (
        <>
            <PlayersBar player1Ref={player1Ref} player2Ref={player2Ref} />
            <GameRuleBar player1Ref={player1Ref} player2Ref={player2Ref} sizeRef={sizeRef} />
        </>);
}

export default StartPage;