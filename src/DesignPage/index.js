import React, { useState, useEffect } from 'react'
import { Layout, Button, Input, Space, Mentions, Modal,Row,Col } from 'antd'
import Nav from '../Nav'
import PhoneItem from '../PhoneFrame/PhoneItem'
import PhoneFrame from '../PhoneFrame'
import Designer from './Designer'
import { SketchPicker } from 'react-color'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { RWebShare } from 'react-web-share'
import Share from '../SharePage'

const { Content, Footer } = Layout

const { Option } = Mentions;
const MOCK_DATA = {
  '@': ['Panny', 'Zoe', 'James'],
  '#': ['Facebook', 'Twitter', 'Youtube', 'Weibo'],
};

function PublishPage(req) {
  return fetch('http://ec2-54-206-113-177.ap-southeast-2.compute.amazonaws.com:5000/PublishPortfolio', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(req)
  })
    .then(data => data.json())
}

export default function Design(props) {

  const [prefix, setPrefix] = useState('@');

  const onSearch = (_, newPrefix) => {
    setPrefix(newPrefix);
  };

  const [link, setLink] = useState(0);
  const [lists, setLists] = useState(['link 1', 'link 2']);
  const listItems = lists.map((item) =>
    <li key="{item}">
      <PhoneItem link={item} />
    </li>
  );
  const [color, setColor] = useState('grey');
  const [img, setImg] = useState(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/1.png")`);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [Email, setEmail] = useState(sessionStorage.getItem("email"));
  const [isModalVisible, setIsModalVisible] = useState(false)

  const url = 'http://connecttree.link/share/'+ id

  const location = useLocation();
  const navigate = useNavigate();


  function handleClick() {
    setLists([...lists, link]);
  }

  function handleClick2() {
    setImg(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/2.png")`);
  }

  function handleClick3() {
    setImg(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/3.jpg")`);
  }

  function handleClick4() {
    setImg(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/4.jpg")`);
  }

  const handleChange = (e) => {
    setName(e.target.value);
    console.log("name is " + name);
  };

  const handlePublish = async e => {
    const res = await PublishPage(
      {
        id,
        Email,
        name,
        color,
        img,
        lists
      });
    if (res.token == "not found") alert("User not found");
  }

  const handlePreview = async e => {
    // console.log("url is "+url)
    // window.location.replace(url)
    handlePublish()
    setIsModalVisible(true)

  }

  useEffect(() => {
    setName(location.state.portfolioName);
    setColor(location.state.color);
    setImg(location.state.img);
    setId(location.state.id);
    setLists(location.state.lists);
    console.log("list === " + lists[1]);
  }, []);



  return (
    <Layout>
      <Nav />
      <Content style={{ width: '100%', display: 'flex' }}>
        <div style={{ paddingLeft: '10%', paddingTop: '1.5%' }}>
          <div>id: {id}</div>
          <Input addonBefore='Portfolio Name ' defaultValue={location.state.portfolioName} onChange={handleChange}></Input>
          <br />
          <br />
          <SketchPicker onChange={({ hex }) => { setColor(hex) }} />
          <br />
          <br />
          <Row style={{width:'150%'}}>
          <Col span={12}>
            <Input
              onChange={event => setLink(event.target.value)}
            />
            </Col>
            <Col span={12}>
            <Button
              onClick={handleClick}
            >add link</Button>
            </Col>

          </Row>
          <br />
          <h3>click the image to change</h3>
          <button style={{ width: '30%', height: '18%', backgroundImage: `url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/2_tn.jpg")` }} onClick={handleClick2}></button>
          <button style={{ width: '30%', height: '18%', backgroundImage: `url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/3_tn.jpg")` }} onClick={handleClick3}></button>
          <button style={{ width: '30%', height: '18%', backgroundImage: `url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/4_tn.jpg")` }} onClick={handleClick4}></button>
        </div>
        <PhoneFrame color={color} lists={lists} img={img} />
        <div style={{ paddingTop: '2%', paddingLeft: '10%', paddingRight: '5%' }}>
          <Mentions
            autosize
            style={{
              width: '150%',
              height: '30%'
            }}


            placeholder="input @ to mention people, # to mention tag"
            prefix={['@', '#']}
            onSearch={onSearch}
          >
            {(MOCK_DATA[prefix] || []).map((value) => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Mentions>
          <Button style={{ marginTop: '60%' }} onClick={handlePublish}>Save Page</Button>
          <br/>
          <br/>
          <br/>
          <Button onClick={handlePreview}>Preview Page</Button>
          {/* <Link to='/share/'>Preview</Link> */}
        </div>
        <Modal style={{ height: '100%', width: '120%', display: 'flex'}} title="Preview Share Page" visible={isModalVisible} footer={<RWebShare
          data={{
            text: "Share your Linkhub page to the public",
            title: "Share to",
            url: url,
            sites: ['facebook']
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <Button style={{ marginTop: '5%' }}>Share on Web</Button>
        </RWebShare>} onCancel={() => setIsModalVisible(false)} >
          <PhoneFrame color={color} img={img} lists={lists} />
        </Modal>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Linkhub ©2022 Copyright</Footer>
    </Layout>)
}
