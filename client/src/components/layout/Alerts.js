import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => {
      return (
        <div key={alert.id} className="card-panel  red darken-1">
          <i className="small material-icons">add</i>
          {alert.msg}
        </div>
      );
    })
  );
};

export default Alerts;
