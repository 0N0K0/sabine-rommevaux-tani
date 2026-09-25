import { Layout } from '../layout/Layout';
import arabesque1 from '../assets/images/arabesque_1.svg';
import { isData } from '../types/guards';
import type { Data, Introduction } from '../types/data';
import { Typography } from '@mantine/core';
import { SectionContent } from '../components/SectionContent';
import { useFile } from '../hooks/useFile';

export default function Home() {
  const { data, loading, error } = useFile('introduction');

  if (loading && !data) return null;

  if (error) return <p>{error.message}</p>;

  return (
    <Layout>
      <img
        src={arabesque1}
        alt=""
        style={{
          height: '32px',
        }}
      />
      {(data as Data[]).map((item, index) => {
        if (isData(item)) {
          return (
            <SectionContent
              key={index}
              data={item}
              displayDates={false}
              displayItemsLenght={false}
            />
          );
        }

        return (
          <section
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: 'calc(1920px / 3 * 2)',
              marginInline: 'auto',
            }}
          >
            {(item as Introduction).intro && (
              <Typography
                style={{
                  maxWidth: 'calc(1920px / 2)',
                  marginInline: 'auto',
                  textAlign: 'justify',
                }}
              >
                {(item as Introduction).intro.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0 ? 'intro-first-paragraph' : undefined
                    }
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                    style={{
                      fontSize: index === 0 ? '20px' : '16px',
                    }}
                  />
                ))}
              </Typography>
            )}
          </section>
        );
      })}
      <img
        src={arabesque1}
        alt=""
        style={{
          height: '32px',
        }}
      />
    </Layout>
  );
}
