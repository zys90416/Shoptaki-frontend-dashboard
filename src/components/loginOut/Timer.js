import React from 'react'
import { message } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useRef } from "react";
import { useLocation,useHistory } from "react-router-dom";

const InterceptLogin = (props) => {
	const history = useHistory();
	const delayTime = 3*1000;
	const timerId = useRef(null);
	const { pathname } = useLocation();
    let hrefType = window.location.href.indexOf('login') < 0;
    useEffect(() => {
        if(hrefType){
            document.addEventListener('mousemove',function(){
                clearTimeout(timerId.current);
                timerId.current = setTimeout(() => {
                    message.success(
                        "You have stayed on this page for too long, and will automatically log out",
                        2,
                    ).then(()=>{
                        history.replace('/login');
                    })
                }, delayTime);
            })
            clearTimeout(timerId.current);
            timerId.current = setTimeout(() => {
                message.success(
                    "You have stayed on this page for too long, and will automatically log out",
                    2,
                ).then(()=>{
                    history.replace('/login');
                })
            }, delayTime);
        }
    }, [pathname]);
  return <></>;
};
export default InterceptLogin