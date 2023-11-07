import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function ResultPage({EI,SN,TF,JP,setMBTI,MBTI}){

    useEffect(()=>{
        let data=[]
        if(EI>0){
            data.push("E")
        }else if (EI<0){
            data.push("I")
        }
        if(SN>0){
            data.push("S")
        }else if (SN<0){
            data.push("N")
        }
        if(TF>0){
            data.push("T")
        }else if (TF<0){
            data.push("F")
        }
        if(JP>0){
            data.push("J")
        }else if (JP<0){
            data.push("P")
        }
        setMBTI(data.join(""))
    },[])

    let navigate =useNavigate();

    return (
        <div>
            {MBTI&&(
                <div>
                    <div>{MBTI}</div>
                </div>
                )
            }
            <button onClick={()=>{
                navigate('/')
            }}>다시하기</button>
        </div>
    );

}

export default ResultPage