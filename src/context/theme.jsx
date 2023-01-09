import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemProvider (props) {
    const [darkMode, setDarkMode] = useState(false);

    const changeTheme = () => {
        return setDarkMode(!darkMode);
      };

  return (
    <ThemeContext.Provider value={{ darkMode: darkMode, changeTheme: changeTheme }}>
        {props.children}
    </ThemeContext.Provider>
  );
}