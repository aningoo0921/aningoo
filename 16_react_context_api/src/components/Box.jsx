import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Box() {
    // context api를 사용해서 전역적으로 접근할 수 있는 context에 접근하겠다
    // 인자로 전달되는 ThemeContext : 작성되어 있는 context 중 ThemeContext에 접근하겠다
    const {isDark, setIsDark} = useContext(ThemeContext)
    return (
    <>
    <h2>ThemeContext 사용</h2>
    <div style={isDark ? { backgroundColor: 'black', color: 'white' } : {}}>
        Theme : {isDark ? '다크 모드' : '라이트 모드'}
    </div>
    <button onClick={() => setIsDark(!isDark)}>테마 변경</button>
    </>
  );
}