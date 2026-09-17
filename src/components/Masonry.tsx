import type { ReactNode } from 'react';

interface MasonryProps {
  children: ReactNode[];
  cols?: number;
  gap?: number;
}

export function Masonry({ children, cols = 6, gap = 16 }: MasonryProps) {
  const columns = Array.from({ length: cols }, (_, columnIndex) =>
    children.filter((_, index) => index % cols === columnIndex),
  );

  return (
    <div
      style={{
        display: 'flex',
        gap,
      }}
    >
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap,
          }}
        >
          {column.map((child, index) => (
            <div key={index}>{child}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
