import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CreateProduct, Login, PublicProducts, UpdateProduct } from './components/organism'
import { useState } from 'react';

export const isAdmin = true;

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicProducts
              id=""
              name=""
              description=""
              image=""
              price={0}
              quantity={0}
              isAdmin={isAdmin}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
      </Routes>
    </Router>
  );
}

export default App;