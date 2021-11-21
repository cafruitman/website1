let isOpen = false;
        let hamburger = document.querySelector('#header__hamburger');
        let dropdown = document.querySelector('#header__dropdown');
        hamburger.addEventListener('click', () => {
            isOpen = !isOpen
            if(isOpen) {
                dropdown.style.display = 'flex';
                hamburger.style.backgroundColor = 'blue';
            } else {
                dropdown.style.display = 'none';
                hamburger.style.backgroundColor = 'lightskyblue';
            }
        })

        window.addEventListener("resize", () => {
            if (document.documentElement.clientWidth > 660) {
                dropdown.style.display = 'none';
                hamburger.style.backgroundColor = 'lightskyblue';
            }
        })