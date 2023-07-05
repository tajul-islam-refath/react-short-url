import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URLINTERFACE } from "../model/URLInterface";
import { Context } from "../provider/Provider";

const Redirect = () => {
  const store = useContext<any>(Context);
  const params = useParams();

  useEffect(() => {
    const findData: URLINTERFACE = store.state.find(
      (res: URLINTERFACE) => res.urlId === params.id
    );
    if (findData) {
      window.location.href = findData.origUrl;
    }
  }, [params.id]);
  return <div>Redirect....</div>;
};

export default Redirect;
