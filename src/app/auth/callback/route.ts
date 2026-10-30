import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/dashboard';
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(`${origin}/auth?error=${encodeURIComponent(error)}`);
  }

  if (code) {
    try {
      const supabase = await createClient();
      const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
      if (!exchangeError) {
        const res = NextResponse.redirect(`${origin}${next}`);
        res.cookies.set('papergen-session', 'true', {
          path: '/',
          maxAge: 60 * 60 * 24 * 30,
          sameSite: 'lax',
        });
        return res;
      }
    } catch {
      return NextResponse.redirect(`${origin}/auth?error=auth_callback_failed`);
    }
  }

  const res = NextResponse.redirect(`${origin}${next}`);
  res.cookies.set('papergen-session', 'true', {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
  });
  return res;
}
