const photo = [
    { src: "/images/portfolio/DSC01536.webp", className:"col-span-2" },
    { src: "/images/portfolio/DSC01679.webp", className:"col-span-2" },
    { src: "/images/portfolio/DSC01776.webp", className:"col-span-2" },
    { src: "/images/portfolio/DSC016888.webp",className:"col-span-2" },
    { src: "/images/portfolio/DSC03602.webp", className:"col-span-1" },
    { src: "/images/portfolio/DSC03653.webp", className:"col-span-1" },
    { src: "/images/portfolio/DSC03720.webp", className:"col-span-1" },
    { src: "/images/portfolio/DSC02269.webp", className:"col-span-1", objectFit:{objectPosition:"56% 0%"} },
    { src: "/images/portfolio/DSC023611.webp",className:"col-span-2" },
    { src: "/images/portfolio/DSC02255.webp", className:"col-span-2", objectFit:{objectPosition:"96% 0%"} },
    { src: "/images/portfolio/DSC02282.webp", className:"col-span-2", objectFit:{objectPosition:"52% 0%"} },
    { src: "/images/portfolio/DSC02297.webp", className:"col-span-2", objectFit:{} },
    { src: "/images/portfolio/DSC03659.webp", className:"col-span-1", objectFit:{objectPosition:"83% 0%"} },
    { src: "/images/portfolio/DSC037122.webp", className:"col-span-1" },
    { src: "/images/portfolio/DSC04901.webp", className:"col-span-1"},
    { src: "/images/portfolio/DSC05110.webp", className:"col-span-1"},
    { src: "/images/portfolio/DSC05047.webp", className:"col-span-1", objectFit:{objectPosition:"5% 0%"}},
    { src: "/images/portfolio/DSC05562.webp", className:"col-span-3"},
    { src: "/images/portfolio/DSC05707.webp", className:"col-span-2"},
    { src: "/images/portfolio/DSC05724.webp", className:"col-span-2"},
    { src: "/images/portfolio/DSC05834.webp", className:"col-span-2"},
    { src: "/images/portfolio/DSC06046.webp", width: 3, height: 4 },
    { src: "/images/portfolio/DSC06142.webp", width: 3, height: 4 },
    { src: "/images/portfolio/DSC06280.webp", width: 3, height: 4 },
    { src: "/images/portfolio/DSC06371.webp", width: 3, height: 4 },
    { src: "/images/portfolio/DSC06747.webp", className:"col-span-2", objectFit:{objectPosition:"0% 0%"}},
    { src: "/images/portfolio/DSC06705.webp", className:"col-span-1"},
    { src: "/images/portfolio/DSC06916.webp", className:"col-span-2", objectFit:{objectPosition:"0% 0%"}},
    { src: "/images/portfolio/DSC07217.webp", className:"col-span-1"},
    { src: "/images/portfolio/DSC07106.webp", className:"col-span-2"},
    { src: "/images/portfolio/DSC07289.webp", className:"col-span-2"},
    { src: "/images/portfolio/DSC07670.webp", className:"col-span-2"},
    { src: "/images/portfolio/DSC07646.webp", className:"col-span-2"},
    { src: "/images/portfolio/DSC07634.webp", className:"col-span-3"},
    { src: "/images/portfolio/DSC07770.webp", },
    { src: "/images/portfolio/DSC07740.webp", className:"col-span-2"},
    { src: "/images/portfolio/DSC07823.webp", className:"col-span-2"},
    { src: "/images/portfolio/DSC08352.webp", className:"col-span-2"},
    { src: "/images/portfolio/DSC08373.webp", className:"col-span-2" },
    { src: "/images/portfolio/DSC08809.webp", className:"col-span-2" },
    { src: "/images/portfolio/DSC08879.webp", className:"col-span-2" },


    
];

const photos = photo.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    className: photo.className,
    objectFit: photo.objectFit 
}));

export default photos;