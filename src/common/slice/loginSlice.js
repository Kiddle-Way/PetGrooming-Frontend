import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, setCookie, removeCookie } from "../util/cookieUtil";

const initState = {
  m_email: "",
};

const loadMemberCookie = () => {  //쿠키에서 로그인 정보 로딩  
  const memberInfo =  getCookie("member") 
  //닉네임 처리  
  if(memberInfo && memberInfo.m_name) { 
    memberInfo.nickname = decodeURIComponent(memberInfo.m_name) 
  } 
  return memberInfo 
}

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: loadMemberCookie() || initState, // 쿠키가 없으면 초기값 사용 
  reducers: {
    login: (state, action) => {
      console.log("로그인.....");
      //{email, pw로 구성 }
      const data = action.payload;

      //새로운 상태
      return { m_email: data.m_email };
    },
    logout: (state, action) => {
      console.log("로그아웃....")
      removeCookie("member")

      return { ...initState }; // 추가
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled : 완료");

        const payload = action.payload;
        //정상적인 로그인시에만 저장
        if (!payload.error) {
          console.log("쿠키 저장");
          setCookie("member", JSON.stringify(payload), 1); //1일
        }
        return payload;
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending : 처리중");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected : 오류");
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
