import * as apis from "../services/example"

export default {
  namespace: "indexTest",
  state: {
    name: "demon",
    cnodeData: [],
  },
  effects: {
    *setNameAsync({ payload }, { put, call }){
      // put 传的是 action，即调用的 reducer 中的方法
      yield put({
        type: "setName", // 直接写 reducer 的名称即可
        data: {
          name: payload.name
        }
      });
    },
    *testCNode({ payload }, { put, call }){
      let res = yield call(apis.testCNode);
      // console.log(res);
      if(res.data) {
        yield put({
          type: "setCNodeDataList",
          payload: res.data.data // 通过 log 查看想要的属性值
        });
      }
    },
    *testMock({ payload }, { put, call }){
      let res = yield call(apis.testMock);
      console.log(res);
    }
  },
  reducers: {
    // payload 是组件 dispatch 中所有的参数
    setName(state, payload){
      // console.log(payload);
      // 不可以在原 state 上进行修改，而是返回一个新的 state
      let _state = JSON.parse(JSON.stringify(state));
      _state.name = payload.data.name;
      return _state;
    },
    setCNodeDataList(state, { payload }){
      let _state = JSON.parse(JSON.stringify(state));
      _state.cnodeData = payload;
      return _state;
    }
  },
  subscriptions: {
    testSubscribe({ dispatch, history }){
      // 每个页面都执行
      console.log(history);
      history.listen(({pathname}) => {
        if(pathname === "/user"){
          // 用户页执行
          console.log("用户页");
        }
      })
    }
  }
}
