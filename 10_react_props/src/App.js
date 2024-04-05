import FuncProps from "./components/FuncProps";
import ClassProps from "./components/ClassProps";
function App() {
  const sayHi = () => {
    alert ('안녕');
  };

  return (
    <div className="App">
      {/* <FuncProps weather='sunny' feeling='happy' /> */}
      
      {/* defaultProps 사용 */}
      {/* <FuncProps feeling={true} /> */}
      {/* PropTypes 사용 */}
      {/* props로 전달하는 값이 문자열인 경우에는 ''로 갑싸 전달 */}
      {/* 이외의 데이터 타입은 {}로 감싸 전달 */}
      {/* <FuncProps feeling='exciting' /> */}
      <FuncProps>안녕?</FuncProps>
      <FuncProps>{sayHi}</FuncProps>
      <FuncProps>
        <div>안녕안녕</div>
        <div>자니?</div>
      </FuncProps>
      </div>
  );
}

export default App;
