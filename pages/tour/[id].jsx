import Head from "next/dist/shared/lib/head";
import BookNow from "../../Components/BookNow";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SixButton from "../../Components/SixButton";
import TourDetails from "../../Components/TourDetails";
// import { getSession, useSession, signOut } from "next-auth/react"
import {useRouter} from 'next/router'

const tourr = () => {
  // const { data: session } = useSession()
    let route = useRouter()
    let {id} = route.query
    console.log(id);
    return (
      <div>
      <Head>
        <title>Booking - Travel Next -The Best Travel Agency</title>
      </Head>
        <div>
          <div className="absolute z-50 w-full">
            <Navbar />
          </div>
          <div>
            <TourDetails />
          </div>
        </div>

        <div className="lg:flex justify-between gap-10 w-full px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div>
            <SixButton />
          </div>
          <div className="shadow-2xl">
            <BookNow />
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
};

export default tourr;

// export async function getServerSideProps({ req }){
//   const session = await getSession({ req })

//   if(!session){
//       return {
//           redirect : {
//               destination : "../user/login",
//               premanent: false
//           }
//       }
//   }
//   // authorize user return session
//   return {
//       props: { session }
//   }
// }