import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearBoard, user1Play, user1Ticked, user2Ticked } from '../tickSlice'

function SignName () {

    const [ username1, setUserame1 ] = useState('')
    const [ username2, setUserame2 ] = useState('')
    const [ sec, setSec ] = useState(0)
    const [ min, setMin ] = useState(0)
    const [ result, setResult ] = useState('')
    const [ disabled, setDisabled ] = useState()
    
    const dispatch = useDispatch()

    const value1 = useSelector(user1Ticked)
    const value2 = useSelector(user2Ticked)

    useEffect(() => {
        let time
        if (disabled) {
            time = setInterval(() => 
                setSec(prev => prev + 1)
            , 1000)
        }
        return () => clearInterval(time)
    }, [disabled])

    useEffect(() => {
        if (sec >= 60) {
            setMin(prev => prev + 1)
            setSec(0)
        }
    }, [sec])

    // Xử lý điều kiện thắng

    // User 1
    useEffect(() => {
        value1.forEach(value => {
            // Hàng ngang
            const conditionX1 = value1.some(ticked => ticked.x === value.x + 1 && ticked.y === value.y)
            const conditionX2 = value1.some(ticked => ticked.x === value.x + 2 && ticked.y === value.y)
            const conditionX3 = value1.some(ticked => ticked.x === value.x + 3 && ticked.y === value.y)
            const conditionX4 = value1.some(ticked => ticked.x === value.x + 4 && ticked.y === value.y)
            const conditionXBlock1 = value2.some(ticked => ticked.x === value.x - 1 && ticked.y === value.y) 
            const conditionXBlock2 = value2.some(ticked => ticked.x === value.x + 5 && ticked.y === value.y)
            if (conditionX1 && conditionX2 && conditionX3 && conditionX4) {
                if (!(conditionXBlock1 && conditionXBlock2)) {
                    setResult(username1)
                    setMin(0)
                    setSec(0)
                    setDisabled(false)
                    dispatch(clearBoard())
                }
            }
            // Hàng dọc
            const conditionY1 = value1.some(ticked => ticked.y === value.y + 1 && ticked.x === value.x)
            const conditionY2 = value1.some(ticked => ticked.y === value.y + 2 && ticked.x === value.x)
            const conditionY3 = value1.some(ticked => ticked.y === value.y + 3 && ticked.x === value.x)
            const conditionY4 = value1.some(ticked => ticked.y === value.y + 4 && ticked.x === value.x)
            const conditionYBlock1 = value2.some(ticked => ticked.y === value.y - 1 && ticked.x === value.x) 
            const conditionYBlock2 = value2.some(ticked => ticked.y === value.y + 5 && ticked.x === value.x)
            if (conditionY1 && conditionY2 && conditionY3 && conditionY4) {
                if (!(conditionYBlock1 && conditionYBlock2)) {
                    setResult(username1)
                    setMin(0)
                    setSec(0)
                    setDisabled(false)
                    dispatch(clearBoard())
                }
            }
            // Hàng chéo
            const conditionXY1 = value1.some(ticked => ticked.y === value.y + 1 && ticked.x === value.x + 1)
            const conditionXY2 = value1.some(ticked => ticked.y === value.y + 2 && ticked.x === value.x + 2)
            const conditionXY3 = value1.some(ticked => ticked.y === value.y + 3 && ticked.x === value.x + 3)
            const conditionXY4 = value1.some(ticked => ticked.y === value.y + 4 && ticked.x === value.x + 4)
            const conditionXYBlock1 = value2.some(ticked => ticked.y === value.y - 1 && ticked.x === value.x -1) 
            const conditionXYBlock2 = value2.some(ticked => ticked.y === value.y + 5 && ticked.x === value.x + 5)
            if (conditionXY1 && conditionXY2 && conditionXY3 && conditionXY4) {
                if (!(conditionXYBlock1 && conditionXYBlock2)) {
                    setResult(username1)
                    setMin(0)
                    setSec(0)
                    setDisabled(false)
                    dispatch(clearBoard())
                }
            }
            const conditionXYUp1 = value1.some(ticked => ticked.y === value.y - 1 && ticked.x === value.x + 1)
            const conditionXYUp2 = value1.some(ticked => ticked.y === value.y - 2 && ticked.x === value.x + 2)
            const conditionXYUp3 = value1.some(ticked => ticked.y === value.y - 3 && ticked.x === value.x + 3)
            const conditionXYUp4 = value1.some(ticked => ticked.y === value.y - 4 && ticked.x === value.x + 4)
            const conditionXYUpBlock1 = value2.some(ticked => ticked.y === value.y + 1 && ticked.x === value.x - 1) 
            const conditionXYUpBlock2 = value2.some(ticked => ticked.y === value.y - 5 && ticked.x === value.x + 5)
            if (conditionXYUp1 && conditionXYUp2 && conditionXYUp3 && conditionXYUp4) {
                if (!(conditionXYUpBlock1 && conditionXYUpBlock2)) {
                    setResult(username1)
                    setMin(0)
                    setSec(0)
                    setDisabled(false)
                    dispatch(clearBoard())
                }
            }
        })
    }, [value1])

    // User 2

    useEffect(() => {
        value2.forEach(value => {
            // Hàng ngang
            const conditionX1 = value2.some(ticked => ticked.x === value.x + 1 && ticked.y === value.y)
            const conditionX2 = value2.some(ticked => ticked.x === value.x + 2 && ticked.y === value.y)
            const conditionX3 = value2.some(ticked => ticked.x === value.x + 3 && ticked.y === value.y)
            const conditionX4 = value2.some(ticked => ticked.x === value.x + 4 && ticked.y === value.y)
            const conditionXBlock1 = value1.some(ticked => ticked.x === value.x - 1 && ticked.y === value.y) 
            const conditionXBlock2 = value1.some(ticked => ticked.x === value.x + 5 && ticked.y === value.y)
            if (conditionX1 && conditionX2 && conditionX3 && conditionX4) {
                if (!(conditionXBlock1 && conditionXBlock2)) {
                    setResult(username2)
                    setMin(0)
                    setSec(0)
                    setDisabled(false)
                    dispatch(clearBoard())
                }
            }
            // Hàng dọc
            const conditionY1 = value2.some(ticked => ticked.y === value.y + 1 && ticked.x === value.x)
            const conditionY2 = value2.some(ticked => ticked.y === value.y + 2 && ticked.x === value.x)
            const conditionY3 = value2.some(ticked => ticked.y === value.y + 3 && ticked.x === value.x)
            const conditionY4 = value2.some(ticked => ticked.y === value.y + 4 && ticked.x === value.x)
            const conditionYBlock1 = value1.some(ticked => ticked.y === value.y - 1 && ticked.x === value.x) 
            const conditionYBlock2 = value1.some(ticked => ticked.y === value.y + 5 && ticked.x === value.x)
            if (conditionY1 && conditionY2 && conditionY3 && conditionY4) {
                if (!(conditionYBlock1 && conditionYBlock2)) {
                    setResult(username2)
                    setMin(0)
                    setSec(0)
                    setDisabled(false)
                    dispatch(clearBoard())
                }
            }
            // Hàng chéo
            const conditionXYDown1 = value2.some(ticked => ticked.y === value.y + 1 && ticked.x === value.x + 1)
            const conditionXYDown2 = value2.some(ticked => ticked.y === value.y + 2 && ticked.x === value.x + 2)
            const conditionXYDown3 = value2.some(ticked => ticked.y === value.y + 3 && ticked.x === value.x + 3)
            const conditionXYDown4 = value2.some(ticked => ticked.y === value.y + 4 && ticked.x === value.x + 4)
            const conditionXYDownBlock1 = value1.some(ticked => ticked.y === value.y - 1 && ticked.x === value.x -1) 
            const conditionXYDownBlock2 = value1.some(ticked => ticked.y === value.y + 5 && ticked.x === value.x + 5)
            if (conditionXYDown1 && conditionXYDown2 && conditionXYDown3 && conditionXYDown4) {
                if (!(conditionXYDownBlock1 && conditionXYDownBlock2)) {
                    setResult(username2)
                    setMin(0)
                    setSec(0)
                    setDisabled(false)
                    dispatch(clearBoard())
                }
            }
            const conditionXYUp1 = value2.some(ticked => ticked.y === value.y - 1 && ticked.x === value.x + 1)
            const conditionXYUp2 = value2.some(ticked => ticked.y === value.y - 2 && ticked.x === value.x + 2)
            const conditionXYUp3 = value2.some(ticked => ticked.y === value.y - 3 && ticked.x === value.x + 3)
            const conditionXYUp4 = value2.some(ticked => ticked.y === value.y - 4 && ticked.x === value.x + 4)
            const conditionXYUpBlock1 = value1.some(ticked => ticked.y === value.y + 1 && ticked.x === value.x - 1) 
            const conditionXYUpBlock2 = value1.some(ticked => ticked.y === value.y - 5 && ticked.x === value.x + 5)
            if (conditionXYUp1 && conditionXYUp2 && conditionXYUp3 && conditionXYUp4) {
                if (!(conditionXYUpBlock1 && conditionXYUpBlock2)) {
                    setResult(username2)
                    setMin(0)
                    setSec(0)
                    setDisabled(false)
                    dispatch(clearBoard())
                }
            }
        })
    }, [value2])

    useEffect(() => {
        if (min === 20) {
            setResult('Draw')
            setMin(0)
            setSec(0)
            setDisabled(false)
        }
    }, [min])

    const handleStart = () => {
        if (username1, username2) {
            setResult('')
            setDisabled(true)
            dispatch(user1Play())
        }
    }

  return (
    <React.Fragment>
        <div className='border-end border-3 h-100 shadow-sm'>
            <div className='fs-1 fw-bold text-center mb-5'>
                Game XO
            </div>
            <div className='col-12'>
                <label
                    className='col-3 fs-2 fw-bold text-center'
                    htmlFor='username1'
                >
                    User 1
                </label>
                <input
                    className='col-8 py-2 px-3 mb-3'
                    style={{borderRadius: '5px', outline: 'none'}}
                    type="text"
                    value={username1}
                    onChange={e => setUserame1(e.target.value)}
                />
            </div>
            <div>
                <label
                    className='col-3 fs-2 fw-bold text-center'
                    htmlFor='username2'
                >
                    User 2
                </label>
                <input
                    className='col-8 py-2 px-3 mb-3'
                    style={{borderRadius: '5px', outline: 'none'}}
                    type="text"
                    value={username2}
                    onChange={e => setUserame2(e.target.value)}
                />
            </div>
            <div className='text-center'>
                <button
                    className='col-8 mt-3 py-2'
                    onClick={handleStart}
                    disabled={disabled}
                >
                    Start
                </button>
            </div>
            <div className='fs-1 fw-bold text-center'>
                {`${min}:${sec}`}
            </div>
            <div className='mt-5 col-10 mx-auto fs-1 fw-bold'>
                Result: {result}
            </div>
        </div>
    </React.Fragment>
  )
}

export default SignName