import { Anchor, Button, Stack, Title, Typography } from '@mantine/core';
import type { Data, Detail } from '../types/data';
import { Navbar } from './Navbar';
import { useMediaQuery } from '@mantine/hooks';
import { useFile } from '../hooks/useFile';
import { useFiles } from '../hooks/useFiles';

export function Header() {
  const { data, loading, error } = useFile('header');

  if (loading && !data) return null;

  if (error) return <p>{error.message}</p>;

  const files = useFiles();

  const isDesktop = useMediaQuery('(min-width: 1150px)');
  const isTablet = useMediaQuery('(min-width: 902px)');
  const isMD = useMediaQuery('(min-width: 64em)');
  const isSM = useMediaQuery('(min-width: 48em)');

  return (
    <>
      <Stack
        gap={0}
        w="fit-content"
        align={isDesktop ? 'center' : undefined}
        styles={{
          root: {
            marginInline: isDesktop
              ? 'auto'
              : isMD
                ? '64px'
                : isSM
                  ? '32px'
                  : '16px',
          },
        }}
      >
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography>
            <Title
              order={1}
              dangerouslySetInnerHTML={{ __html: (data as Data).title || '' }}
              style={{
                paddingRight: '66px',
              }}
            />
          </Typography>
        </a>
        <Typography
          style={{
            fontSize: 'clamp(1em, 2,34375vw, 18px)',
            textWrap: 'balance',
          }}
        >
          {(data as Data).content?.map((detail: Detail, index) => (
            <>
              {detail.link ? (
                <Anchor
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  dangerouslySetInnerHTML={{ __html: detail.value || '' }}
                />
              ) : (
                <span
                  dangerouslySetInnerHTML={{ __html: detail.value || '' }}
                />
              )}

              {index < (data as Data).content!.length - 1 && (
                <span style={{ color: 'var(--mantine-color-gold-7)' }}>
                  {' '}
                  •{' '}
                </span>
              )}
            </>
          ))}
        </Typography>
      </Stack>

      <Stack
        gap={0}
        style={{
          position: isTablet ? 'absolute' : 'static',
          flexDirection: isTablet ? 'column' : 'row',
          right: '64px',
          top: '36.695px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          variant="outline"
          radius="xs"
          size="sm"
          py="10px"
          style={{ minWidth: 'fit-content', flex: 1 }}
          component="a"
          href="mailto:sabine.rommevaux-tani@cnrs.fr"
        >
          Me Contacter
        </Button>
        <Button
          radius="xs"
          size="sm"
          py="10px"
          style={{ minWidth: 'fit-content', flex: 1 }}
          component="a"
          href="/pdf-preview"
          target="_blank"
        >
          Télécharger mon CV
        </Button>
      </Stack>

      <Navbar files={files} />
    </>
  );
}
