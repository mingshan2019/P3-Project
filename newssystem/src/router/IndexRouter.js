import React,{ useEffect } from 'react'
import {HashRouter, useRoutes, useNavigate} from 'react-router-dom'


// import Login from '../views/Login/Login'
// import NewsSandBox from '../views/newsSandbox/NewsSandBox'


function MRouter() {
    const element = useRoutes([
        {
            path:"/*",
            element:<AuthComponent>
                        {LazyLoad("NewsSandBox")}
                    </AuthComponent>
        },
        {
            path:"*",
            element:<AuthComponent>
                        {LazyLoad("NewsSandBox")}
                    </AuthComponent>
        },
        {
            path:"/login",
            element: LazyLoad("Login")
        },
        {
            path:"/news",
            element: LazyLoad("News")
        },
        {
            path:"/detail/:id",
            element: LazyLoad("Detail")
        }
    ])
    return (
        element
    )
}

export default function IndexRouter(){
    return (
        <HashRouter>
            <MRouter></MRouter>
        </HashRouter>
      )
}

const LazyLoad = (path) =>{
    const Comp = React.lazy(()=>(path.charAt(0)!=='L'&&!path.endsWith('Box'))?import(`../views/news/${path}`):import(`../views/${path}/${path}`))
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Comp/>
        </React.Suspense>
    )
}

function AuthComponent({children}){
    const isLogin = localStorage.getItem("token")
    return isLogin?children:<Redirect to = "/login" />
}

function Redirect({to}) {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate(to, {replace:true})
    })
    return null
}
