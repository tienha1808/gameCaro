import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Board.module.scss'
import { allTicked, getValue1, getValue2, user1Play, user1State, user1Ticked, user2Play, user2State, user2Ticked } from '../tickSlice'

function Board () {

    const [ axisY, setAxisY ] = useState()
    const [ axisX, setAxisX ] = useState()

    const state1 = useSelector(user1State)
    const state2 = useSelector(user2State)
    const value1 = useSelector(user1Ticked)
    const value2 = useSelector(user2Ticked)
    const valueAll = useSelector(allTicked)

    const dispatch = useDispatch()

    useEffect(() => {
        setAxisX(() => {
            let axisX = []
            for (let j = 1; j <= 30; j++) {
                axisX.push(j)
            }
            return axisX
        })
        setAxisY(() => {
            let axisY = []
            for (let j = 1; j <= 30; j++) {
                axisY.push(j)
            }
            return axisY
        })
    }, [])

    const handleTick = (x, y) => {
        if (!(valueAll.some(ticked => ticked.x === x && ticked.y === y))) {
            if (state1 === 'play') {
                dispatch(getValue1({x, y}))
                dispatch(user2Play())
            }
            if (state2 === 'play') {
                dispatch(getValue2({x, y}))
                dispatch(user1Play())
            }
        }
    }

    useEffect(() => {
        if (valueAll.some(ticked => ticked.x === axisX[0] || ticked.y === axisY[0])) {
            setAxisX(prev => [axisX[0] - 1, ...prev])
            setAxisY(prev => [axisY[0] - 1, ...prev])
        }
        if (valueAll.some(ticked => ticked.x === axisX[axisX.length - 1] || ticked.y === axisY[axisX.length - 1])) {
            setAxisX(prev => [...prev, axisX[axisX.length - 1] + 1])
            setAxisY(prev => [...prev, axisY[axisX.length - 1] + 1])
        }
    }, [valueAll])

  return (
    <React.Fragment>
        {
            axisY
            &&
            <div className='col-12 d-flex flex-column h-100'>
                {axisY.map(y => (
                    <div
                        key={y}
                        className='col-12 flex-grow-1 d-flex'
                    >
                        {
                        axisX
                        &&
                        axisX.map(x => (
                            <button
                                key={x}
                                className='flex-grow-1 position-relative p-0'
                                style={{border: 'solid 1px #fff'}}
                                onClick={() => handleTick(x, y)}
                            >
                                {value1.some(tick => tick.x === x && tick.y === y) && <div className={styles.X}></div>}
                                {value2.some(tick => tick.x === x && tick.y === y) && <div className={styles.O}></div>}
                            </button>
                        ))
                        }
                    </div>
                ))}
            </div>
        }
    </React.Fragment>
  )
}

export default Board