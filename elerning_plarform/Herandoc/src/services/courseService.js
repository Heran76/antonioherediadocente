import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const createCourse = async (courseData) => {
  try {
    const docRef = await addDoc(collection(db, "courses"), {
      ...courseData,
      createdAt: new Date(),
      isPublished: false
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding course: ", e);
  }
};