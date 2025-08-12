import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NumberItem({no, qid, is_response, or, activeNum, setActiveStep, ques, setResponse}) {
    // const [no, setNo] =  useState(0) 
    // const [question_id, setQid] = useState(props.qid) 
    // const [is_responded, setis_response] = useState(props.is_response)
    // const [order, setOrder] = useState(props.or)
    const navigate = useNavigate()
    const [ac, setA] = useState(no === 1)
    const [nums, setNums] = useState([])
    // const activeNo = 1
    const isActive = activeNum === no;
    // con 
    // const isActive = activeNum === no;
    // const [cno, setCurNo] = useState(1)

    useEffect(() => {
      
      // if(no)
      //   setNo(no)
      // if(qid)
      //   setQid(qid)
      // if(is_response)
      //   setis_response(is_response)
      // if(or)
      //   setOrder(or)
      // console.log(no)
      // if(no === 1){setA(true)}else{
      //   // setA(false)
      // }
      // getNums()
    }, [no, qid, is_response, or])

    const getNums = () => {
      console.log(ques)
      setNums(ques.map(value => ({  ac: value.num == activeNum, is_response: is_response, num: value.num})))
      console.log('nums', nums)
    }
    const handleResponse = (e) => {
      // setA(false)
      // setA(!no)
      // setA(no)
      setActiveStep(qid, no)
      setResponse(e,qid, no)
      // setA(no === activeNum)
      console.log(no, activeNum)
      // setAnswer(data)
      // setA(!ac)
      // console.log(ac)
      // // activeNum
      // setNums(ques.map(value => ({  ac: value.num == val.num, is_response: is_response, num: value.num})))
      // setNums(ques.map((v, i) => (if(v.num == val.num){ return {...v, ac: }})))
      // setNums(prev => ({
      //   num: prev.nums.map((item, i) => ({
      //     ...item, ac: i=== ind
      //   }))
      // }) )
      // ques.map())
      // setNums(nums.find(num => {if (num.num == no){
      //   return {...num, ac: true}
      // }}))
      console.log('nums', nums)
      // setNums[no] 
      // setis_response(qid, no)
      // if(is_response)
      // if()
      // navigate(`${qid}/order/${no}`)
    }
  return (
    <>
      
    <div>
      {/* {nums.map((val, ind) => ( */}
{/* key={ind}  */}
        <button onClick={(e)=>handleResponse(e)} className={`flex flex-col justify-center items-center btn w-5 btn-sm p-5 m-2 ${isActive? 'bg-green-800 hover:bg-gray-800': is_response? "bg-orange-900 hover:bg-green-200":'bg-green-100 hover:bg-gray-800'}`}>
            <span className='justify-center items-center text-center text-lg '>{no}</span>
        </button>
      {/* ))} */}
    </div>
    </>
  )
}

export default NumberItem