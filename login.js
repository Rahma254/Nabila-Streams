import { supabase } from "./supabase.js";

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  document.getElementById("message").textContent = error ? error.message : "Login sukses!";
  if (!error) window.location.href = "home.html";
}

async function signup() {
  const email = prompt("Masukkan email untuk daftar:");
  const password = prompt("Masukkan password:");
  const { error } = await supabase.auth.signUp({ email, password });

  alert(error ? error.message : "Registrasi sukses! Silakan login.");
}
