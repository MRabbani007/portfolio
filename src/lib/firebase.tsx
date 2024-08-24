import { initializeApp } from "firebase/app";
import {
  collection,
  getCountFromServer,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { MetaData } from "../../types";
import { getBytes, getMetadata, getStorage, ref } from "firebase/storage";
// import { extractMdx } from "./utils";

const firebaseConfig = {
  apiKey: "AIzaSyD_tToQ_1sWj3zBc52yRTtjz9aW_7ss1Hw",
  authDomain: "myblog-51c80.firebaseapp.com",
  projectId: "myblog-51c80",
  storageBucket: "myblog-51c80.appspot.com",
  messagingSenderId: "927017388934",
  appId: "1:927017388934:web:4f4e27227a29fd55b33a07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const firestore = getFirestore(app);

export async function getBlogs(page: number = 1) {
  try {
    const count_q = query(
      collection(firestore, "blogs"),
      where("status", "==", "published")
      // orderBy("updatedAt", "desc")
    );

    const q = query(
      collection(firestore, "blogs"),
      where("status", "==", "published")
      // orderBy("updatedAt", "desc"),
      // orderBy("title", "asc")
    );

    const querySnapshot = await getDocs(q);
    const response = await getCountFromServer(count_q);

    // const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    const blogs: MetaData[] = [];
    querySnapshot.forEach((doc) => {
      blogs.push({ ...doc.data(), _id: doc.id } as MetaData);
    });

    return { count: response.data().count, blogs };
  } catch (error) {
    console.log(error);
    return { count: 0, blogs: [] };
  }
}

export async function getBlogByName(slug: string) {
  try {
    const q = query(collection(firestore, "blogs"), where("slug", "==", slug));
    let data: MetaData[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ ...(doc.data() as MetaData), _id: doc.id });
    });

    const storageRef = ref(storage, `/blogs/${data[0].id}.mdx`);

    // const url = await getDownloadURL(storageRef)
    const file = await getBytes(storageRef);
    const meta = await getMetadata(storageRef);

    // const t = new Blob([data]);
    var enc = new TextDecoder("utf-8");
    const rawMDX = enc.decode(file);

    // const { content } = await extractMdx(rawMDX);

    return { meta: data[0], content: rawMDX };
  } catch (error) {
    console.log(error);
    return null;
  }
}
