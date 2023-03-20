import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as splashScreen from "expo-splash-screen";
import { useCallback } from "react";

splashScreen.preventAutoHideAsync();


const Layout = ()=>{
    const [fontsLoaded] = useFonts({
        DMBold : require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium : require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular : require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async()=>{
        if(fontsLoaded){
            await splashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if(!fontsLoaded) return null;
    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout;