import { util } from './util.js';

export const progress = (() => {

    const info = document.getElementById('progress-info');
    const bar = document.getElementById('progress-bar');

    const total = 300; // Total time in seconds
    let loaded = 0;

    const startProgress = () => {
        const interval = 1; // Interval in milliseconds (1000 milliseconds = 1 second)

        const progressInterval = setInterval(() => {
            loaded += 1;

            bar.style.width = Math.min((loaded / total) * 100, 100) + "%";
            // info.innerText = `Loading (${loaded}/${total}) [${parseInt((loaded / total) * 100).toFixed(0)}%]`;
            info.innerText = `${parseInt((loaded / total) * 100).toFixed(0)}%`;

            if (loaded >= total) {
                clearInterval(progressInterval);
                util.show(); // Assuming util.show() is a function to show something when loading is completed.
            }
        }, interval);
    };

    info.style.display = 'block';
    startProgress();
})();