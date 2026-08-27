type ContextDisplayProps = {
  text: string;
};

export default function ContextDisplay({
  text,
}: ContextDisplayProps) {
  return (
    <div className="h-6 overflow-hidden">
      <p className="text-sm tracking-[-0.01em] text-muted">
        {text}
      </p>
    </div>
  );
}