import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    updatePassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    if (!email.endsWith('@mietjammu.in')) {
        alert('Accounts outside MIET Jammu organization are not allowed in this app.');
        throw new Error('This email is not allowed for registration. Only @mietjammu.in emails can create an account.');
    }

    return createUserWithEmailAndPassword(auth, email, password);
};


export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!user.email.endsWith('@mietjammu.in')) {
        alert('Accounts outside MIET Jammu organization are not allowed in this app.');
        throw new Error('This email is not allowed for registration. Only @mietjammu.in emails can sign in.');
    }

};


export const doSignOut = () => {
    return auth.signOut();
};

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`,
    });
};