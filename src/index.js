/// <reference types="@fastly/js-compute" />
import './globals.js'
import { includeBytes } from "fastly:experimental";
import dotenv from "dotenv";

let env = new TextDecoder('utf-8').decode(includeBytes('.env'));
console.log(env);

env = dotenv.parse(env)
console.log(env);

addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event) {
  return new Response("OK", { status: 200 });
}
