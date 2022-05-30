import { Avatar, Button, Comment, Form, Input, List, Collapse } from 'antd';
import moment from 'moment';
import { useState } from 'react';
const { TextArea } = Input;
const { Panel } = Collapse;
const text = `
  This is a section for instructions to support users to get familar with Linkhub
`;

function AddComment(req) {
  return fetch('/AddComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(req)
  })
    .then(data => data.json())
}

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const QAContent = () => {

  const [name, setName] = useState('Guest');
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = async e => {
    if (!value) return;
    setSubmitting(true);
    const res = await AddComment({
      name,
      value
    });console.log("res"+res)
     setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([
        ...comments,
        {
          author: <p>{name}</p>,
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
     }, 1000);

  };

  const handleChange = (e) => {
    setValue(e.target.value);

    if (sessionStorage.getItem("email"))
      setName(sessionStorage.getItem("email"));
  };

  return (
    <>
      <Collapse accordion>
        <Panel header="Help Subject 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="Help Subject 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="Help Subject 3" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="Help Subject 4" key="4">
          <p>{text}</p>
        </Panel>
      </Collapse>

      <br />
      <br />
      <br />


      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Avatar" />}
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );
};

export default QAContent;