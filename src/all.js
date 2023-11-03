import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
function All() {
  const navigate = useNavigate();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  let [text, setText] = useState("");

  console.log(searchParams.get("id"));

  useEffect(() => {
    setText(searchParams.get("q"));
  }, []);

  return (
    <>
      <h3>All Product</h3>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setSearchParams({ q: text });
        }}
      >
        Search
      </button>
    </>
  );
}

export default All;
