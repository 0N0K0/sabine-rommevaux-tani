import { Text } from '@react-pdf/renderer';
import { parseDocument } from 'htmlparser2';

type PdfNode =
  | {
      type: 'text';
      content: string;
    }
  | {
      type: 'element';
      tag: string;
      children: PdfNode[];
      href?: string;
    };

type HtmlNode = {
  type: string;
  name?: string;
  data?: string;
  attribs?: Record<string, string>;
  children?: HtmlNode[];
};

function convertHtmlNode(node: HtmlNode): PdfNode | null {
  if (node.type === 'text') {
    return {
      type: 'text',
      content: node.data ?? '',
    };
  }

  if (node.type !== 'tag') {
    return null;
  }

  const children: PdfNode[] = (node.children ?? [])
    .map((child: HtmlNode): PdfNode | null => convertHtmlNode(child))
    .filter((child: PdfNode | null): child is PdfNode => child !== null);

  return {
    type: 'element',
    tag: node.name ?? '',
    href: node.attribs?.href,
    children,
  };
}

function htmlToPdfNodes(html: string): PdfNode[] {
  const document = parseDocument(html);

  // On convertit explicitement les nœuds du parser
  // vers notre structure HTMLNode.
  const nodes: HtmlNode[] = document.children as unknown as HtmlNode[];

  return nodes
    .map((node: HtmlNode): PdfNode | null => convertHtmlNode(node))
    .filter((node: PdfNode | null): node is PdfNode => node !== null);
}

function renderPdfNode(node: PdfNode, index: number): React.ReactNode {
  if (node.type === 'text') {
    return node.content;
  }

  const children: React.ReactNode[] = node.children.map(
    (child: PdfNode, childIndex: number) => renderPdfNode(child, childIndex),
  );

  switch (node.tag) {
    case 'strong':
    case 'b':
      return (
        <Text key={index} style={{ fontWeight: 700 }}>
          {children}
        </Text>
      );

    case 'em':
    case 'i':
      return (
        <Text key={index} style={{ fontStyle: 'italic' }}>
          {children}
        </Text>
      );

    case 'u':
      return (
        <Text key={index} style={{ textDecoration: 'underline' }}>
          {children}
        </Text>
      );

    case 'br':
      return <Text key={index}>{'\n'}</Text>;

    default:
      return <Text key={index}>{children}</Text>;
  }
}

type RichTextPdfProps = {
  html: string;
  style?: any;
};

export function RichTextPdf({ html, style }: RichTextPdfProps) {
  const nodes = htmlToPdfNodes(html);

  return (
    <Text style={style}>
      {nodes.map((node: PdfNode, index: number) => renderPdfNode(node, index))}
    </Text>
  );
}
