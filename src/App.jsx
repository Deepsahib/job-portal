import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Jobs from './components/Jobs'
import Jobdescription from './components/Jobdescription'
import ProfileUpdate from './components/Profile'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/description/:id" element={<Jobdescription />} />
        <Route path="/profile" element={<ProfileUpdate/>} />
      </Routes>
  )
}

export default App