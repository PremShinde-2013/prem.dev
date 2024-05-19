import clsx from 'clsx';
import { useState } from 'react';

function ProjectLink() {
  const [redirectUrl, setRedirectUrl] = useState(''); // State to hold the redirect URL

  const handleClick = () => {
    // Set the URL to redirect to
    setRedirectUrl('https://learnifypro-lms.vercel.app/');
  };

  // If redirectUrl is set, redirect the user to the specified URL
  if (redirectUrl) {
    window.location.href = redirectUrl;
  }

  return (
    <div className={clsx('my-12 flex items-center justify-center')}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <button
        type="button"
        className={clsx('button button--solid button--big')}
        onClick={handleClick}
      >
        Access LearnifyPro👆
      </button>
    </div>
  );
}

export default ProjectLink;
