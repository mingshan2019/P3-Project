import { Descriptions, PageHeader } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { HeartTwoTone } from '@ant-design/icons'
import { useMatch } from 'react-router-dom'

export default function Detail() {
    const [newsInfo, setNewsInfo] = useState(null)
    const [starStatus, setstarStatus] = useState(false)
    const match = useMatch("/detail/:id")
    useEffect(() => {
      axios.get(`/news/${match.params.id}?_expand=category&_expand=role`).then(res=>{
          setNewsInfo({
              ...res.data,
              view:res.data.view+1
          })

          //同步后端
          return res.data
      }).then(res=>{
          axios.patch(`/news/${match.params.id}`,{
              view: res.view + 1
          })
      })
    }, [match.params.id])    
    const handleStar = () =>{
        if (!starStatus){
            setNewsInfo({
                ...newsInfo,
                star:newsInfo.star + 1
            })
    
            axios.patch(`/news/${match.params.id}`,{
                view: newsInfo.star + 1
            })
            setstarStatus(true)
        }
    }
  return (
    <div>
        {
            newsInfo && <div>
                <PageHeader
                    onBack={() => window.history.back()}
                    title={newsInfo?.title}
                    subTitle={
                        <div>
                            {newsInfo.category.title}
                            <HeartTwoTone twoToneColor="#eb2f96" onClick={()=>handleStar()}/>
                        </div>
                        }
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="创建者">{newsInfo.author}</Descriptions.Item>
                        <Descriptions.Item label="发布时间">{newsInfo.publishTime?moment(newsInfo.createTime).format("YYYY/MM/DD HH:mm:ss"):"-"}</Descriptions.Item>
                        <Descriptions.Item label="区域">{newsInfo.region}</Descriptions.Item>
                        <Descriptions.Item label="访问数量">{newsInfo.view}</Descriptions.Item>
                        <Descriptions.Item label="点赞数量">{newsInfo.star}</Descriptions.Item>
                        <Descriptions.Item label="评论数量">0</Descriptions.Item>
                    </Descriptions>
                </PageHeader>

                <div dangerouslySetInnerHTML={{
                    __html: newsInfo.content
                }} style={{
                    margin:"0 24px",
                    border:"2px solid BlueViolet"}}>
                </div>
            </div> 
        }
    </div>
  )
}
