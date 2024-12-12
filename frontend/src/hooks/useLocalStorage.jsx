// Author: @yukiroow Harry Dominguez
import { useState } from "react";

/**
 * This hook provides an interface to save information
 * to the Local Browser Storage. Data passed through the setter
 * are automatically parsed.
 */
export const useLocalStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyName);
            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(
                    keyName,
                    JSON.stringify(defaultValue)
                );
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });
    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) {
            console.log(err);
        }
        setStoredValue(newValue);
    };
    return [storedValue, setValue];
};
