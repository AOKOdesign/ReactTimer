var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
      </div>
    );
  }
});

module.exports = Timer;
