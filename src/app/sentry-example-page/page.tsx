"use client";

import Head from "next/head";
import * as Sentry from "@sentry/nextjs";

export default function Page() {
  throw new Error("Soething Went Wrong");
  return <div></div>;
}
