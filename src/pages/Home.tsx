const Home = () => {
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
              />
              <label htmlFor="floatingInputGroup1">Enter the url here...</label>
            </div>
            <button className="input-group-text btn btn-primary">
              Short URL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
