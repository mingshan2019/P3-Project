import { useRef } from "react";
import S3 from "react-aws-s3";

const accessKeyId = process.env.accessKeyId;
const secretAccessKey = process.env.secretAccessKey;

window.Buffer = window.Buffer || require("buffer").Buffer;


const UploadS3 = () => {
  const fileInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInput.current.files[0];
    const newFileName = fileInput.current.files[0].name;
    const config = {
      bucketName: "linkhub-images",
      region: "ap-southeast-2",
      accessKeyId: {accessKeyId},
      secretAccessKey: {secretAccessKey}
    };
    const ReactS3Client = new S3(config);

    console.log("accessKeyId"+accessKeyId);
    

    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data);

      if (data.status === 204) {
        console.log("berhasil diupload");
      } else {
        console.log("gagal");
      }
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Upload file: <br />
        </label>
        <input type="file" ref={fileInput} />
        <br />
        <button type="submit"> Upload </button>
      </form>
    </>
  );
};

export default UploadS3;