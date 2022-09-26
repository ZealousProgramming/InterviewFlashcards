import { useCallback, useState, useEffect, useContext} from "react";

import {TopicContext} from "../contexts/TopicContext";
import ReactQuestions from "../common/questions/ReactQuestions";
import JavaQuestions from "../common/questions/JavaQuestions";
import shuffleArray from "../common/ShuffleArray";

function QuizPage() {
    const [flashcardEntries, setFlashcardEntries] = useState([]);
    const { topicFilter } = useContext(TopicContext);

    const getQuestions = useCallback(() => {
        let copy = flashcardEntries;

        if (topicFilter.java) {
            copy.push(...JavaQuestions);
        }

        if (topicFilter.react) {
            copy.push(...ReactQuestions);
        }

        shuffleArray(copy);
        return copy;
    }, [topicFilter.react, topicFilter.java, flashcardEntries]);

    useEffect(() => {
        if (flashcardEntries.length === 0) {
            setFlashcardEntries(getQuestions());
            console.log(flashcardEntries)
        }
    }, [getQuestions, flashcardEntries]);


    return (
        <>
            <h3>Quiz Page</h3>
        </>
    );
}

export default QuizPage;