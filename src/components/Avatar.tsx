import {Avatar as ChakraAvatar, Flex} from "@chakra-ui/react";
import type {FC, ReactNode} from "react";

export interface XlpAvatarProps {
    /** The name of the person (used for fallback initials) */
    name?: string;
    /** The image source */
    src?: string;
    /** The size of the avatar */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** The color palette for fallback */
    colorPalette?: 'gray' | 'red' | 'green' | 'blue' | 'teal' | 'pink' | 'purple' | 'cyan' | 'orange';
    /** The variant of the avatar */
    variant?: 'solid' | 'subtle' | 'outline';
    /** The shape of the avatar */
    shape?: 'full' | 'square' | 'rounded';
    /** Border radius (only applies when shape is not 'full') */
    borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

/**
 * XlpAvatar - A user avatar component
 */
export const XlpAvatar: FC<XlpAvatarProps> = ({
                                                  name,
                                                  src,
                                                  size = 'md',
                                                  colorPalette = 'gray',
                                                  variant = 'solid',
                                                  shape = 'full',
                                                  borderRadius,
                                              }) => {
    return (
        <ChakraAvatar.Root
            size={size}
            colorPalette={colorPalette}
            variant={variant}
            shape={shape}
            borderRadius={borderRadius}
        >
            <ChakraAvatar.Fallback name={name}/>
            {src && <ChakraAvatar.Image src={src} alt={name}/>}
        </ChakraAvatar.Root>
    );
};

export interface XlpAvatarGroupProps {
    /** Maximum number of avatars to show */
    max?: number;
    /** The size of avatars */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Avatar items */
    children: ReactNode;
}

/**
 * XlpAvatarGroup - A group of avatars
 */
export const XlpAvatarGroup: FC<XlpAvatarGroupProps> = ({
                                                            children,
                                                        }) => {
    return (
        <Flex>
            {children}
        </Flex>
    );
};
