// globe.js — exposes window.initGlobe() for main.js to call after component injection
window.initGlobe = function () {
    const container = document.getElementById('globe-container');
    if (!container || typeof Globe === 'undefined') return;

    const points = [
        { lat: -35.43, lng: -71.65, label_es: 'Talca, Chile',         label_en: 'Talca, Chile',         info: 'PF Alimentos · Universidad de Talca',  color: '#4f8ef7', size: 0.6 },
        { lat: -33.41, lng: -70.57, label_es: 'Las Condes, Santiago', label_en: 'Las Condes, Santiago', info: 'Empresas Iansa (x2)',                  color: '#3fb950', size: 0.6 },
        { lat:  37.09, lng: -95.71, label_es: 'EE.UU. (Remoto)',      label_en: 'USA (Remote)',         info: 'Outlier AI — RLHF Specialist',        color: '#a78bfa', size: 0.5 }
    ];

    const arcs = [
        { startLat: -35.43, startLng: -71.65, endLat:  37.09, endLng: -95.71, color: ['#4f8ef7', '#a78bfa'] },
        { startLat: -33.41, startLng: -70.57, endLat: -35.43, endLng: -71.65, color: ['#3fb950', '#4f8ef7'] }
    ];

    const globe = Globe()(container)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .pointsData(points)
        .pointLat('lat').pointLng('lng').pointColor('color')
        .pointRadius('size').pointAltitude(0.06)
        .pointLabel(d => {
            const currentLang = (typeof lang !== 'undefined') ? lang : 'es';
            const locName = currentLang === 'en' ? d.label_en : d.label_es;
            return `
            <div style="background:rgba(13,17,23,0.92);border:1px solid rgba(79,142,247,0.4);border-radius:8px;padding:10px 14px;font-family:Inter,sans-serif;min-width:160px;">
                <div style="font-weight:700;color:#e6edf3;font-size:0.9rem;margin-bottom:4px;">${locName}</div>
                <div style="color:#8b949e;font-size:0.8rem;">${d.info}</div>
            </div>
        `})
        .arcsData(arcs)
        .arcStartLat('startLat').arcStartLng('startLng')
        .arcEndLat('endLat').arcEndLng('endLng')
        .arcColor('color').arcAltitude(0.25).arcStroke(0.5)
        .arcDashLength(0.4).arcDashGap(0.2).arcDashAnimateTime(2000)
        .width(container.clientWidth || 480).height(480)
        .atmosphereColor('#4f8ef7').atmosphereAltitude(0.12);

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
    globe.controls().enableZoom = false;
    globe.pointOfView({ lat: -20, lng: -70, altitude: 2.2 }, 0);

    document.querySelectorAll('.globe-location-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.globe-location-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            globe.controls().autoRotate = false;
            globe.pointOfView({
                lat: Number.parseFloat(card.dataset.lat),
                lng: Number.parseFloat(card.dataset.lng),
                altitude: 1.8
            }, 1200);
            setTimeout(() => { globe.controls().autoRotate = true; }, 4000);
        });
    });

    window.addEventListener('resize', () => {
        globe.width(container.clientWidth || 480).height(480);
    });
};
