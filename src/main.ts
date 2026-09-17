declare global {
    interface Window {
        __ZENSO_READY__?: boolean;
    }
}

function markReady(): void {
    window.__ZENSO_READY__ = true;
}

const img = document.getElementById('zenso-image') as HTMLImageElement | null;

if (img && typeof img.addEventListener === 'function') {
    if (img.complete) {
        markReady();
    } else {
        img.addEventListener('load', markReady);
        img.addEventListener('error', markReady);
    }
} else {
    markReady();
}
