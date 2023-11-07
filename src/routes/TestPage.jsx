import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function TestPage({setEI,setJP,setSN,setTF}){

    let navigate =useNavigate();
    const [num,setNum]=useState(1)
    const [data] =useState(
        {
            1:{
                ques:'문제1 "아무도 없는 집에 들어 가면 어때?"',
                an1:'정답1 너무 외로워. 깜깜하고 너무 조용해.',
                an2:'정답2 와~드디어 나만의 시간이다. 편하고 행복하다. ',
            },
            2:{
                ques:'문제2 "취미 생활을 시작할 때 어떤 편이야?"',
                an1:'정답1 E : 일단 동호회에 가입해서 많은 사람들과 어울림.',
                an2:'정답2 I : 혼자할 수 있는 취미생활을 즐김.',
            },
            3:{
                ques:'문제3 "친구랑 만나기로 했는데 갑자기 약속이 취소되었을 때"',
                an1:'정답1 E : 앗! 이럴수가 그럼... 누굴 만날까? 전화해봐야지.',
                an2:'정답2 I : 와~ 갑자기 혼자만의 시간이 생겼쟎아. 뭐하지? 신나~~',
            },
            4:{
                ques:'문제4 "사과 하면 뭐가 생각나?"',
                an1:'정답1 S : 빨갛다, 과일, 맛있다',
                an2:'정답2 N :  백설공주, 애플 , 뉴턴, 아침사과 금사과',
            },
            5:{
                ques:'문제5 "비행기 타기 전에 무슨 생각해?"',
                an1:'정답1 S : 기내식 뭐 나오지? 영화볼까?',
                an2:'정답2 N : 비행기가 추락하면 어쩌지. 비상구 자리에 앉을까? ',
            },
            6:{
                ques:'문제6 "노래들을 때 뭐가 중요해?"',
                an1:'정답1 S : 노래는 멜로디지~~흥얼흥얼 가사가 뭐가 중요해 음악은 Feel이쥐!',
                an2:'정답2 N : 가사가 너무 중요해~ 가사까지 맘에 들어야 최애곡!',
            },
            7:{
                ques:'문제7 "나 교통사고 났어"',
                an1:'정답1 T : 보험은 들어놨어? 누구 과실이야?',
                an2:'정답2 F : 어머! 많이 다쳤어? 괜찮아?',
            },
            8:{
                ques:'문제8 "나 우울해서 미용실 갔다왔어."',
                an1:'정답1 T : 펌했어? 염색? 사진찍어 보내봐.',
                an2:'정답2 F : 왜 우울해? 무슨일 있었어?',
            },
            9:{
                ques:'문제9 "차에 뭐 놓고왔네 어쩌지?"',
                an1:'정답1 T : 나 혼자 다녀올게! 너 할거 하고있어.',
                an2:'정답2 F : 같이가자! 혼자가면 외로워.',
            },
            10:{
                ques:'문제10 "여행은 어떻게 할까?"',
                an1:'정답1 J : 몇시에 출발해서 어디서 밥먹고 어디 들려서 이렇게 놀자! ',
                an2:'정답2 P : 응? 응 좋아. 그러자. 동의!',
            },
            11:{
                ques:'문제11 "뭐하냐~ 심심한데 나와!"',
                an1:'정답1 J : 응? 갑자기? 나 오늘 계획 다 세워놨는뎅...',
                an2:'정답2 P : 오~ 당근 좋지. 어디로 갈까?',
            },
            12:{
                ques:'문제12 "요리할 때"',
                an1:'정답1 J : 레시피랑 계량대로 잘 만드는게 중요함.',
                an2:'정답2 P : 음식은 손맛이쥐. 감으로 하는겨~',
            },
        }
    )
    const handleClick =(e)=>{
        const value = (e.target.name === 'an1') ? 1 :-1
        setNum(num+1);
        {
            if(num<=3){
                setEI(c=>c+value)
            }else if(num>=4&&num<=6){
                setSN(c=>c+value)
            }else if(num>=7&&num<=9){
                setTF(c=>c+value)
            }else if(num>=10&&num<=11){
                setJP(c=>c+value)     
            }
            if(num===12){
                setJP(c=>c+value)
                
                navigate('/resultpage')
            } 
        }
    }
    
    return (
        <div>
                <div>
                    Q:{data[num].ques}
                </div>
                <button name='an1' onClick={handleClick}>{num<=12&&data[num].an1}</button>
                <button name='an2' onClick={handleClick}>{num<=12&&data[num].an2}</button>
        </div>
    );

}

export default TestPage