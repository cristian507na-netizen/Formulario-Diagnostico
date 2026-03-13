interface Props {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  minLabel?: string;
  maxLabel?: string;
  color?: string;
}

export default function ScaleInput({
  value,
  onChange,
  min = 0,
  max = 10,
  minLabel = 'Nunca',
  maxLabel = 'Siempre',
  color = '#6366f1',
}: Props) {
  const steps = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
        {steps.map((n) => {
          const selected = value === n;
          return (
            <button
              key={n}
              type="button"
              onClick={() => onChange(n)}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: selected
                  ? `1px solid ${color}70`
                  : '1px solid rgba(255,255,255,0.1)',
                background: selected
                  ? `${color}25`
                  : 'rgba(255,255,255,0.04)',
                color: selected ? color : 'rgba(255,255,255,0.5)',
                fontSize: '0.8rem',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: selected ? 700 : 400,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                flexShrink: 0,
              }}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.3)',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}
