import './App.css';
import React, { useState } from 'react';
import GetReq from './components/GetReq';
import PostReq from './components/PostReq';
import PutReq from './components/PutReq';
import DelReq from './components/DelReq';
import AllStats from './components/AllStats';
import ScrollBtn from './components/ScrollBtn';

const App = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const toTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        if(window.scrollY < 200) {
            window.scrollTo({
                top: '100%',
                behavior: 'smooth'
            })
        }
    }

    return (
        <div>
            <h1 className="title">FTF Statistics Manager</h1>

            <div className="forms">
                <div className="tab">
                    <div className={toggleState === 0 ? "w100 active" : "w100"} onClick={() => toggleTab(0)}>
                        <button className="tablinks">List</button>
                    </div>
                    <div className={toggleState === 1 ? "w100 active" : "w100"} onClick={() => toggleTab(1)}>
                        <button className="tablinks">Get</button>
                    </div>
                    <div className={toggleState === 2 ? "w100 active" : "w100"} onClick={() => toggleTab(2)}>
                        <button className="tablinks">Add</button>
                    </div>
                    <div className={toggleState === 3 ? "w100 active" : "w100"} onClick={() => toggleTab(3)}>
                        <button className="tablinks">Update</button>
                    </div>
                    <div className={toggleState === 4 ? "w100 active" : "w100"} onClick={() => toggleTab(4)}>
                        <button className="tablinks">Delete</button>
                    </div>
                </div>
            </div>
            <div className="w100">
                <div className={toggleState === 0 ? "display" : "none"}>
                    <AllStats />
                </div>
                <div className={toggleState === 1 ? "display" : "none"}>
                    <GetReq />
                </div>
                <div className={toggleState === 2 ? "display" : "none"}>
                    <PostReq />
                </div>
                <div className={toggleState === 3 ? "display" : "none"}>
                    <PutReq />
                </div>
                <div className={toggleState === 4 ? "display" : "none"} >
                    <DelReq />
                </div>
            </div>
            <ScrollBtn toTop={toTop} />
        </div>
    )
}

export default App