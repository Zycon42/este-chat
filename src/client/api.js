import Promise from 'bluebird';
import request from 'superagent';

export class RequestError extends Error {
  constructor(err, message: string) {
    super();
    this.name = 'RequestError';
    this.message = message || 'SuperAgent request failed!';
    this.reason = err;
  }
}

let _pendingRequests = {};

function abortPendingRequest(key) {
  if (_pendingRequests[key]) {
    _pendingRequests[key]._callback = function() {};
    _pendingRequests[key].abort();
    _pendingRequests[key] = null;
  }
}

export function authenticate(username, password) {
  const req = request.post('/api/auth').send({username, password});
  return send(authenticate.name, req).then(res => res.body);
}

export function createUser(name, email, password) {
  const req = request.post('/api/user').send({name, email, password});
  return send(createUser.name, req).then(res => res.body);
}

function send(key, req) {
  abortPendingRequest(req);
  _pendingRequests[key] = req;
  return new Promise((resolve, reject) => {
    req.end((err, res) => {
      if (err) {
        if (!err.response)
          // severe error like no network etc.
          return reject(new RequestError(err));

        return reject(err.response);
      }

      return resolve(res);
    });
  });
}
