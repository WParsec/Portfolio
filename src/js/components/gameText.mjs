
export function writeText() {
    const text = `
    Hello there!
    I’m Tom, nice to meet me. 
    It seems you found my humble portfolio. Go ahead, snoop around! 
    `;

    const secondText = `Oh, and if you see a banana somewhere, don't touch it.                            
        Trust me.`

    let current = 0;
    let current2 = 0;

    function write() {
        const container = document.querySelector("#textContainer");
        container.textContent += text.charAt(current);
        current++;
        if (current < text.length)
            window.setTimeout(write, 10);
    };

    function writeSecond() {
        const secondContainer = document.querySelector("#secondTextContainer");
        secondContainer.textContent += secondText.charAt(current2);
        current2++;
        if (current2 < secondText.length) {
            window.setTimeout(writeSecond, 25);
        }
    }
    setTimeout(write, 700);
    // setTimeout(writeSecond, 3000);
}

