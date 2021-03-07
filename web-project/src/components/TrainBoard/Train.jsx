import React from "react";
import styled from "styled-components";
import { Cards } from "../../Styled/StyledElements";


const TrainImage = styled.img`
    width: 30px;
    height: 30px;
`;

const TrainText = styled.span`
    font-size: 14px;
    align-self: flex-start;
`;

function Train() {
    return (
        <Cards
            bgColor="#89BEAA"
            leftPosition={Math.floor(Math.random() * 700)}
        >
            <TrainText>N400</TrainText>
            <TrainImage src="https://img.icons8.com/ios/452/toy-train.png" />
        </Cards>
    );
}

export default Train;
