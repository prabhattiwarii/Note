import React from 'react'
import Note from '../note/Note'

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div>
      <Note showAlert={showAlert} />
    </div>
  )
}

export default Home