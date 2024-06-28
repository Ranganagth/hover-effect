document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('./tap.mp3');
    const cubes = document.querySelectorAll('.cube');

    cubes.forEach(cube => {
        cube.addEventListener('click', () => {
            audio.currentTime = 0;
            audio.play();
        });
    });
});
