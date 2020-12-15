import React from 'react';
import logo from '../../logo.svg';
import { withRouter } from 'react-router-dom';
import './index.scss';

function ErrorPage(props) {
  return (
    <div className="not-found">
      <img className="loader-top-img" src={logo} alt="Project" />
    </div>
  );
}

export default withRouter(ErrorPage);
