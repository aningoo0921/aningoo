import useToggle from "../hooks/useToggle";
export default function CustomHook () {
    const [isShow, setIsShow] = useToggle();

    return <>
    <h1>커스펌 훅 사용</h1>
    <button>useToggle 사용하기</button>
    {isShow && <div>안녕!</div>}
    </>
}