import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import './Profile.css';
import { toggleCheckbox } from '../store/profile/actions';

export const Profile = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(toggleCheckbox);
  }, [dispatch]);

  return (
    <div className="profile">
      <h4>Профиль</h4>
      <p>Отображать имя пользователя: </p>
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
