import { useEffect, useState } from "react";
import Card from "./Card";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import React from 'react'

const App = () =>
{
  const [open, setOpen] = React.useState(false)


  let [search, setSearch] = useState("");

  let [Books, setBooks] = useState([{ bNo: 101, bName: "ds", Price: 200 },
  { bNo: 102, bName: "c++", Price: 800 },
  { bNo: 103, bName: "os", Price: 900 }
  ,{ bNo: 109, bName: "dbms", Price: 700 },
  { bNo: 112, bName: "c", Price: 200 },]);

  let [fBooks, setFBooks] = useState([]);
  let [bNo, setBno] = useState();
  let [bName, setName] = useState();
  let [bPrice, setPrice] = useState();

  const handleSearch = (e) =>
  {
    setSearch(e.target.value);




  }
  useEffect(() =>

    setFBooks(Books.filter((book) => book.bName.includes(search)))

    , [search])


  const removeBook = (bn) =>
  {

    setBooks(Books.filter((book) => book.bNo != bn))

  }
  const handleName = (e) =>
  {
    setName(e.target.value);
  }

  const handlePrice = (e) =>
  {
    setPrice(e.target.value);
  }
  const handleBno = (e) =>
  {
    setBno(e.target.value);
  }

  
  const addBook = () =>
  {
    console.log(bName + " " + bNo + " " + " " + bPrice)

    //let book={bName,bNo,Price:bPrice};

    setBooks([{ bName, bNo, Price: bPrice }, ...Books])


    //
   setOpen(false)






  }



  const updatePrice = (b, p) =>
  {

    alert(b);
    alert(p);

    setBooks(Books.filter((book) =>
    {
      if (book.bNo === b) {
        return book.Price = p;
      } else {
        return book;
      }



    }


    ))




  }



  return (

    <>

      <input type="text" onChange={handleSearch} />

      <button onClick={()=>setOpen(true)}> add</button>
      {


        search ? fBooks.map((book) => <Card bNo={book.bNo} name={book.bName} price={book.Price} removeBook={removeBook} updatePrice={updatePrice} />)

          :

          Books.map((book) => <Card bNo={book.bNo} name={book.bName} price={book.Price} removeBook={removeBook} updatePrice={updatePrice} />)


      }


<Modal
      closeIcon
      open={open}
     
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
       
      <input type="text" placeholder="name" onChange={handleName} />
      <input type="text" placeholder="book no" onChange={handleBno} />
      <input type="text" placeholder="price" onChange={handlePrice} />
      <br />
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={addBook}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
    </>



  );





}


export default App;