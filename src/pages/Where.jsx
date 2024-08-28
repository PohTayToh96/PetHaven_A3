import React from 'react';

const Where = () => {
  return (
    <div className='WherePage'>
      <h1>Where to find us</h1>
      <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.465339552016!2d103.9020846!3d1.4064412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da15e4a68f302d%3A0x31aca96bff05c660!2sWaterway%20Point!5e0!3m2!1sen!2ssg!4v1723029299977!5m2!1sen!2ssg" 
                width="1000"
                height="650"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
            
      </div>
      <h2>Punggol Branch</h2>
      <p><b>Waterway Point</b></p>
      <p>83 Punggol Central, Singapore 828761</p>
    </div>
  );
};

export default Where;
