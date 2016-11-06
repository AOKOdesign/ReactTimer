var React = require('react');


var TimerControls = React.createClass({
  render: function () {
    return (
      <div className="timer-controls">
          <button className="button primary">Start</button>
          <button className="button hollow">Clear</button>
      </div>
    );
  }
});

module.exports = TimerControls;
