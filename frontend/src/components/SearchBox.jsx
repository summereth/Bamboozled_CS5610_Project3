import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        placeholder="Search quiz..."
        value={keyword}
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      />
      <Button type="submit" variant="outline-dark" className="mx-2 p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
