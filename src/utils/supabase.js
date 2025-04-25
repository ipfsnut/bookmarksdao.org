import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test connection with a simpler query
supabase.from('early_signups').select('id', { count: 'exact' })
  .limit(1)
  .then(({ data, error, count }) => {
    if (error) {
      console.error('Supabase connection error:', error);
    } else {
      console.log('Supabase connection successful, found', count, 'records');
    }
  })
  .catch(err => {
    console.error('Supabase initialization error:', err);
  });
