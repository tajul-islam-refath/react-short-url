import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../provider/Provider";
import { URLINTERFACE } from "../model/URLInterface";
const ListPage = () => {
  const store = useContext<any>(Context);

  return (
    <div className="py-3">
      <h1>List Of Short Urls</h1>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">UrlId</th>
              <th scope="col">Short Url</th>
              <th scope="col">Orginal Url</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {store.state.map((res: URLINTERFACE) => (
              <tr>
                <th scope="row">{res.urlId}</th>
                <td>
                  <Link to={`/${res.urlId}`}>{res.shortUrl}</Link>
                </td>
                <td>{res.origUrl}</td>
                <td className="row">
                  <Link
                    to={`/update/${res.urlId}`}
                    className="btn btn-primary btn-sm">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      store.dispatch({ type: "REMOVE_DATA", id: res.urlId })
                    }>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPage;
