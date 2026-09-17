import { Button, Card, Text, Typography } from '@mantine/core';
import type { Content } from '../types/data';
import { formatDates, formatPeriods } from '../helpers/helpers';

export function CardContent({
  content,
  displayDates,
}: {
  content: Content;
  displayDates: Boolean;
}) {
  const Container = content.content ? 'section' : Card;

  return (
    <Container>
      {content.label && (
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: content.label }} />
        </Typography>
      )}
      {content.details?.map((detail, index) => (
        <Text key={`detail-${index}`}>
          {detail.key && (
            <Typography component="span">
              <span dangerouslySetInnerHTML={{ __html: detail.key }} />
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
          )}{' '}
          {detail.link && (
            <Button
              component="a"
              href={detail.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulter
            </Button>
          )}
        </Text>
      ))}
      {(content.place ||
        (displayDates === true && (content.dates || content.periods))) && (
        <Text>
          {content.place && <span>{content.place}</span>}

          {content.place && (content.dates?.length || content.periods?.length)
            ? ', '
            : null}

          {content.dates?.length ? (
            <span>{formatDates(content.dates)}</span>
          ) : null}

          {content.periods?.length ? (
            <span>{formatPeriods(content.periods)}</span>
          ) : null}
        </Text>
      )}
      {content.link && (
        <Button
          component="a"
          href={content.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consulter
        </Button>
      )}
      {content.content?.map((child, index) => (
        <CardContent key={index} content={child} displayDates={displayDates} />
      ))}
    </Container>
  );
}
