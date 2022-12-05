/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Header extends React.Component {
  render() {
    const headerStyle = {
      padding: '20px 0',
      lineHeight: '1.5em',
    };

    return (
      <div>
        <header style={headerStyle}>
          <h1
            style={{
              fontSize: '6rem',
              fontWeight: '600',
              marginBottom: '2rem',
              lineHeight: '1em',
              color: '#ececec',
              textTransform: 'lowercase',
              textAlign: 'center',
            }}
          >
            todos
          </h1>
        </header>
      </div>

    );
  }
}

export default Header;