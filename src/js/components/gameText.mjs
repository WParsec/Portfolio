export function writeText() {
    const text = `
    Hello there!
    I’m Tom, nice to meet me. It seems you found my humble portfolio. Go ahead, snoop around! 
    If you like what you see, why don’t you contact me for a casual chat?
    `;
    let current = 0;

    function write() {
        const elem = document.querySelector("#textContainer");
        elem.textContent = elem.textContent + text.charAt(current);
        current++;
        if (current < text.length)
            window.setTimeout(write, 10);
    };
    setTimeout(write, 700);
}

