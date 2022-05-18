import { Button, Form, Input, message, notification, PageHeader, Select, Steps } from 'antd'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import NewsEditor from '../../../components/news-manage/NewsEditor'
import style from './News.module.css'

const {Step} = Steps
const {Option} = Select

export default function NewsUpdate() {
  const [current, setcurrent] = useState(0)
  const [categoryList, setcategoryList] = useState([])
  const [formInfo, setFormInfo] = useState({})
  const [content, setcontent] = useState("")
  const navigate = useNavigate()

//   const User = JSON.parse(localStorage.getItem("token"))
  const handleNext = () =>{
    if(current===0){
      NewsForm.current.validateFields().then(res=>{
        // console.log(res)
        setFormInfo(res)
        setcurrent(current+1)
      }).catch(error=>{
        console.log(error)
      })
    }else{
      if(content==="" || content.trim()==="<p></p>"){
        message.error("新闻内容不能为空")
      }else{
        setcurrent(current+1)
      }
    } 
}

  const handlePrev = () =>{
    setcurrent(current-1)
  }

  const NewsForm = useRef(null)
//   const match = useMatch("/news-manage/preview/:id")
//   console.log(match)

  useEffect(()=>{
    axios.get("/categories").then(res=>{
      setcategoryList(res.data)
    })
  })

  const match = useMatch("/news-manage/update/:id")

  useEffect(() => {
    axios.get(`/news/${match.params.id}?_expand=category&_expand=role`).then(res=>{
        // setNewsInfo(res.data)

        //content, 
        // formInfo
        let {title, categoryId, content} = res.data
        NewsForm.current.setFieldsValue({
            title,
            categoryId
        })
        setcontent(content)
    })
    }, [match])

  const handleSave = (auditState) =>{
    axios.patch(`/news/${match.params.id}`,{
      ...formInfo,
      "content":content,
      "auditState":auditState,
    }).then(res=>{
        navigate(auditState===0?"/news-manage/draft":"/audit-manage/list", {replace:true})

        notification.info({
          message:"通知",
          description:
            `您可以到${auditState===0?'草稿箱':'审核列表'}中查看您的新闻`,
            placement:"bottomright"
        })
    })
  }

  return (
    <div>
      <PageHeader
      className="site-page-header"
      title="更新新闻"
      onBack={() => window.history.back()}
      subTitle="This is a subtitle"
      />

      <Steps current={current}>
        <Step title="基本信息" description="新闻标题，新闻分类" />
        <Step title="新闻内容" description="新闻主题内容" />
        <Step title="新闻提交" description="保存草稿或者提交审核" />
      </Steps>

      <div style={{marginTop:"50px"}}>
        <div className={current===0?'':style.active}>     
        <Form
        name="basic"
        ref={NewsForm}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label= "新闻标题"
          name= "title"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input   />
        </Form.Item>

        <Form.Item
          label= "新闻分类"
          name= "categoryId"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select>
            {
              categoryList.map(item=>
                <Option value={item.id} key={item.id}>{item.title}
                </Option>  
                )
            }
          </Select>
        </Form.Item>

      </Form>
        
        </div>
        <div className={current===1?'':style.active}>
          <NewsEditor getContent={(value)=>{
            // console.log(value)
            setcontent(value)
          }} content={content}></NewsEditor>
        </div>
        <div className={current===2?'':style.active}></div>
      </div>

      <div style={{marginTop:"50px"}}>
        {
          current===2&& <span>
            <Button type="primary" onClick={()=>handleSave(0)}>保存草稿箱</Button>
            <Button danger onClick={()=>handleSave(1)}>提交审核</Button>
          </span>
        }
        {
        current<2 && <Button type="primary" onClick={handleNext}>下一步</Button>
        }
        {
        current>0 && <Button onClick={handlePrev}>上一步</Button>
        }
      </div>
    </div>
  )
}
