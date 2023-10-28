import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Typingbox = () => {
    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(15);
    const [testStart, setTestStart] = useState(false);
    const [, setTestEnd] = useState(false);

    let keyChar = 0;
    let keyWord = 0;

    let para =
        "country plenty whenever whistle chief cow weight practice early test breathe vapor rather everything vapor shaking sink children box library swimming bus identity football becoming watch fine mathematics fifty material fifty beyond like helpful fallen imagine  dream case bag grabbed might mouse fact funny halfway beneath kept rope job series"; 
    function handleUserInput() {
        if (countdown > 0) {
            setTestStart(true);
            setTestEnd(false);
        } else {
            setTestEnd(true);
            setTestStart(false);
        }
    }

    useEffect(() => {
        let timer;
        function startTimer() {
            if (testStart && countdown > 0) {
                timer = setInterval(() => {
                    setCountdown(countdown - 1);
                }, 1000);
            } else if (countdown === 0) {
                setTestEnd(true);
                setTestStart(false);
                navigate("/statics");
            } else {
                setTestEnd(true);
                setTestStart(false);
            }
        }

        startTimer();
        return () => clearInterval(timer);
    }, [countdown, testStart, navigate]);


    return (
        <div className="typingbox">
            <div className="row-1">
                <div>
                    <p>{countdown}</p>
                </div>
                <div className="buttons">
                    <button onClick={() => setCountdown(15)}>15s</button>
                    <button onClick={() => setCountdown(30)}>30s</button>
                    <button onClick={() => setCountdown(60)}>60s</button>
                </div>
            </div>

            <div className="text-box" onClick={handleUserInput}>
                {/* {para.split("").map((char) => {
                    return <span key={"char" + keyChar++}>{char}</span>;
                })} */}

                {para.split(" ").map((word) => {
                    return (
                        <span className="word" key={"word" + keyWord++}>
                            {word.split("").map((char) => {
                                return (
                                    <span
                                        className="character"
                                        key={"char" + keyChar++}>
                                        {char}
                                    </span>
                                );
                            })}
                        </span>
                    );
                })}
            </div>

            <div className="row-2">
                <button>
                    <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="RefreshIcon">
                        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
                    </svg>
                </button>
            </div>

            <div className="row-3">
                <button>esc</button>
                <p>-</p>
                <p>reset</p>
            </div>

            <div className="row-4">
                <div className="buttons">
                    <button>10</button>
                    <button>50</button>
                    <button>80</button>
                    <button>100</button>
                </div>
                <p>-</p>
                <p>no. of words</p>
            </div>
        </div>
    );
};

export default Typingbox;