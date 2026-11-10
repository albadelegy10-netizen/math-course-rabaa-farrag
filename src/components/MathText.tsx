import { renderRichText } from '../../utils/textRenderer';

interface MathTextProps {
  content: string;
}

export function MathText({ content }: MathTextProps) {
  return <div className="text-gray-800 leading-relaxed">{renderRichText(content)}</div>;
}
