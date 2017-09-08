'use strict';

function formatName(user) {
  return user.firstName + ' ' + user.lastName ;
}

var user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

var element = React.createElement(
  'h1',
  null,
  'Hello, ',
  formatName(user),
  '!'
);

ReactDOM.render(element, document.getElementById('root'));