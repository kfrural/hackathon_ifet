import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://noifcptikkvbxzrqswiu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vaWZjcHRpa2t2Ynh6cnFzd2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMDg0NDgsImV4cCI6MjAzOTc4NDQ0OH0.rNfEA1rWvAR_ZOlck1lx3f9E1fuuGK0WT3agX23qB-Q'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);