'use client';

import { ReactNode } from 'react';

import { HeroUIProvider } from '@heroui/react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <NuqsAdapter>{children}</NuqsAdapter>
    </HeroUIProvider>
  );
}
