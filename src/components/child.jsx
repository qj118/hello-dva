import React from "react";
import { withRouter } from "dva/router";

class Child extends React.Component {

  handleToIndex = () => {
    // console.log(this.props); // 没有 history 属性需要使用 withRouter 包裹
    this.props.history.push("/");
  }

  render() {
    return(
      <div>
        <div>I'm Common Components.</div>
        <button onClick={this.handleToIndex}>首页_Child</button>
      </div>
    );
  }
}

export default withRouter(Child);
