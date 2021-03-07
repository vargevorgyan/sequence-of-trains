import React from 'react'
import styled from 'styled-components'
import BetweenHours from './BetweenHours'

const TimeLineStyled = styled.div`
  background-color: rgb(246, 246, 246);
  display: flex;
  margin-left: auto;
  width: max-content;
  column-gap: 10px;
  padding: 5px 5px;
  padding-right: 20px;
  color: rgb(31, 31, 31);
`

const Hour = styled.span`
  display: flex;
`

const currentTime = new Date().getHours()

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
const times = range(currentTime - 12, currentTime + 12, 1)
  .filter((i) => i >= 0 && i <= 24)
  .map((item) => (item < 10 ? '0' + item : item))
  .map((item) => (
    <>
      <Hour key={item}>
        <span>{item}:00</span>
      </Hour>
      <BetweenHours />
    </>
  ))

function TimeLine() {
  return <TimeLineStyled>{times}</TimeLineStyled>
}

export default TimeLine
