import React, { Fragment } from 'react';
import { Link } from 'dva/router';

import Child from "../components/child";

class UserPage extends React.Component{

  handleClick = () => {
    // console.log(this.props); // 查看 props 中的内容
    this.props.history.push("/");
  }

  render(){
    return(
      <Fragment>
        <div>I'm User Page.</div>
        <Link to="/">首页</Link><br/>
        <button onClick={this.handleClick}>首页</button><br/>
        <Child/>
      </Fragment>
    );
  }
}

export default UserPage;
