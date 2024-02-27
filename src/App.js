// src/App.js
import React, { useState, useEffect } from 'react';
import ImageUpload from './components/ImageUpload';
import ImageDisplay from './components/ImageDisplay';
import ImageAnalytics from './components/ImageAnalytics';
import { db } from './firebase';  // Import the db object

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [views, setViews] = useState(0);

  useEffect(() => {
    handleAnalytics();
  }, []); // Fetch analytics data on component mount

  // Handle image upload logic here
  const handleUpload = () => {
    // Upload logic using Firebase Storage
    // After successful upload, update the image URL and views in Firestore
  };

  // Handle image analytics logic here
  const handleAnalytics = () => {
    // Fetch analytics data from Firestore and update views state
    // You need to implement this part based on your Firestore structure
    db.collection('analytics')
      .doc('your-document-id')
      .onSnapshot((doc) => {
        if (doc.exists) {
          setViews(doc.data().views);
        } else {
          console.log('No such document!');
        }
      });
  };

  return (
    <div>
      <ImageUpload handleUpload={handleUpload} />
      <ImageDisplay imageUrl={imageUrl} />
      <ImageAnalytics views={views} handleAnalytics={handleAnalytics} />
    </div>
  );
};

export default App;
