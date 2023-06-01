import { HEIGHT, images, WIDTH } from "assets"
import React from "react";
import { Image } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export function Logo() {
    return (
        <Image style={{alignSelf: 'center', resizeMode: 'cover'}} source={images.logo}/>
    )
}
