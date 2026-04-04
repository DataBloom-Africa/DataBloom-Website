import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qordqgpdgvoxthdpzrif.supabase.co';
const supabaseKey = 'sb_publishable_osfWtqXnpm6YSCX6HIk3TA_NHCvJW7U';

export const supabase = createClient(supabaseUrl, supabaseKey);
