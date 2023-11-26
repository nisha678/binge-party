import { useEffect } from "react";

export function useKey(key, action) {
  //for Escape keypress event
  useEffect(
    function () {
      function callback(e) {
        if (e.code.lowerCase === key.lowerCase) {
          action();
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
