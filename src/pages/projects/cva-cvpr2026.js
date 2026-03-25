import React, { useEffect } from 'react';

export default function CvaCvpr2026() {
  useEffect(() => {
    window.location.replace('/projects/CVA/');
  }, []);

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
      <p>Redirecting to <a href="/projects/CVA/">CVA Project Page</a>...</p>
    </div>
  );
}
