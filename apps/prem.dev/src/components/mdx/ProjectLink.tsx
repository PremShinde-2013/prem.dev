import clsx from 'clsx';
import { useState } from 'react';

export function ProjectLink() {
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

export function LearnifyProStreamLink() {
  const [redirectUrl, setRedirectUrl] = useState(''); // State to hold the redirect URL

  const handleClick = () => {
    // Set the URL to redirect to
    setRedirectUrl('https://learnify-pro-stream.vercel.app/');
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
        Access LearnifyProStream👆
      </button>
    </div>
  );
}
export function CryptoversxLink() {
  const [redirectUrl, setRedirectUrl] = useState(''); // State to hold the redirect URL

  const handleClick = () => {
    // Set the URL to redirect to
    setRedirectUrl('cryptoversx.netlify.app/');
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
        Access Cryptoversx👆
      </button>
    </div>
  );
}
export function ProductLink() {
  const [redirectUrl, setRedirectUrl] = useState(''); // State to hold the redirect URL

  const handleClick = () => {
    // Set the URL to redirect to
    setRedirectUrl('https://3d-product-designer.netlify.app/');
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
        Access 3D Product Designer👆
      </button>
    </div>
  );
}

export function MoviesLink() {
  const [redirectUrl, setRedirectUrl] = useState(''); // State to hold the redirect URL

  const handleClick = () => {
    // Set the URL to redirect to
    setRedirectUrl('https://movies-wrld.netlify.app/');
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
        Access Movies Wrld👆
      </button>
    </div>
  );
}
