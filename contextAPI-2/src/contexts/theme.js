import {createContext , useContext} from "react";

export const ThemeContext = createContext(
    // You can add teh default value to teh cntext as well 
    // So that when teh context is created for teh first time - thsi is the default value whihc is set
    {
        themeMode : "light",
        darkTheme : () => {},
        lightTheme : () => {},

    }
)

export const ThemeProvider = ThemeContext.Provider

// cuystom hook -- using thsi hook we directly get the access to the use context so we do not need to import both of them, --- using thsi function - we have access to all teh variables & metods of the context 
export default function useTheme(){
    return useContext(ThemeContext);
}