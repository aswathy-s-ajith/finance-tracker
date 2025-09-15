import { createClient } from '@supabase/supabase-js'

// Vite exposes environment variables on this special `import.meta.env` object.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
