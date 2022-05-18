import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate, useRoutes} from 'react-router-dom'
import {Spin} from 'antd'

export default function NewsRouter() {

    const [BackRouteList, setBackRouteList] = useState([])

    useEffect(()=>{
        Promise.all([axios.get("/rights"), axios.get("/children")]).then(res=>{
            // setBankRouteList([...res[0].data, res[1].data])})
            // console.log(res)
            setBackRouteList([...res[0].data,...res[1].data])
            // console.log([...res[0].data,...res[1].data])
    })},[])

    function Redirect({to}) {
        const navigate = useNavigate()
        useEffect(()=>{
            navigate(to, {replace:true})
        })
        return null
      }

    
    const LazyLoad = (path) =>{
        const Comp = React.lazy(()=>
      (path.charAt(0)==='U')?import(`../../views/NewsSandBox/user-manage/${path}`):
      (path.charAt(0)==='R')?import(`../../views/NewsSandBox/right-manage/${path}`):
      (path.startsWith('New'))?import(`../../views/NewsSandBox/news-manage/${path}`):
      (path.charAt(0)==='A')?import(`../../views/NewsSandBox/audit-manage/${path}`):
      (path.charAt(0)==='P')?import(`../../views/NewsSandBox/publish-manage/${path}`):
      import(`../../views/NewsSandBox/${path}/${path}`)
    )
        return (
            <React.Suspense fallback={
            <Spin size="large"><>Loading...</></Spin>}>
                <Comp/>
            </React.Suspense>
        )
    }

    // const elements = useRoutes([
    //     {
    //       path:"/home",
    //       element:LazyLoad("Home")
    //     },
    //     {
    //       path:"/user-manage/list",
    //       element:LazyLoad("UserList")
    //     },
    //     {
    //       path:"/right-manage/role/list",
    //       element:LazyLoad("RoleList")
    //     },
    //     {
    //       path:"/right-manage/right/list",
    //       element:LazyLoad("RightList")
    //     },
    //     { path:"/news-manage/add",
    //       element:LazyLoad("NewsAdd")
    //     },
    //     { path:"/news-manage/draft",
    //       element:LazyLoad("NewsDraft")
    //     },
    //     { path:"/news-manage/category",
    //       element:LazyLoad("NewsCategory")
    //     },
    //     { path:"/audit-manage/audit",
    //       element:LazyLoad("Audit")
    //     },
    //     { path:"/audit-manage/list",
    //       element:LazyLoad("AuditList")
    //     },
    //     { path:"/publish-manage/unpublished",
    //       element:LazyLoad("Published_Not")
    //     },
    //     { path:"/publish-manage/published",
    //       element:LazyLoad("Published")
    //     },
    //     { path:"/publish-manage/sunset",
    //       element:LazyLoad("Publish_Sunset")
    //     },
    //     {
    //       path:"/",
    //       element: <Redirect to = "/home" />
    //     },
    //     {
    //       path:"*",
    //       element: LazyLoad("NoPermission")
    //     }
    //   ])

    const LocalRouterMap = {
        "/home":"Home",
        "/user-manage/list":"UserList",
        "/right-manage/role/list":"RoleList",
        "/right-manage/right/list":"RightList",
        "/news-manage/add":"NewsAdd",
        "/news-manage/draft":"NewsDraft",
        "/news-manage/category":"NewsCategory",
        "/news-manage/preview/:id":"NewsPreview",
        "/news-manage/update/:id":"NewsUpdate",
        "/audit-manage/audit":"Audit",
        "/audit-manage/list":"AuditList",
        "/publish-manage/unpublished":"Published_Not",
        "/publish-manage/published":"Published",
        "/publish-manage/sunset":"Publish_Sunset",
        "*":"NoPermission"
    } 

    const {role:{rights}} = JSON.parse(localStorage.getItem("token"))

    const checkRoute = (item) =>{
        return LocalRouterMap[item.key] && (item.pagepermisson || item.routepermisson)
    }

    const checkUserPermission = (item) =>{
        return rights.includes(item.key)
    }

    let RouteList = BackRouteList.map(item=>{
        let obj = {}
        obj['path'] = item.key
        obj['element'] = LazyLoad((checkRoute(item) && checkUserPermission(item))?LocalRouterMap[item.key]:"NoPermission")
        return obj
        })
    
    RouteList?.push({path:"/", element: <Redirect to = "/home" />})
    
    const elements = useRoutes(RouteList)
    
    return elements

}



