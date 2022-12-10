import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useCallback } from "react";
import "./Profile.css";
import { toggleCheckbox } from "../store/profile/actions";
import { getProfile } from "../store/profile/selectors";
import { logout } from "../services/firebase";

export const Profile = () => {
  const state = useSelector(getProfile, shallowEqual);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(toggleCheckbox);
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div className="profile">
      <h4>Profile</h4>
      <div>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <p>Show user name: </p>
      <input
        type="checkbox"
        checked={state.showName}
        value={state.showName}
        onChange={setShowName}
      />
      {state.showName && <span>{state.name}</span>}
    </div>
  );
};
