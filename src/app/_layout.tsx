import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <ClerkProvider tokenCache={tokenCache}>
                <ClerkLoaded>
                    <Slot />
                    <StatusBar style="auto" />
                </ClerkLoaded>
            </ClerkProvider>
        </QueryClientProvider>
    )
}