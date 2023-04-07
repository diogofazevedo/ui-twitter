import { Link } from "react-router-dom";
import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react";
import "./index.css";

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/diogofazevedo.png" alt="Utilizador" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Diogo Azevedo</strong>
          <span>@diogofazevedo</span>
        </div>
        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="submit">
            <ChatCircle />
            20
          </button>
          <button type="submit">
            <ArrowsClockwise />
            20
          </button>
          <button type="submit">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
