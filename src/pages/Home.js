import React, { useState } from 'react'
import MyBadge from '../components/MyBadge'
import BookList from '../components/BookList'
import Books from '../data/fantasy.json'
import SearchBar from '../components/SearchBar'

const Home = () => {

  const [FilteredBooks, setFilteredBooks] = useState(Books)

  return (
    <>
      <MyBadge color={"primary"} str={"Badge"} />
      <SearchBar books={Books} setBooks={setFilteredBooks} />
      <BookList books={FilteredBooks} />
    </>
  )
}

export default Home