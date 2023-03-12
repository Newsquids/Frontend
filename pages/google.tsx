import { apis } from 'lib/api/axiosUtil';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const GoogleAuthCallbackPage = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      const googleCallback = apis.googleCallback(code);
      console.log(googleCallback);
    } else {
      alert('LOGIN FAILED');
    }
  }, [code]);

  return (
    <div>
      <p>Logging in with Google...</p>
    </div>
  );
};

export default GoogleAuthCallbackPage;
