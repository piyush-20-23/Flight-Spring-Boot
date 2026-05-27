import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ListFlights from './components/list-flights'
import AddFlight from './components/add-flight'
import FindCode from './components/find-code'
import FindRoute from './components/find-route'
import FindPrice from './components/find-price'

export default function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#455278', padding: '0 24px', minHeight: '56px' }}>
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2" style={{ fontWeight: 500 }}>
            Flight App
          </Link>

          <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
            <li className="nav-item">
              <Link to="/list" className="nav-link px-4 py-2 rounded" style={{ border: '1px solid rgba(255, 255, 255, 0.76)' }}>List</Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link px-4 py-2 rounded" style={{ border: '1px solid rgba(255, 255, 255, 0.75)' }}>Add</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle px-4 py-2 rounded" id="navbardrop" data-bs-toggle="dropdown" style={{ border: '1px solid rgba(255, 255, 255, 0.75)', cursor: 'pointer' }}>
                Search By
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <Link to="/code" className="dropdown-item">Code</Link>
                <Link to="/route" className="dropdown-item">Route</Link>
                <Link to="/price" className="dropdown-item">Price</Link>
              </div>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ListFlights />} />
          <Route path="/list" element={<ListFlights />} />
          <Route path="/add" element={<AddFlight />} />
          <Route path="/code" element={<FindCode />} />
          <Route path="/route" element={<FindRoute />} />
          <Route path="/price" element={<FindPrice />} />
          <Route path="*" element={<div className="alert alert-danger mt-3">Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
