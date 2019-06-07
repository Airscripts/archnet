/**
 * Importing dependencies.
 */
const express = require("express");
const os = require("os");

/**
 * Creating the rootRouter.
 */
const rootRouter = express.Router();

function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/**
 * Creating the endpoint.
 */
rootRouter.route('/')
.get(async (req: any, res: any, next: any) => {
  res.status(200);

  let specsList: Object[] = [
    os.arch(), 
  ];

  await sleep(5000);
  res.send(specsList);
})

.post((req: any, res: any, next: any) => {
  res.status(303);
  res.redirect('/');
})

.put((req: any, res: any, next: any) => {
  res.status(303);
  res.redirect('/');
})

.delete((req: any, res: any, next: any) => {
  res.status(303);
  res.redirect('/');
});

module.exports = rootRouter;

export {};