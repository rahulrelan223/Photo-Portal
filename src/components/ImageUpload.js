// src/components/ImageUpload.js
import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytes(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.error(error.message);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        // Update the image URL in Firestore or do other tasks
        console.log(url);
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <progress value={progress} max="100" />
    </div>
  );
};

export default ImageUpload;
