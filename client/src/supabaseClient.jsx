import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zhzurqyyihvykxriiunu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoenVycXl5aWh2eWt4cmlpdW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5NDk0MTgsImV4cCI6MjA0MjUyNTQxOH0.vyzsCuK86CR3O5Gf7DWwXwxkLIe4tsqYk2NYSeadRoE';
export const supabase = createClient(supabaseUrl, supabaseKey);
