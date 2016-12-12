var React = require('react');


var WeatherForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();

    var l = this.refs.location.value;
    if (l.length > 0 ) {
       this.refs.location.value = "";
       this.props.onSearch(l);
    }
  },

  render: function() {
    return(
      <div>

      <form onSubmit={this.onFormSubmit}>
        <div>
        <input type="search" placeholder = "Enter a city" ref="location"></input>
      </div>
      <div>
        <button className = "button expanded hollow">Submit</button>
      </div>
      </form>
    </div>
    );
  }
});

module.exports = WeatherForm;
