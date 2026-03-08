// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Example: Redirect from /old-path to /new-path
  if (request.nextUrl.pathname.startsWith('/')) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // Example: Rewrite to an external service (Proxying)
  // This hides the destination from the user, making it look like 
  // the request is staying on your domain.
//   if (request.nextUrl.pathname.startsWith('/api/external')) {
//     const url = request.nextUrl.clone();
//     url.hostname = 'api.external-service.com';
//     url.pathname = url.pathname.replace('/api/external', '/v1');
//     return NextResponse.rewrite(url);
//   }

//   return NextResponse.next();
}

// Specify which routes the proxy applies to
export const config = {
  matcher: ['/'],
};