'use client';

import { useMemo } from 'react';
import { getSiteContent } from '@/app/lib/content';
import type { SiteContent } from '@/app/lib/content';

export default function useContent(): SiteContent {
  return useMemo(() => getSiteContent(), []);
}
