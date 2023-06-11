import { serve } from "./deps.ts";

const CHECKERS_ROUTE = new URLPattern({ pathname: "/check" });

async function handler(req: Request): Promise<Response> {
  const match = CHECKERS_ROUTE.exec(req.url);

  if (match) {
    await Promise.resolve();
    return new Response(`Sent!`);
  }

  return new Response("Not found", { status: 404 });
}

serve(handler);
