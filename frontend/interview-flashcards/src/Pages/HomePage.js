import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from "react-bootstrap";

import { TopicContext } from "../Contexts/TopicContext";

function HomePage() {
    let beginNavigate = useNavigate();
    const { setTopicFilter } = useContext(TopicContext);
    const [ topicStates, setTopicsState ] = useState({
        javaScript: false,
        react: false,
        java: false,
        springBoot: false,
    });

    const toggleTopic = (e) => {
        const targetKey = e.target.value;
        const updatedCopy = Object.assign(...Object.entries(topicStates).map(([k, v]) => ({
            [k]: targetKey === k ? !v : v
        })));
        setTopicsState(updatedCopy);

    }

    const getButtonStyle = (key) => {
       return topicStates[key] ? 'primary' : 'secondary';
    }

    return (
        <>
            <h3>Select your topics</h3>
            <ButtonGroup>
                <Button value='javaScript' variant={getButtonStyle('javaScript')} onClick={toggleTopic}>JavaScript</Button>
                <Button value='react' variant={getButtonStyle('react')} onClick={toggleTopic}>React</Button>
                <Button value='java' variant={getButtonStyle('java')} onClick={toggleTopic}>Java</Button>
                <Button value='springBoot' variant={getButtonStyle('springBoot')} onClick={toggleTopic}>Spring Boot</Button>

            </ButtonGroup>
            <button onClick={() => {
                setTopicFilter(topicStates);
                beginNavigate("/quiz");
            }}>Begin</button>
        </>
    );
}

export default HomePage;