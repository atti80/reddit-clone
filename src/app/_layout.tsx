import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
    return (
        <ClerkProvider tokenCache={tokenCache}>
            <Slot />
            <StatusBar style="auto" />
        </ClerkProvider>
    )
}