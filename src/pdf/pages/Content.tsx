import type { Content, Data, File } from '../../types/data';
import { Item } from '../components/Item';
import { isData } from '../../types/guards';
import { Section } from '../components/Section';
import { useFile } from '../../hooks/useFile';

export function Content({ file }: { file: File }) {
  const { data, loading } = useFile(file.name);

  if (!loading && !isData((data as Data[] | Content[])[0])) {
    return (
      <>
        {(data as Data[]).map((item, index) => (
          <Item
            key={index}
            content={item as Content}
            displayDates={file.displayDates}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {!loading &&
        (data as Data[]).map((item, index) => (
          <Section
            key={index}
            id={`${file.name}-${index}`}
            data={item as Data}
            displayDates={file.displayDates}
            displayItemsLenght={true}
          />
        ))}
    </>
  );
}
