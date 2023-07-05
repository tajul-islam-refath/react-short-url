import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { URLINTERFACE } from "../model/URLInterface";
import { Context } from "../provider/Provider";
import validateUrl from "../utils/util";

const Update = () => {
  const store = useContext<any>(Context);
  const [origUrl, setOrigUrl] = useState<string>("");
  const params = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    const findData = store.state.find(
      (res: URLINTERFACE) => res.urlId === params.id
    );
    if (findData) {
      setOrigUrl(findData.origUrl);
    }
  }, [params.id]);

  const updateUrl = () => {
    if (validateUrl(origUrl)) {
      store.dispatch({
        type: "UPDATE_DATA",
        payload: {
          id: params.id,
          url: origUrl,
        },
      });
      navigation("/list");
    } else {
      alert("Invalid URL!");
    }
  };

  return (
    <div>
      <div className="card-container mt-4">
        <div className="card card-body">
          <h1 className="text-black-50 text-center">Update Url</h1>
          <div className="input-group mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Enter the url here..."
                onChange={(event: any) => setOrigUrl(event.target.value)}
                value={origUrl}
              />
              <label htmlFor="floatingInputGroup1">Enter the url here...</label>
            </div>
            <button
              className="input-group-text btn btn-primary"
              onClick={() => updateUrl()}>
              Update URL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
