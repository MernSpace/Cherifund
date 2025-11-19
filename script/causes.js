const slider = document.getElementById('slider');
        let position = 0;
        const speed = 1;
        const cardWidth = 316; // 300px + 16px gap
        const totalCards = 4;

        function autoScroll() {
            position += speed;
            
            if (position >= cardWidth * totalCards) {
                position = 0;
                slider.style.transition = 'none';
                slider.style.transform = `translateX(0px)`;
                
                setTimeout(() => {
                    slider.style.transition = 'transform 0.5s ease-linear';
                }, 50);
            } else {
                slider.style.transform = `translateX(-${position}px)`;
            }
            
            requestAnimationFrame(autoScroll);
        }

        autoScroll();