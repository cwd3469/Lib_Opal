export function setupCounter(element: HTMLButtonElement) {
    let counter = 0;
    const setCounter = (count: number) => {
        counter = count;
        element.innerHTML = `count is ${counter}`;
    };

    const fetchPost = async () => {
        await fetch('http://127.0.0.1:3000', {
            method: 'get',
        }).then((response) => console.log(response));
    };

    element.addEventListener('click', fetchPost);
    setCounter(0);
}
