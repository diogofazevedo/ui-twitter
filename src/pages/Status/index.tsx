import { useState, FormEvent, KeyboardEvent } from "react";
import { PaperPlaneRight } from "phosphor-react";

import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import "./index.css";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    if (newAnswer.length > 0) {
      setAnswers((answers) => [newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers((answers) => [newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum facere nulla non? Adipisci magnam sit quis non minima tempore commodi, ad nesciunt excepturi ex odio iste hic nihil sunt. Quis." />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/diogofazevedo.png" alt="Utilizador" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
            onKeyDown={handleHotKeySubmit}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      {answers.map((answser) => {
        return <Tweet key={answser} content={answser} />;
      })}
    </main>
  );
}
