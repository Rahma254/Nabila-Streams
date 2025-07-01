import { supabase } from "./supabase.js";

export async function postComment(song_id, user_id, text) {
  await supabase.from("comment").insert([{ song_id, user_id, text, created_at: new Date() }]);
}

export async function getComments(song_id) {
  let { data } = await supabase.from("comment").select("*").eq("song_id", song_id).order("created_at", { ascending: false });
  return data;
}
