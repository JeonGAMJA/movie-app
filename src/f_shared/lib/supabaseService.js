import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const supabaseSignup = async ({ email, password, onSuccess }) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      throw new Error("이미 가입된 아이디입니다. 다른 아이디를 입력해주세요.");
    }
    console.log("가입 성공");
    onSuccess?.(data);
  } catch (err) {
    console.log(err.message);
  }
};

export const supabaseLogout = async ({ onSuccess }) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error("로그아웃에 실패했습니다.");
    }
    console.log("로그아웃 성공!");
    onSuccess?.();
  } catch (err) {
    console.log(err.message);
  }
};

export const supabaseLogin = async ({ email, password, onSuccess }) => {
  console.log(email, password);
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new Error("로그인에 실패했습니다.");
    }
    console.log("로그인 성공!");
    onSuccess?.(data);
  } catch (err) {
    console.log(err.message);
  }
};

export const kakaoLogin = async ({ onSuccess }) => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });
    if (error) {
      throw new Error("카카오 로그인에 실패했습니다.");
    }
    onSuccess?.(data);
  } catch (err) {
    console.log(err.message);
  }
};

export const addToWishlist = async (userId, itemId) => {
  const { data, error } = await supabase
    .from("wishlist")
    .insert([{ user_id: userId, item_id: itemId }]);

  if (error) {
    console.error("찜 추가 실패: ", error.message);
    return null;
  }
  return data;
};

export const removeFromWishlist = async (userId, itemId) => {
  const { data, error } = await supabase
    .from("wishlist")
    .delete()
    .match({ user_id: userId, item_id: itemId });

  if (error) {
    console.error("찜 삭제 실패: ", error.message);
    return null;
  }
  return data;
};

export const getWishlist = async (userId) => {
  const { data, error } = await supabase
    .from("wishlist")
    .select("item_id, created_at")
    .eq("user_id", userId);

  if (error) {
    console.error("찜 목록 조회 실패: ", error.message);
    return [];
  }
  return data;
};
