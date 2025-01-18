import HomePage from "@/components/HomePage";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react";
import Loader from "@/components/Loader";


export default function Home() {
  return (
    <>
      <SpeedInsights/>
      <Analytics/>
      <Suspense fallback={<Loader/>}>
      <HomePage />
    </Suspense>
    </>
  );
}
