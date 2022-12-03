import React, { useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxilary from "../Auxilary";

function WithErrorHandler(WrapedComponent, axios) {
  const [error, setError] = React.useState(null);
  useEffect(() => {
    axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });
    axios.interceptors.response.use(
      (res) => res,
      (error) => {
        setError(error);
      }
    );
  }, [axios.interceptors.request, axios.interceptors.response]);
  return (props) => {
    <Auxilary>
      <Modal show={error} clicked={() => setError(null)}>
        {error ? error.message : null}
      </Modal>
      <WrapedComponent {...props} />;
    </Auxilary>;
  };
}

export default WithErrorHandler;
