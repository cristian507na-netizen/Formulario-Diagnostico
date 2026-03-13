interface Props {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  columns?: number;
}

export default function RadioGroup({ options, value, onChange, columns }: Props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : '1fr',
        gap: '0.5rem',
      }}
    >
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            style={{
              padding: '0.6rem 0.9rem',
              borderRadius: 8,
              border: selected
                ? '1px solid rgba(99,102,241,0.6)'
                : '1px solid rgba(255,255,255,0.1)',
              background: selected
                ? 'rgba(99,102,241,0.18)'
                : 'rgba(255,255,255,0.04)',
              color: selected ? '#a5b4fc' : 'rgba(255,255,255,0.55)',
              fontSize: '0.8rem',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: selected ? 600 : 400,
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.15s ease',
              lineHeight: 1.4,
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
