import { Link, Outlet, useParams } from "react-router-dom";

function Product() {
  let params = useParams();
  console.log(params.name);
  return (
    <div>
      <h1> Product Management</h1>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/product/all"
          >
            ALL
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product/new">
            New
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product/other">
            Other
          </Link>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Product;
