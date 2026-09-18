import { Tabs, Title } from '@mantine/core';
import { useDataFiles } from '../hooks/useDataFiles';
import { PanelContent } from './PanelContent';
import { IntroductionContent } from './IntroductionContent';

import arabesque1 from '../assets/images/arabesque_1.svg';
import arabesque2 from '../assets/images/arabesque_2.svg';
import arabesque3 from '../assets/images/arabesque_3.svg';
import arabesque4 from '../assets/images/arabesque_4.svg';

const arabesques = [arabesque2, arabesque3, arabesque4];

export function MainContent() {
  const { files, selected, data, loading, error, loadFile } = useDataFiles();

  if (loading && !data) return null;

  if (error) return <p>{error.message}</p>;

  return (
    <Tabs
      defaultValue="introduction"
      value={selected}
      onChange={(value) => {
        if (value) {
          loadFile(value);
        }
      }}
      style={{
        height: 'calc(100vh - 144px - 60px)',
      }}
    >
      <Tabs.List
        justify="center"
        style={{
          background: 'white',
        }}
      >
        <Tabs.Tab key="introduction" value="introduction">
          Introduction
        </Tabs.Tab>
        {files.map((file) => (
          <Tabs.Tab key={file.name} value={file.name}>
            {file.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <Tabs.Panel
        key="introduction"
        value="introduction"
        px="64"
        py="48"
        style={{
          height: 'calc(100vh - 144px - 60px - 36px)',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        <img
          src={arabesque1}
          alt=""
          style={{
            height: '32px',
          }}
        />
        <IntroductionContent />
        <img
          src={arabesque1}
          alt=""
          style={{
            height: '32px',
          }}
        />
      </Tabs.Panel>
      {files.map((file, index) => {
        const arabesque = arabesques[index % arabesques.length];

        return (
          <Tabs.Panel
            key={file.name}
            value={file.name}
            px="64"
            py="48"
            style={{
              height: 'calc(100vh - 144px - 60px - 36px)',
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '48px',
            }}
          >
            {loading ? null : (
              <>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <Title order={2} style={{ textAlign: 'center' }}>
                    {file.title}
                  </Title>
                  <img
                    src={arabesque}
                    alt=""
                    style={{
                      height: '24px',
                    }}
                  />
                </div>
                <PanelContent data={data} displayDates={file.displayDates} />
                <img
                  src={arabesque}
                  alt=""
                  style={{
                    height: '32px',
                  }}
                />
              </>
            )}
          </Tabs.Panel>
        );
      })}
    </Tabs>
  );
}
