import { NextResponse } from 'next/server';
import { getSiteContent } from '@/app/lib/content';

export function GET() {
  return NextResponse.json(getSiteContent());
}
