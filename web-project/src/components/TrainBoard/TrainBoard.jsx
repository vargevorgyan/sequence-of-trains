import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Crew from "./Crew";
import TimeLine from "./TimeLine";
import Train from "./Train";

const TrainBoardStyled = styled.div`
    width: 100%;
    overflow: auto;
    display: grid;
    margin-left: -4.5px;
    ::-webkit-scrollbar {
        width: 1em;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 0.1px solid slategrey;
    }
`;

const TrainLine = styled.div`
    position: relative;
    height: 61px;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid #cdcdcd;
`;

function TrainBoard() {
    const TrainBoardRef = useRef(null);
    useEffect(() => {
        const TrainBoardElement = TrainBoardRef.current;
        TrainBoardElement.scrollBy(TrainBoardElement.offsetWidth / 2, 0);
    }, []);

    return (
        <TrainBoardStyled ref={TrainBoardRef}>
            <TrainLine>
                <Train></Train>
            </TrainLine>
            <TrainLine>
                <Train></Train>
            </TrainLine>
            <TrainLine>
                <Train></Train>
            </TrainLine>
            <TrainLine>
                <Train></Train>
            </TrainLine>
            <TrainLine>
                <Train></Train>
            </TrainLine>
            <TrainLine>
                <Train></Train>
            </TrainLine>
            <TimeLine />
            <TrainLine>
                <Crew></Crew>
            </TrainLine>
            <TrainLine>
                <Crew></Crew>
            </TrainLine>
            <TrainLine>
                <Crew></Crew>
            </TrainLine>
            <TrainLine>
                <Crew></Crew>
            </TrainLine>
            <TrainLine>
                <Crew></Crew>
            </TrainLine>
        </TrainBoardStyled>
    );
}

export default TrainBoard;
