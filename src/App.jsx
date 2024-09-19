import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './Components/Home';
import Trips from './Components/Trips';
import TripDetails from './Components/TripDetails';
import Book from './Components/Book';
import Itinerary from './Components/Itinerary';
import Accommodation from './Components/Accomodation';
import Expenses from './Components/Expenses';
import Transportation from './Components/Transportation';
import Packinglist from './Components/Packinglist';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ContactUs from './Components/ContactUs';
import MainLayout from './Layout/MainLayout';
import Triphistory from './Components/Triphistory';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='trips'>
        <Route index element={<Trips />} />
        <Route path=':sName' element={<TripDetails />} />
        <Route path='book' element={<Book />} />
      </Route>
      <Route path='itinerary' element={<Itinerary />} />
      <Route path='transportation' element={<Transportation />} />
      <Route path='expenses' element={<Expenses />} />
      <Route path='accommodation' element={<Accommodation />} />
      <Route path='packing' element={<Packinglist />} />
      <Route path='contactUs' element={<ContactUs />} />
      <Route path='triphistory' element={<Triphistory/>}/>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
