import { getValue, fetchAndActivate } from 'firebase/remote-config';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { remoteConfig } from '@/utils/firebaseConfig';

import { Main } from '@/components/templates/Main';
import { Meta } from '@/components/utils/Meta';
import Container from '@/components/ui/Container';
import MainHeader from '@/components/ui/MainHeader';
import Footer from '@/components/ui/Footer';

export default function RemoteConfig() {
  const [showBtn, setShowBtn] = useState(false);
  const [welcomeTxt, setWelcomeTxt] = useState('');
  const [json, setJson] = useState<any>({});
  const [bannerText, setBannerText] = useState('');

  const getConfigValue = () => {
    const firebaseRemoteConfig = remoteConfig;
    if (firebaseRemoteConfig) {
      fetchAndActivate(firebaseRemoteConfig).then(() => {
        setShowBtn(getValue(firebaseRemoteConfig, 'show_button').asBoolean());
        setWelcomeTxt(
          getValue(firebaseRemoteConfig, 'welcome_text').asString()
        );
        setJson(
          JSON.parse(getValue(firebaseRemoteConfig, 'remote_data').asString())
        );
        setBannerText(getValue(firebaseRemoteConfig, 'banner_text').asString());
      });
    }
  };

  useEffect(() => {
    getConfigValue();
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Remote Config | Brhn.'s Next.js Playground"
          description="Welcome to Brhn.'s playground. I made some fun stuffs using Next or ReactJS here."
        />
      }
      header={<MainHeader />}
      footer={<Footer />}
    >
      <Container>
        <div className="p-16 text-white">
          <h1 className="text-white">{welcomeTxt}</h1>
          <div className="my-5 bg-green-400 p-4">{bannerText}</div>
          {showBtn ? (
            <Button type="primary">New Button</Button>
          ) : (
            <Button type="primary">Old Button</Button>
          )}
          <p>
            {(json?.data || []).map((e: any) => (
              <span key={e} className="px-4">
                {e}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </Main>
  );
}
