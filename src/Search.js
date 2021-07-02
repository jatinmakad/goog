import ReactLink, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { useHistory } from "react-router-dom";
import "./search.css";
import { useStateValue } from "./StateProvider";
import {actionTypes} from "./reducer";


function Search({ hide }) {
  const [{},dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory(); // it push to search page when we press search buttton
  const search = (e) => {
    e.preventDefault();
    history.push("./search");
    dispatch({
    type : actionTypes.SET_SEARCH_TERM,
    term :input
    })
  };

  return (
    <form>
      <div className="search_input">
        <SearchIcon />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="search_input_main"
        />
        <MicIcon />
      </div>

      {hide ? (
        <div className="btns">
          <button type="submit" onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn"> I'am feeling good</button>
        </div>
      ) : (
        <div className="btns">
          <button  type="submit" onClick={search} className="btn_hide">
            Google Search
          </button>
          <button className="btn_hide"> I'am feeling good</button>
        </div>
      )}
    </form>
  );
}

export default Search;
