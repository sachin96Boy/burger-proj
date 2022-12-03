import { useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxilary from "../Auxilary";
import useError from "./useError";

const WithErrorHandler = (WrapedComponent, axios) => {
    return (props) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [error, handleError, clearError] = useError();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
        const reqInterceptor = axios.interceptors.request.use((req) => {
            clearError();
            return req;
        });
        const resInterceptor = axios.interceptors.response.use(
            (res) => res,
            (error) => {
            handleError(error);
            }
        );
        return () => {
            axios.interceptors.request.eject(reqInterceptor);
            axios.interceptors.response.eject(resInterceptor);
        };
        }, [handleError, clearError]);
        return (
        <Auxilary>
            <Modal show={error} modalClosed={clearError}>
            {error ? error.message : null}
            </Modal>
            <WrapedComponent {...props} />
        </Auxilary>
        );
    };
};

export default WithErrorHandler;
