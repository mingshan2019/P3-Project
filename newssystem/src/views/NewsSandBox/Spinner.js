//  !!! This Approach does not work well !!!


// import React from 'react'
// import NewsRouter from '../../components/sandbox/NewsRouter'

// import {Spin} from 'antd'
// import { connect } from 'react-redux'


// function Spinner(props) {
//   return (
//     <Spin size="large" spinning={props.isLoading}>
//       <NewsRouter></NewsRouter>
//     </Spin>
//   )
// }

// const mapStateToProps = ({LoadingReducer:{isLoading}})=>({
//     isLoading
//   })
  
// export default connect(mapStateToProps)(Spinner)