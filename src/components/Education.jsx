// Education.js
import React from 'react';

const Education = () => {
  return (
    <div style={{ borderBottom: '1px solid #666', paddingBottom: '1rem', color: '#FFF' }}>
      <h2 style={{ margin: '1rem 0', fontSize: '1.5rem', textAlign: 'center', color: '#CCC' }}>Education</h2>

      <div style={{ maxWidth: '400px', margin: '0 auto', paddingLeft: '1.5rem', position: 'relative' }}>
        {/* Timeline Vertical Line */}
        <div style={{
          position: 'absolute',
          left: '0.1rem', // adjust to align with dots
          top: '0.75rem',
          bottom: '1rem',
          width: '2px',
          backgroundColor: '#1E90FF',
        }}></div>

        {/* Education Item 1 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', position: 'relative' }}>
          <div style={{ 
            width: '10px', 
            height: '10px', 
            backgroundColor: '#1E90FF', 
            borderRadius: '50%', 
            position: 'absolute', 
            left: '-1.5rem', 
            top: '0.25rem' 
          }}></div>
          <div style={{ marginLeft: '1rem' }}>
            <h3 style={{ fontWeight: 'bold', margin: 0, color: '#FFF' }}>2019 - 2024</h3>
            <p style={{ margin: 0, color: '#CCC' }}>M.Sc. Data Science</p>
            <p style={{ margin: 0, color: '#CCC' }}>CGPA: 8.85</p>
            <p style={{ margin: 0, color: '#CCC' }}>Coimbatore Institute of Technology, Coimbatore</p>
          </div>
        </div>

        {/* Education Item 2 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', position: 'relative' }}>
          <div style={{ 
            width: '10px', 
            height: '10px', 
            backgroundColor: '#1E90FF', 
            borderRadius: '50%', 
            position: 'absolute', 
            left: '-1.5rem', 
            top: '0.25rem' 
          }}></div>
          <div style={{ marginLeft: '1rem' }}>
            <h3 style={{ fontWeight: 'bold', margin: 0, color: '#FFF' }}>2017 - 2019</h3>
            <p style={{ margin: 0, color: '#CCC' }}>Higher Secondary</p>
            <p style={{ margin: 0, color: '#CCC' }}>Percentage: 83%</p>
            <p style={{ margin: 0, color: '#CCC' }}>Sri Gopal Naidu Higher Secondary School, Coimbatore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
