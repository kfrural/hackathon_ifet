import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'
import { AsyncStorage } from '@react-native-async-storage/async-Storage'

export const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL || "", 
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "", 
    {
        auth: {
            storage: AsyncStorage,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
        },
    }
);