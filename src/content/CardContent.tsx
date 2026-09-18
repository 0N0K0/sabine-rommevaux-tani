import { Button, Card, Text, Typography } from '@mantine/core';
import type { Content } from '../types/data';
import { formatDates, formatPeriods } from '../helpers/helpers';
import { Link } from 'react-router-dom';

export function CardContent({
  content,
  displayDates,
}: {
  content: Content;
  displayDates: Boolean;
}) {
  return (
    <Card
      display="flex"
      style={{ flexDirection: 'column', gap: '8px' }}
      px="xl"
      py="lg"
      radius="xs"
    >
      {content.label && (
        <Typography>
          <p
            style={{
              fontSize: '18px',
              fontWeight: '500',
              paddingBottom: '8px',
            }}
            dangerouslySetInnerHTML={{ __html: content.label }}
          />
        </Typography>
      )}
      {content.details?.map((detail, index) => (
        <Text key={`detail-${index}`}>
          {detail.key && (
            <Typography component="span">
              <span
                style={{
                  color: 'var(--mantine-color-gold-5)',
                  fontWeight: '500',
                }}
                dangerouslySetInnerHTML={{ __html: detail.key }}
              />
              {!detail.key?.endsWith("'") && ' '}
            </Typography>
          )}
          {Array.isArray(detail.value) ? (
            <ul>
              {detail.value.map((value, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: value }} />
              ))}
            </ul>
          ) : (
            detail.value && (
              <Typography component="span">
                <span dangerouslySetInnerHTML={{ __html: detail.value }} />
              </Typography>
            )
          )}
          {detail.link && (
            <>
              {detail.value && <br />}
              <Button
                radius="xs"
                component={Link}
                to={detail.link}
                target="_blank"
                rel="noopener noreferrer"
                mt="8px"
              >
                Consulter
              </Button>
            </>
          )}
        </Text>
      ))}
      {content.content?.map((child, index) => (
        <CardContent key={index} content={child} displayDates={displayDates} />
      ))}
      {content.link && (
        <Button
          radius="xs"
          component={Link}
          to={content.link}
          target="_blank"
          rel="noopener noreferrer"
          mt="8px"
          style={{ width: 'fit-content' }}
        >
          Consulter
        </Button>
      )}
      {(content.place ||
        (displayDates === true && (content.dates || content.periods))) && (
        <Typography
          style={{
            textAlign: 'right',
            color: 'var(--mantine-color-gold-5)',
            fontWeight: '500',
          }}
        >
          {content.place && (
            <span dangerouslySetInnerHTML={{ __html: content.place }} />
          )}

          {content.place && (content.dates?.length || content.periods?.length)
            ? ', '
            : null}

          {content.dates?.length ? (
            <span
              dangerouslySetInnerHTML={{ __html: formatDates(content.dates) }}
            />
          ) : // <span>{formatDates(content.dates)}</span>
          null}

          {content.periods?.length ? (
            <span
              dangerouslySetInnerHTML={{
                __html: formatPeriods(content.periods),
              }}
            />
          ) : // <span>{formatPeriods(content.periods)}</span>
          null}
        </Typography>
      )}
    </Card>
  );
}
