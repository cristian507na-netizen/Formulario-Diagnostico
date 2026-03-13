import { ReactNode } from 'react';

interface Props {
  label: string;
  hint?: string;
  children: ReactNode;
}

export default function FieldWrapper({ label, hint, children }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label
        style={{
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.75)',
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.4,
        }}
      >
        {label}
      </label>
      {hint && (
        <span
          style={{
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.35)',
            fontFamily: "'DM Sans', sans-serif",
            marginTop: '-0.25rem',
          }}
        >
          {hint}
        </span>
      )}
      {children}
    </div>
  );
}
