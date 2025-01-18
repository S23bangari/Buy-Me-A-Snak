import PaymentPage from "@/components/PaymentPage";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import React from "react";

const Username = ({ params }) => {
  return (
    <>
    <Suspense fallback={<Loader/>}>
      <PaymentPage username={params.username}/>
    </Suspense>
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} | Buy me a Snack`,
  };
}