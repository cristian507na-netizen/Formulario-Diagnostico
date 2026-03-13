'use client';

import { useState } from 'react';
import CoverPage from '@/components/form/CoverPage';
import DiagnosticForm from '@/components/form/DiagnosticForm';

export default function Home() {
  const [started, setStarted] = useState(false);
  return started
    ? <DiagnosticForm />
    : <CoverPage onStart={() => setStarted(true)} />;
}
