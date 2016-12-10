var React = require('react');
var {Link, IndexLink} = require('react-router');


// var Nav = React.createClass({
//   render: function() {
//     return(
//     <div>
//       <h2>Nav component</h2>
//       <ul>
//       <li><IndexLink to="/" activeClassName = "active" activeStyle = {{fontWeight: 'bold', color: 'green'}} >Get Weather</IndexLink></li>
//       <li><Link to="/about" activeClassName = "active" activeStyle = {{fontWeight: 'bold', color: 'orange'}} >About</Link></li>
//       <li><Link to="/examples" activeClassName = "active" activeStyle = {{fontWeight: 'bold', color: 'grey'}} >Examples</Link></li>
//     </ul>
//     </div>
//     );
//   }
// });


var Nav = (props) => {
  return(
  <div>
    <h2>Nav component</h2>
    <ul>
    <li><IndexLink to="/" activeClassName = "active" activeStyle = {{fontWeight: 'bold', color: 'green'}} >Get Weather</IndexLink></li>
    <li><Link to="/about" activeClassName = "active" activeStyle = {{fontWeight: 'bold', color: 'orange'}} >About</Link></li>
    <li><Link to="/examples" activeClassName = "active" activeStyle = {{fontWeight: 'bold', color: 'grey'}} >Examples</Link></li>
  </ul>
  </div>
  );
}

module.exports = Nav;
