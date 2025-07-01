import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { supabaseUrl, supabaseKey } from "./config.js";

export const supabase = createClient(supabaseUrl, supabaseKey);
