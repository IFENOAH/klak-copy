import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Temporarily disable smooth scrolling
        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";

        // Scroll instantly to the top
        window.scrollTo(0, 0);

        // Restore smooth scrolling
        document.documentElement.style.scrollBehavior = originalScrollBehavior;

    }, [pathname]);

    return null;
};

export default ScrollToTop;
