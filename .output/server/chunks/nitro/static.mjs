import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/0983bba.js": {
    "type": "application/javascript",
    "etag": "\"18d-GPosiIsjap9U3fFzI4dDaSkQvDk\"",
    "mtime": "2021-09-23T13:50:35.907Z",
    "path": "../public/_nuxt/0983bba.js"
  },
  "/_nuxt/2660dd9.js": {
    "type": "application/javascript",
    "etag": "\"f12-XqcaZ3qEdJshF6UFChFaED8rzMA\"",
    "mtime": "2021-09-23T13:50:35.907Z",
    "path": "../public/_nuxt/2660dd9.js"
  },
  "/_nuxt/3091f3c.js": {
    "type": "application/javascript",
    "etag": "\"1020-4s6vDYmDmuKHfCfEosCyEvew14k\"",
    "mtime": "2021-09-23T13:50:35.907Z",
    "path": "../public/_nuxt/3091f3c.js"
  },
  "/_nuxt/5df0cbb.js": {
    "type": "application/javascript",
    "etag": "\"af8-7QnijCR+/ViqycsfoCdIYvOEH4s\"",
    "mtime": "2021-09-23T13:50:35.907Z",
    "path": "../public/_nuxt/5df0cbb.js"
  },
  "/_nuxt/6bc11d0.js": {
    "type": "application/javascript",
    "etag": "\"6db-JKMdffPlBRz/YMWCgJcD8cqK4E0\"",
    "mtime": "2021-09-23T13:50:35.907Z",
    "path": "../public/_nuxt/6bc11d0.js"
  },
  "/_nuxt/80158cc.js": {
    "type": "application/javascript",
    "etag": "\"6c2-uRDZ6RW8PXXXDq8uoWIWcsnpaQc\"",
    "mtime": "2021-09-23T13:50:35.907Z",
    "path": "../public/_nuxt/80158cc.js"
  },
  "/_nuxt/87e71a8.js": {
    "type": "application/javascript",
    "etag": "\"2a7a3-A5iwTTXAZDYB3tDJMgAPcCn7zgI\"",
    "mtime": "2021-09-23T13:50:35.907Z",
    "path": "../public/_nuxt/87e71a8.js"
  },
  "/_nuxt/a7d32e6.js": {
    "type": "application/javascript",
    "etag": "\"49f-UA68sGyHi465mtaoTX/WP4KZaUc\"",
    "mtime": "2021-09-23T13:50:35.907Z",
    "path": "../public/_nuxt/a7d32e6.js"
  },
  "/_nuxt/adef01d.js": {
    "type": "application/javascript",
    "etag": "\"137-sfjuDL7LSu+BxEv2iC6Ds8S64NI\"",
    "mtime": "2021-09-23T13:50:35.907Z",
    "path": "../public/_nuxt/adef01d.js"
  },
  "/_nuxt/e088a56.js": {
    "type": "application/javascript",
    "etag": "\"54ef-LfzbfuWxM/Dq4GUOLFac26VzAiY\"",
    "mtime": "2021-09-23T13:50:35.904Z",
    "path": "../public/_nuxt/e088a56.js"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/projects/Project2021/pc/PROJECTS/LABS/javascript/nuxt3/dist" + "/" + "1632405033";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
