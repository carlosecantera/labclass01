import React from 'react';

class Beast1 extends React.Component {
  constructor(props) {
    super(props);

  }

render() {
  return(
    <div id="Beast1">
      <h2>(this.props.title)</h2>
      <img src={this.props.src} alt={this.props.alt} title={this.props.title}/>
      <p>{this.props.description}</p>
    </div>
  )
 }
}
export default Beast1;
