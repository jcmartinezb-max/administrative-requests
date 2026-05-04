import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// Se utilizan variables de entorno con el prefijo EXPO_PUBLIC_ 
// para que el compilador de Expo las reconozca en la versión web.
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || ''; 
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);