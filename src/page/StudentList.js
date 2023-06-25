import React from 'react';
import List from '../components/list';
import TopBar from '../components/topBar';
import Footer from '../components/footer';

const StudentList = () => {

  return (
    <section>
     <TopBar />
        <List/>
      <Footer/>
    </section>
  )
}

export default StudentList;