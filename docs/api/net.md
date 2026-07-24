---
title: Neutralino.net
toc_max_heading_level: 2
---

`Neutralino.net` exposes methods for communicating with HTTP/HTTPS network resources. This API is implemented at the framework-level (C++), 
so webview CORS won't block any request made from these methods.


## net.request(url, options)
Sends an HTTP/HTTPs request and retrive its output body and other response details. Throws `NE_NW_SSLCONN`, `NE_NW_SSLLOAD`, `NE_NW_SSLVERI`, `NE_NW_SSLHOST`, or,
`NE_NW_HTTPERR` based on the underlying network errors.

### Parameters
- `url` String: An HTTP/HTTPS URL.
- `method` String (optional): HTTP method, i.e., `GET`, `POST`, `PATCH`, etc. Default is `GET`.

### Options
- `contentType` String: Content type, i.e., `text/plain`. Default is `application/json`.
- `timeout` Number: Maximum timeout.
- `params` Object: Key-value pairs of parameters.
- `headers` Object: Key-value pairs of request headers.
- `auth` Object: authentication credentials.
  - `username` String: username.
  - `password` String: password.
- `body` String: Message body.
- `allowRedirects` Boolean: Following location redirects automatically. Default is `false`.
- `encodePath` Boolean: Encode URL automatically. Default is `true`.
- `keepAlive` Boolean: Enables persistent TCP connections. Default is `false`.

### Return Object (awaited):
- `status` Number: Status code.
- `statusText` String: Status description.
- `body` String: Message body.
- `headers` Object: Key-value pairs of response headers.
- `cookies` String: Response cookies.
- `contentType` String: Response content type.
- `location` String: Redirect location. This is usually set if the request's `allowRedirects` option is set to `false`.
- `version` String: The server's HTTP version.

```js
let response = await Neutralino.net.request('https://example.com', { method: 'PUT' });
console.log(response.status);
console.log(response.body);
```

## net.get(url, options)
Calls `net.request(url, 'GET', options)` to make a `GET` request. All input parameters, options, thrown errors, 
and the response is identical to `net.request()`.

## net.post(url, options)
Calls `net.request(url, 'POST', options)` to make a `POST` request. All input parameters, options, thrown errors, 
and the response is identical to `net.request()`.

## net.put(url, options)
Calls `net.request(url, 'PUT', options)` to make a `PUT` request. All input parameters, options, thrown errors, 
and the response is identical to `net.request()`.

## net.patch(url, options)
Calls `net.request(url, 'PATCH', options)` to make a `PATCH` request. All input parameters, options, thrown errors, 
and the response is identical to `net.request()`.

## net.delete(url, options)
Calls `net.request(url, 'DELETE', options)` to make a `DELETE` request. All input parameters, options, thrown errors, 
and the response is identical to `net.request()`.

## net.options(url, options)
Calls `net.request(url, 'OPTIONS', options)` to make an `OPTIONS` request. All input parameters, options, thrown errors, 
and the response is identical to `net.request()`.

## net.head(url, options)
Calls `net.request(url, 'HEAD', options)` to make a `HEAD` request. All input parameters, options, thrown errors, 
and the response is identical to `net.request()`.
