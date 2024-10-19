import Form from 'react-bootstrap/Form';

function SearchBar() {
  return (
    <div className="mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="search">
          <Form.Control type="text" placeholder="ZIP???" aria-label='Search'/>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchBar;