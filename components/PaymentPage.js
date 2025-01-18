"use client";
import React, { useEffect, useState ,useRef } from "react";
import Script from "next/script";
import { initiate, fetchUser, fetchPayments } from "@/action/useractions";
import { useSession } from "next-auth/react";
import Loader from "./Loader";
import CoverpicSkeleteon from "./CoverpicSkeleteon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


const PaymentPage = ({ username }) => {
  const { data: session } = useSession();
  const [paymentform, setPaymentform] = useState({name: "" , message: "" , amount: ""});
  const [currentUser, setCurrentUser] = useState({});
  const [payment, setPayment] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchRef = useRef()

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
      toast("Payment Has Been made", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, []);

  const handelChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    setLoading(true);
    let u = await fetchUser(username);
    setCurrentUser(JSON.parse(u));
    let paymentAmount = await fetchPayments(username);
    setPayment(JSON.parse(paymentAmount));
    setLoading(false);
  };

  const pay = async (amount) => {
    // get the order id
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: currentUser?.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Buy me a Snack", //your business name
      description: "Test Transaction",
      image: "./tea.gif",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: username, //your customer's name
        email: session?.user.email,
        contact: "9999999999", //your customer's phone number
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      {/* ***************************************************************************************************************************************** */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      />
      {loading && <Loader />}
      {currentUser.error && (
        <div className="text-center text-4xl my-20 font-extrabold">
          User {username} not found ☹
        </div>
      )}
      {!currentUser.error && (
        <>
          <div className="bg-cover relative w-full">
            {currentUser.coverpicture ? (
              <img
                className="object-cover h-40 md:md:h-[21rem] w-full"
                src={currentUser.coverpicture}
                alt="coverImage"
               onError={(e) => (e.target.src = <CoverpicSkeleteon/>)}
              />
            ) : (
              <CoverpicSkeleteon />
            )}

            {/* ******************************************* */}
            <div className=" size-20 md:size-32 object-center absolute mx-auto right-0 left-0 -bottom-12 md:-bottom-16 border-2 overflow-hidden border-white rounded-full bg-black">
              <img
                className="object-cover size-20 md:size-32 "
                src={
                  currentUser.profilpicture
                    ? currentUser.profilpicture
                    : "./avatar.gif"
                }
                alt="avatarImage"
                onError={(e) => (e.target.src = "./avatar.gif")}
              />
            </div>
          </div>
          {/* ******************************************************************************************************** */}
          <div className="info flex items-center justify-center py-20 flex-col gap-2 ">
            <div className="font-bold text-lg">@{username}</div>
            <div className="text-slate-300">
              let&apos;s Help {username} to get a cup of tea
            </div>
            <div className="text-slate-400">
            {payment.length} supporters . ₹{payment.reduce((a,b)=>(a+b.amount), 0)} raised 
            </div>

            {/* *********************************************************************************** */}

            <div className="payment flex flex-col-reverse md:flex-row gap-3 container mt-12 px-5 md:px-0 ">
              <div className="supporters w-full bg-slate-800/40 rounded-lg backdrop-blur-sm h-[28rem] p-5 md:p-10 overflow-auto">
                {/* list of all supportes as a leaderboard */}
                <h2 className="text-xl font-bold mb-5">Supporters</h2>

                {payment.length === 0 && (
                  <div className="text-center font-extrabold text-lg">
                    No supporters yet ☹
                  </div>
                )}
                <ul className="mx-2.5 md:mx-5 text-md">
                  {payment.map((p) => (
                    <li key={p._id} className="my-4 flex gap-2 items-center">
                      <img src="./avatar.gif" alt="user avatar" width={28} />
                      <span className="text-sm md:text-base">
                        {p.name} donated{" "}
                        <span className="font-semibold">₹{p.amount}</span> with
                        a message &quot;{p.message}&quot;
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* **********************************************************************************************/}
              <div className="makePayment w-full bg-slate-800/40 rounded-lg backdrop-blur-sm p-10">
                <h2 className="text-xl font-bold mb-5">Make a payment</h2>
                <form action={()=>{searchRef.current.reset()}} ref={searchRef} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-2 rounded-md bg-slate-800/40"
                    onChange={handelChange}
                    value={paymentform.name}
                    name="name"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Message"
                    className="p-2 rounded-md bg-slate-800/40"
                    onChange={handelChange}
                    value={paymentform.message}
                    name="message"
                    required
                  />
                  <input
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Amount"
                    className="p-2 rounded-md bg-slate-800/40"
                    onChange={handelChange}
                    value={paymentform.amount}
                    name="amount"
                  />
                  {/* <button className='p-2 bg-slate-700/70 rounded-md hover:bg-slate-600'>Support</button> */}
                  <button
                    type="button"
                    className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 disabled:from-gray-500 disabled:cursor-not-allowed disabled:shadow-gray-800/80 disabled:hover:bg-gradient-to-r"
                    disabled={
                      paymentform.name?.length < 3 ||
                      paymentform.message?.length < 5 ||
                      paymentform.amount?.length < 1
                    }
                    onClick={() => pay(paymentform.amount * 100)}
                  >
                    Support
                  </button>
                </form>
                {/* or choose from these options */}
                <div className="flex gap-3 mt-5">
                  <button
                    className="p-2 bg-slate-600/40 rounded-md hover:bg-slate-700/90 disabled:cursor-not-allowed disabled:bg-slate-800/40"
                    onClick={() => pay(10 * 100)}
                    disabled={
                      paymentform.name?.length < 3 ||
                      paymentform.message?.length < 5
                    }
                  >
                    Pay ₹10
                  </button>
                  <button
                    className="p-2 bg-slate-600/40 rounded-md hover:bg-slate-700/90 disabled:cursor-not-allowed disabled:bg-slate-800/40"
                    onClick={() => pay(20 * 100)}
                    disabled={
                      paymentform.name?.length < 3 ||
                      paymentform.message?.length < 5
                    }
                  >
                    Pay ₹20
                  </button>
                  <button
                    className="p-2 bg-slate-600/40 rounded-md hover:bg-slate-700/90 disabled:cursor-not-allowed disabled:bg-slate-800/40"
                    onClick={() => pay(30 * 100)}
                    disabled={
                      paymentform.name?.length < 3 ||
                      paymentform.message?.length < 5
                    }
                  >
                    Pay ₹50
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PaymentPage;
