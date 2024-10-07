import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { setUserFromLocalStorage } from "../redux/authSlice";

const ProtectedRoute = ({ element }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useLayoutEffect(() => {
    dispatch(setUserFromLocalStorage());
  }, [dispatch]);

  return user ? <div>{element}</div> : <Navigate to="/session/new" replace />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.any,
};

export default ProtectedRoute;
