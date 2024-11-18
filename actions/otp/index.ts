import { Router } from "expo-router";

export const sendOTP = (
  setLoading: (value: boolean) => void, // Typing setLoading
  router: Router, // Typing router from expo-router
  phoneNumber: string // Typing phoneNumber as a string
): void => {
  // Function doesn't return anything
  setTimeout(() => {
    setLoading(true);
    router.push(`/verify/${phoneNumber}`); // Navigate to the root page
  }, 2000);
};
