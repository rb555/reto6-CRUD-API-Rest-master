import { createContext, useContext } from "react";

const ReviewCoontext = createContext();

export const useReviews = () => {
    const context = useContext(ReviewCoontext);

    if(!context) {
        throw new Error("useReviews debe utilizarse en el ReviewProvider");

    }

    return context;
}

export function ReviewProvider({children}){
    return (
        <ReviewCoontext.Provider value={{}}>
            {children}
        </ReviewCoontext.Provider>
    );
}