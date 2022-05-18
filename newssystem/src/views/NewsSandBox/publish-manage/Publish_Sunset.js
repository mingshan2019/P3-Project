import { Button } from 'antd'
import NewsPublish from '../../../components/publish-manage/NewsPublish'
import usePublish from './usePublish'

export default function Sunset() {
  // 1 == 待发布
  const {dataSource,handleDelete} = usePublish(3)
  
  return (
    <div>
      <NewsPublish dataSource={dataSource} button={(id)=><Button danger onClick={()=>handleDelete(id)}>删除</Button>}></NewsPublish>
    </div>
  )
}
