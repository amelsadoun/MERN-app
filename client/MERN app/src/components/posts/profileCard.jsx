import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClub } from "../../actions/clubs";

export default function ProfileCard({ clubId }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getClub(clubId));
    setLoading(false);
  }, [dispatch, clubId]);

  const club = useSelector((state) => state.clubs);
  console.log(club);

  return (
    <div className="flex flex-col gap-3 w-44 align-middle text-center bg-slate-100 self-top h-min desktop:flex-[20%] desktop:mx-10 mx-5 -mt-10 p-5 justify-around rounded-lg shadow-md">
      {loading ? (
        <>loading...</>
      ) : (
        <>
          <img
            src={club?.imageURL}
            className="w-[15vw] h-[15vw] rounded-[100%] self-center"
            alt="profile"
          />
          <h1 className="text-xl font-semibold">{club?.name}</h1>
          {/* <h1 className="text-lg font-medium">{club?.email}</h1> */}
          <h1 className="text-sm">{club?.description}</h1>
        </>
      )}
    </div>
  );
}
