var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  render: function () {
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock/>
        <TimerControls/>
      </div>
    );
  }
});

module.exports = Timer;
