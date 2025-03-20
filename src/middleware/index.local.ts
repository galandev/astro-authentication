// No funciona por el nombre del archivo
// Demostración

import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";

const privateRoutes = ['/protected'];

export const onRequest = defineMiddleware(({ url, request }, next) => {
    const authHeaders = request.headers.get('Authorization') ?? '';

    if(privateRoutes.includes(url.pathname)) {
        return checkLocalAuth(authHeaders, next);
    }

    return next();
});

const checkLocalAuth = ( authHeaders: string, next: MiddlewareNext ) => {
    if(authHeaders) {
        const authValue = authHeaders.split(' ').at(-1) ?? 'user:pass';
        const decodedValue = atob(authValue).split(':');
        const [user, password] = decodedValue;

        if(user === 'admin' && password === 'admin') {
            return next();
        }
    }   
    return new Response('Auth necesaria', { 
        status: 401,
        headers: {
            'Content-Type': 'text/plain',
            'WWW-Authenticate': 'Basic realm="Secure Area"'
        }
    });
}