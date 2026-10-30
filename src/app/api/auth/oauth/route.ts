import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const provider = searchParams.get('provider') || 'google';
  const next = searchParams.get('next') || '/dashboard';

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jwuwwgkvjzbzqrezpyko.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dXd3Z2t2anpienFyZXpweWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3OTI0MjIsImV4cCI6MjEwODM2ODQyMn0.0tYTI6eCiXW4JfeXHG4JxcwmHtnyoD2t2c-gMnwYENg';

  try {
    // 1. Check if Supabase has this OAuth provider enabled
    const checkRes = await fetch(
      `${supabaseUrl}/auth/v1/authorize?provider=${provider}&redirect_to=${encodeURIComponent(`${origin}/auth/callback?next=${next}`)}`,
      {
        method: 'GET',
        headers: {
          apikey: supabaseAnonKey,
        },
        redirect: 'manual',
      }
    );

    // If Supabase returned a valid 302/303/307 redirect, real OAuth is configured in Supabase!
    const location = checkRes.headers.get('location');
    if (checkRes.status >= 300 && checkRes.status < 400 && location && !location.includes('error=')) {
      return NextResponse.redirect(location);
    }

    // 2. If provider is not configured in Supabase, DO NOT allow unauthorized login.
    // Redirect back to /auth with a descriptive error so the user logs in with authorized credentials.
    const errorUrl = new URL('/auth', origin);
    errorUrl.searchParams.set('error', 'provider_disabled');
    errorUrl.searchParams.set('provider', provider);
    return NextResponse.redirect(errorUrl);
  } catch {
    const errorUrl = new URL('/auth', origin);
    errorUrl.searchParams.set('error', 'oauth_failed');
    return NextResponse.redirect(errorUrl);
  }
}
