import type { Content } from '../types/data';

export function ItemContent({ content }: { content: Content }) {
  return <pre>{JSON.stringify(content, null, 2)}</pre>;
}
