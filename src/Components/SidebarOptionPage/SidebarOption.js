import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from '../../Config/firebase';

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory(); // user를 특정 page로 redirect시킬 수 있음

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');
    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
