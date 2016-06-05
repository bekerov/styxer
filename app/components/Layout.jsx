module.exports = (function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Styxer = require('./Styxer');

    class Layout extends React.Component {
        render () {
            return (
                <div>
                    <h1>Where is Styx?</h1>
                    <p>Our colleague styx enjoy travelling. Sometimes we don't know where is he. If you know where is Styx now, let us know, please.</p>
                    <Styxer />
                </div>

            )
        }
    }

    window.onload = function () {
        ReactDOM.render(<Layout />, document.getElementById('container'));
    };
})();
