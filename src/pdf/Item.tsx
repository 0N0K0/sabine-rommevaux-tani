import { Link, Text, View } from '@react-pdf/renderer';
import type { Content } from '../types/data';
import { RichTextPdf } from './RichTextPdf';
import { UnorderedList } from './UnorderedList';
import { formatDates, formatPeriods } from '../helpers/helpers';

export function Item({
  content,
  displayDates,
}: {
  content: Content;
  displayDates: Boolean;
}) {
  return (
    <View>
      {content.label && (
        <RichTextPdf html={content.label} style={{ fontWeight: 500 }} />
      )}
      {content.details?.map((detail, index) => (
        <View key={index}>
          {Array.isArray(detail.value) ? (
            <>
              {detail.key && <RichTextPdf html={detail.key} />}
              <UnorderedList
                items={detail.value.map((value, valueIndex) => (
                  <RichTextPdf key={valueIndex} html={value} />
                ))}
              />
            </>
          ) : (
            <Text hyphenationPenalty={Infinity}>
              {detail.key && (
                <>
                  <RichTextPdf html={detail.key} />
                  {!detail.key.endsWith("'") && ' '}
                </>
              )}
              {detail.value && <RichTextPdf html={detail.value} />}
            </Text>
          )}
          {detail.link && (
            <Text>
              <Link href={detail.link}>{detail.link}</Link>
            </Text>
          )}
        </View>
      ))}
      {content.content?.map((child, index) => (
        <Item key={index} content={child} displayDates={displayDates} />
      ))}
      {content.link && <Link href={content.link}>{content.link}</Link>}
      {(content.place ||
        (displayDates === true && (content.dates || content.periods))) && (
        <Text hyphenationPenalty={Infinity}>
          {content.place && <RichTextPdf html={content.place} />}

          {content.place && (content.dates?.length || content.periods?.length)
            ? ', '
            : null}

          {content.dates?.length ? (
            <RichTextPdf html={formatDates(content.dates)} />
          ) : null}

          {content.periods?.length ? (
            <RichTextPdf html={formatPeriods(content.periods)} />
          ) : null}
        </Text>
      )}
    </View>
  );
}
