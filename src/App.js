// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import Home from './components/Home';
// // // import BusList from './components/BusList';
// // // import SeatSelection from './components/SeatSelection';
// // // import Payment from './components/Payment';
// // // import Navbar from './components/Navbar'; // Importing the Navbar component
// // // import TrendingOffers from './components/TrendingOffers'; // Importing TrendingOffers component
// // // import './components/TrendingOffers.css'; // Importing TrendingOffers styles
// // // import './App.css'; // Importing the App.css
// // // import Chatbot from './components/Chatbot'
// // // import './components/Chatbot.css'


// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div className="App">
// // //         <Navbar /> {/* Adding the Navbar */}
// // //         <Routes>
// // //           <Route path="/" element={<Home />} />
// // //           <Route path="/buslist" element={<BusList />} />
// // //           <Route path="/seatselection" element={<SeatSelection />} />
// // //           <Route path="/payment" element={<Payment />} />
// // //           <Route path="/trendingoffers" element={<TrendingOffers />} /> {/* Adding TrendingOffers route */}
// // //           <Route path="/chatbot" element={<Chatbot />} />
// // //         </Routes>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from './components/Home';
// // import BusList from './components/BusList';
// // import SeatSelection from './components/SeatSelection';
// // import Payment from './components/Payment';
// // import Navbar from './components/Navbar';
// // import TrendingOffers from './components/TrendingOffers';
// // import Chatbot from './components/Chatbot';  // Import the Chatbot
// // import './App.css'; 

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/buslist" element={<BusList />} />
// //           <Route path="/seatselection" element={<SeatSelection />} />
// //           <Route path="/payment" element={<Payment />} />
// //         </Routes>
// //         <TrendingOffers />
// //         <Chatbot /> {/* Add the Chatbot */}
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home';
// import BusList from './components/BusList';
// import SeatSelection from './components/SeatSelection';
// import Payment from './components/Payment';
// import Navbar from './components/Navbar';
// import TrendingOffers from './components/TrendingOffers';
// import Chatbot from './components/Chatbot';  
// import Login from './components/Login';  // Importing Login component
// import './App.css'; 

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('username');
//     if (loggedInUser) {
//       setIsLoggedIn(true); // If user is logged in already, skip login
//     }
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         {isLoggedIn ? (
//           <>
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/buslist" element={<BusList />} />
//               <Route path="/seatselection" element={<SeatSelection />} />
//               <Route path="/payment" element={<Payment />} />
//             </Routes>
//             <TrendingOffers />
//             <Chatbot />
//           </>
//         ) : (
//           <Routes>
//             <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//             <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect all routes to login if not authenticated */}
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BusList from './components/BusList';
import SeatSelection from './components/SeatSelection';
import Payment from './components/Payment';
import Navbar from './components/Navbar';
import TrendingOffers from './components/TrendingOffers';
import Chatbot from './components/Chatbot';
import Login from './components/Login'; // Import the Login component
import './App.css'; 

function App() {
  const [user, setUser] = useState(null); // Store user details after login

  return (
    <Router>
      <div className="App">
        {user ? ( // Check if user is logged in
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buslist" element={<BusList />} />
              <Route path="/seatselection" element={<SeatSelection />} />
              <Route path="/payment" element={<Payment user={user} />} />
            </Routes>
            <TrendingOffers />
            <Chatbot />
          </>
        ) : (
          <Login setUser={setUser} /> // Show Login page if not logged in
        )}
      </div>
    </Router>
  );
}

export default App;
