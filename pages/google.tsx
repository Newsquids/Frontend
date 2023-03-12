import { GoogleCallback, GoogleCallbackResponse } from 'lib/api/axiosType';
import { apis } from 'lib/api/axiosUtil';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const GoogleAuthCallbackPage = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    requestGoogleCallBack();
  }, [code]);

  const requestGoogleCallBack = async () => {
    if (code) {
      const googleCallbackRequest: GoogleCallback = {
        code: code,
      };
      const googleCallbackResponse: GoogleCallbackResponse = await apis.googleCallback(googleCallbackRequest);
      if (googleCallbackResponse) {
        window.localStorage.setItem('access', googleCallbackResponse.access);
        window.localStorage.setItem('refresh', googleCallbackResponse.refresh);
        router.push('/');
      } else {
        router.push('/');
      }
    }
  };

  return (
    <div>
      <p>Logging in with Google...</p>
    </div>
  );
};

export default GoogleAuthCallbackPage;
