import { useState, useContext } from "react";
import shortid from "shortid";
import { URLINTERFACE } from "../model/URLInterface";
import { Context } from "../provider/Provider";
import validateUrl from "../utils/util";

const Home = () => {
  const [longUrl, setLongUrl] = useState<string>("");
  const [result, setResult] = useState<URLINTERFACE | null>(null);
  const store = useContext<any>(Context);

  const generateShortUrl = () => {
    if (validateUrl(longUrl)) {
      let urlId = shortid.generate();
      let shortUrl = `${window.location.origin}/${urlId}`;
      const data: URLINTERFACE = {
        urlId,
        origUrl: longUrl,
        shortUrl,
      };

      store.dispatch({ type: "ADD_DATA", payload: data });
      setResult(data);
    } else {
      alert("Invalid URL!");
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Copy URL successfully");
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
        alert("Failed to copy URL to clipboard");
      });
  };

  return (
    <div className="home">
      <h1 className="title text-center text-primary text-bold">Short URL</h1>
      <div className="card-container">
        <div className="card card-body">
          <h1 className="text-black-50 text-center">
            Paste the URL to be shortened
          </h1>
          <div className="input-group mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Enter the url here..."
                onChange={(event) => setLongUrl(event.target.value)}
                value={longUrl}
              />
              <label htmlFor="floatingInputGroup1">Enter the url here...</label>
            </div>
            <button
              className="input-group-text btn btn-primary"
              onClick={() => generateShortUrl()}>
              Short URL
            </button>
          </div>
        </div>
      </div>

      {result && (
        <div className="card-container mt-3">
          <div className="card card-body">
            <h1 className="text-black-50 text-center">Shorted URL</h1>
            <div className="input-group mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGroup1"
                  placeholder="Your shorted url"
                  value={result?.shortUrl}
                />
                <label htmlFor="floatingInputGroup1">
                  Enter the url here...
                </label>
              </div>
              <button
                className="input-group-text btn btn-primary"
                onClick={() => handleCopyUrl(result.shortUrl)}>
                Copy URL
              </button>
            </div>
            <p>
              Long URL:{" "}
              <a href={result.origUrl} target="_blank">
                {result.origUrl}
              </a>
            </p>
            <button
              className="btn btn-primary btn-sm w-25"
              onClick={() => {
                setResult(null);
                setLongUrl("");
              }}>
              Clear state
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
