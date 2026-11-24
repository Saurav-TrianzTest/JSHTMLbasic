// CloudFront Function (viewer-request): server-side HTTP redirect replacing
// the former <meta http-equiv="refresh" content="0; url=/login"> in app/dashboard.html.
function handler(event) {
  var request = event.request;
  if (request.uri === '/app/dashboard.html' || request.uri === '/dashboard') {
    return {
      statusCode: 302,
      statusDescription: 'Found',
      headers: { location: { value: '/login' } }
    };
  }
  return request;
}
