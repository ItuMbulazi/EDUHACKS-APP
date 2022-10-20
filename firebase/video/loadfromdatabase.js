import { collection, getDocs } from "firebase/firestore"; 


export default async function load(){
  const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
}
