import {Link} from "react-router-dom";
function Navbar() {
  const total = 25000; //No se usa por ahora
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🍕 Mamma Mía!</Link>
        <div className="d-flex gap-2 me-auto">
          <Link className="btn btn-outline-light" to="/">🍕 Home</Link>
          <Link className="btn btn-outline-light" to="/pizza/p001">🍕 Pizza del mes</Link>
          {token ? (
            <>
              <Link className="btn btn-outline-light" to="/profile">🔓 Profile</Link>
              <Link className="btn btn-outline-light" to="/login">🔒 Logout</Link>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-light" to="/login">🔐 Login</Link>
              <Link className="btn btn-outline-light" to="/register">🔐 Register</Link>
            </>
          )}
          </div>
          <div className="d-flex gap-2">
          <Link className="btn btn-success" to="/cart">
            🛒 Carrito de compras
          </Link>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
