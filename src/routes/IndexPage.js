import React from 'react';
import { connect } from "dva";

class IndexPage extends React.Component{

  componentDidMount() {
  }

  handleSetName = () => {
    // dispatch 可以从 props 中获取到
    const { dispatch } = this.props;
    dispatch({
      type: 'indexTest/setName', // namespace/reducer_name
      data: {
        name: 'Fei',
      }
    });
  }

  handleSetNameAsync = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'indexTest/setNameAsync',
      payload: {
        name: 'Jia',
      }
    });
  }

  handleTestCNode = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "indexTest/testCNode",
    });
  }

  handleTestMock = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "indexTest/testMock",
    });
  }

  render(){
    //console.log(this.props);
    const { name, cnodeData } = this.props.indexTest;
    return(
      <div>
        <div>I'm Index.</div>
        <div>User: {name}</div>
        <button onClick={this.handleSetName}>Set Username</button>
        <button onClick={this.handleSetNameAsync}>Set Username Async</button>
        <button onClick={this.handleTestCNode}>Test CNode</button>
        <button onClick={this.handleTestMock}>Test Mock</button>
        <ul>
        {
          cnodeData.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))
        }
        </ul>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(state); // state 中封装了所有的 models
//   return state.indexTest;
// }
// export default connect(mapStateToProps)(IndexPage);

// 将 models 绑定到组件上，这样可以在组件的 props 中看到名为 indexTest 的属性， indexTest 来自于命名空间
export default connect(({indexTest}) => ({ indexTest }))(IndexPage);
