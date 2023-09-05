// 📌 이벤트 핸들러는 호출이 아니라 전달되어야 한다. onClick={handleClick()} (X) onClick={handleClick} (O)

export default function LightSwitch() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    return (
        <button onClick={handleClick}>
            Toggle the lights
        </button>
    );
}