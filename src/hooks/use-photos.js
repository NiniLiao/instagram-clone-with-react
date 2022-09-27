import { useStat, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getPhotos, getUserByUserId } from "../services/firebase";

export default function usePhotos() {
  const [photos, setPhotos] = useStat(null);
  const {
    user: { uid: userId = '' }
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimeLinePhotos() {
      // example: [2, 1, 5] <- 2 being owell
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];

      console.log('following', following);

      // does the user actually follow people?
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }
    }

    console.log(userId);
    // getTimeLinePhotos()
  }, []);

  return { photos };
}