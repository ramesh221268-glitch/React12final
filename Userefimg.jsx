import React, { useRef, useState } from 'react';

export default function Userefimg() {

  const [newimage, setimage] = useState(true);
  const [imageURL, setimageURL] = useState("");
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const fileRef = useRef(null);
  const imgRef = useRef(null);

    const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setimageURL(preview);
      setimage(false);
    }
  };

    const handleShare = () => {
    if (imgRef.current) {
      alert("Image shared successfully!");
    } else {
      alert("Upload image first");
    }
  };

  return (
    <div>
      <nav>

        <input
          type="file"
          ref={fileRef}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImage}
        />

        {newimage ? (
          <div
            className="Userefimg"
            onClick={() => fileRef.current.click()}
            style={{ border: "1px solid black", padding: "20px", cursor: "pointer" }}
          >
            <h3>Upload Image</h3>
          </div>
        ) : (
          <img
            ref={imgRef}
            src={imageURL}
            alt="Uploaded"
            width="250"
          />
        )}

      </nav>

      <br />

      <button onClick={() => setLike(like + 1)}>Like {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>Dislike {dislike}</button>
      <button onClick={handleShare}>Share</button>
    </div>
  );
}