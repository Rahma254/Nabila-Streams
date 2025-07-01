import { supabase } from "./supabase.js";

export async function submitView(song_id, user_id) {
  await supabase.from("song_analytics").insert([{ song_id, user_id, viewed_at: new Date() }]);
}
