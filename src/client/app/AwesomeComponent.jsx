import React from 'react';

import Button from 'react-bootstrap/lib/Button';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);   
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Spit Facts : <span>{this.state.likesCount}</span>
        <div><Button bsStyle="primary" onClick={this.onLike}>Hey Vsauce</Button></div>
      </div>
    );
  }

}

export default AwesomeComponent;