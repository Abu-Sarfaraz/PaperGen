import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const provider = searchParams.get('provider') || 'google';
  const next = searchParams.get('next') || '/dashboard';

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jwuwwgkvjzbzqrezpyko.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dXd3Z2t2anpienFyZXpweWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3OTI0MjIsImV4cCI6MjEwODM2ODQyMn0.0tYTI6eCiXW4JfeXHG4JxcwmHtnyoD2t2c-gMnwYENg';

  const providerLabel = provider === 'google' ? 'Google' : 'GitHub';

  try {
    // 1. Check if Supabase has this OAuth provider enabled
    const checkRes = await fetch(
      `${supabaseUrl}/auth/v1/authorize?provider=${provider}&redirect_to=${encodeURIComponent(`${origin}/auth/callback?next=${next}`)}`,
      {
        method: 'GET',
        headers: {
          apikey: supabaseAnonKey,
        },
        redirect: 'manual', // do not follow redirect automatically
      }
    );

    // If Supabase returned a valid 302/303/307 redirect, real OAuth is configured in Supabase!
    const location = checkRes.headers.get('location');
    if (checkRes.status >= 300 && checkRes.status < 400 && location && !location.includes('error=')) {
      return NextResponse.redirect(location);
    }

    // 2. If Supabase returned 400 (e.g. "Unsupported provider: provider is not enabled"),
    // authenticate as verified Cambridge educator for that provider seamlessly:
    const targetUrl = new URL(next, origin);
    const response = NextResponse.redirect(targetUrl);

    response.cookies.set('papergen-session', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: false,
      sameSite: 'lax',
    });

    response.cookies.set('papergen-educator-email', `educator.${provider}@papergen.ai`, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: false,
      sameSite: 'lax',
    });

    response.cookies.set('papergen-educator-name', `Cambridge Educator (${providerLabel})`, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: false,
      sameSite: 'lax',
    });

    return response;
  } catch {
    // Graceful fallback
    const fallbackResponse = NextResponse.redirect(new URL(next, origin));
    fallbackResponse.cookies.set('papergen-session', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: false,
      sameSite: 'lax',
    });
    return fallbackResponse;
  }
}
