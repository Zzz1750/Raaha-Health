'use client'
import { useSelector } from "react-redux";
// export const metadata = {
//   title: "Raaha Health",
// };

export default function Home() {
  const  user  = useSelector((state) => state.auth.user);
  return (
    <div>
      {user? (<p>{user.name}</p>) : (<p>No one signed in</p>)}
    </div>
  );
}
