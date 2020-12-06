import React, { useEffect } from "react";

export const useOutsideClick =(ref, outsideClick)=> {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setTimeout(()=> outsideClick(), 200)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};