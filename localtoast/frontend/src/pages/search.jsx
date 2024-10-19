import Form from 'react-bootstrap/Form';

function SearchBar() {
  return (
    <main className="search">
      <div id='search-container' className='mt-2'>
        <Form>
          <Form.Group className="" controlId="search">
            <Form.Control className='search' type="text" placeholder="City/ZIP Code" aria-label='Search'/>
          </Form.Group>
        </Form>
      </div>
    </main>
  );
}

export default SearchBar;